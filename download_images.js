import fs from 'fs';
import path from 'path';
import https from 'https';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dataFilePath = path.join(__dirname, 'data.ts');
const publicImagesDir = path.join(__dirname, 'public', 'images');

// Read data.ts
const dataTsContent = fs.readFileSync(dataFilePath, 'utf-8');

// Regex to find all https://picsum.photos URLs in data.ts
const urlRegex = /https:\/\/picsum\.photos\/[\d\/]+\?random=(\d+)|https:\/\/picsum\.photos\/[\d\/]+/g;
const matches = [...dataTsContent.matchAll(urlRegex)];

async function downloadImage(url, dest) {
    return new Promise((resolve, reject) => {
        https.get(url, (res) => {
            // Handle redirects (picsum.photos often redirects to the actual image URL)
            if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
                return downloadImage(res.headers.location, dest).then(resolve).catch(reject);
            }

            if (res.statusCode !== 200) {
                reject(new Error(`Failed to download image: ${res.statusCode} ${res.statusMessage}`));
                return;
            }

            const fileStream = fs.createWriteStream(dest);
            res.pipe(fileStream);

            fileStream.on('finish', () => {
                fileStream.close();
                resolve();
            });

            fileStream.on('error', (err) => {
                fs.unlink(dest, () => reject(err)); // Delete the file if there was an error
            });
        }).on('error', (err) => {
            reject(err);
        });
    });
}

async function main() {
    const uniqueUrls = new Set(matches.map(m => m[0]));
    console.log(`Found ${uniqueUrls.size} unique image URLs.`);

    let newContent = dataTsContent;

    for (const match of matches) {
        const fullUrl = match[0];
        const randomIdMatch = fullUrl.match(/random=(\d+)/);
        let filename;

        if (randomIdMatch) {
            filename = `image-${randomIdMatch[1]}.jpg`;
        } else {
            // Extract dimensions if no random ID
            const dimMatch = fullUrl.match(/(\d+)\/(\d+)$/);
            if (dimMatch) {
                filename = `image-${dimMatch[1]}x${dimMatch[2]}.jpg`
            } else {
                filename = `image-${Date.now()}.jpg`;
            }
        }

        const localPath = `/images/${filename}`;
        const destPath = path.join(publicImagesDir, filename);

        if (!fs.existsSync(destPath)) {
            console.log(`Downloading ${fullUrl} to ${destPath}...`);
            try {
                await downloadImage(fullUrl, destPath);
                console.log(`Success.`);
            } catch (err) {
                console.error(`Failed to download ${fullUrl}:`, err);
                continue; // Skip replacement if download fails
            }
        } else {
            console.log(`${destPath} already exists, skipping download.`);
        }

        // Replace the URL in the content string with the local path
        newContent = newContent.replace(fullUrl, localPath);
    }

    // Write the updated content back to data.ts
    fs.writeFileSync(dataFilePath, newContent, 'utf-8');
    console.log('Finished updating data.ts');
}

main().catch(err => {
    console.error('An error occurred:', err);
});
