import fs from 'fs';
import path from 'path';

const dataFilePath = path.join(process.cwd(), 'data.ts');
let dataTsContent = fs.readFileSync(dataFilePath, 'utf-8');

// Mapping logical projects to the user's folder names
const folderMapping = {
    'Filtrate': [
        '/images/graphic-design/filtrate/filtrate-poster-mockup_副本.jpg',
        '/images/graphic-design/filtrate/filtrate-invitation-pillbox_副本.jpg',
        '/images/graphic-design/filtrate/filtrate-invitation-mockup_副本.jpg'
    ],
    'Homosexual Stemps': [
        '/images/graphic-design/queer-stamps/stamps.jpg',
        '/images/graphic-design/windows98/3.8-poster.jpg', // filler
        '/images/graphic-design/windows98/3.8-poster2.jpg' // filler
    ],
    'On The Street': Array.from({ length: 5 }).map((_, i) => `/images/graphic-design/on-the-street/on-the-street-scanned_页面_0${i + 1}_副本.jpg`),
    'Artist-diary': Array.from({ length: 5 }).map((_, i) => `/images/illustration/artist‘s-diary/artist-diary-scanned&edit-0${i + 2}.jpg`),
    'BODY IMPLANTS': [
        '/images/the-perfect-female/brain-Bound-control.jpg',
        '/images/the-perfect-female/arm-Muscle-tuner.jpg',
        '/images/the-perfect-female/fingernails-Tactile-aid.jpg',
        '/images/the-perfect-female/tactile-aid-scanned-front.jpg',
        '/images/the-perfect-female/bound-control-scanned-front.jpg',
        '/images/the-perfect-female/muscle-tuner-scanned-front.jpg',
        '/images/the-perfect-female/bound-control-scanned-back.jpg',
        '/images/the-perfect-female/tactile-aid-scanned-back.jpg',
        '/images/the-perfect-female/muscle-tuner-scanned-back.jpg',
        '/images/the-perfect-female/bound-control-photo1.jpg',
        '/images/the-perfect-female/bound-control-photo2.jpg',
        '/images/the-perfect-female/bound-control-photo3.jpg',
        '/images/the-perfect-female/muscle-tuner-photo1.jpg',
        '/images/the-perfect-female/muscle-tuner-photo2.jpg',
        '/images/the-perfect-female/tactile-aid-photo1.jpg',
        '/images/the-perfect-female/tactile-aid-photo2.jpg',
        '/images/the-perfect-female/web1.jpg',
        '/images/the-perfect-female/web2.jpg',
        '/images/the-perfect-female/video1.jpg',
    ],
    'Wrong Vessels': [
        '/images/wrong-vessels/10-1.jpg',
        '/images/wrong-vessels/10-2_副本.jpg',
        '/images/wrong-vessels/10-3.jpg',
        '/images/wrong-vessels/10-4_副本.jpg',
        '/images/wrong-vessels/17-1_副本.jpg'
    ],
    'Paintings': [
        '/images/oil-painting/boy-with-raven.jpg',
        '/images/oil-painting/Self-portrait-painting.jpg',
        '/images/oil-painting/fish.jpg',
        '/images/oil-painting/Fish-in-space.jpg',
        '/images/oil-painting/pigeon-and-rat2.jpg',
        '/images/oil-painting/interior1.jpg',
        '/images/oil-painting/interior2.jpg',
        '/images/oil-painting/interior3.jpg',
        '/images/oil-painting/chain.jpg',
        '/images/oil-painting/construction.jpg',
        '/images/oil-painting/Fish-in-space.jpg',
        '/images/oil-painting/fish.jpg',
        '/images/oil-painting/Self-portrait-painting.jpg',
    ]
};

// Very basic manual matching logic just to map what's in data.ts sequentially
const imgRegex = /\{ type: ContentType\.IMAGE, src: '(\/images\/image-\d+\.jpg)',/g;
const matches = [...dataTsContent.matchAll(imgRegex)];

// Replace all matches sequentially using the provided images
const allImagesFlat = [
    ...folderMapping['Filtrate'],
    ...folderMapping['Homosexual Stemps'],
    ...folderMapping['On The Street'],
    ...folderMapping['Artist-diary'],
    ...folderMapping['BODY IMPLANTS'],
    ...folderMapping['Wrong Vessels'],
    ...folderMapping['Paintings'],
];

let i = 0;
dataTsContent = dataTsContent.replace(imgRegex, (match, p1) => {
    const replacement = allImagesFlat[i] ? `{ type: ContentType.IMAGE, src: '${allImagesFlat[i]}',` : match;
    i++;
    return replacement;
});

fs.writeFileSync(dataFilePath, dataTsContent, 'utf-8');
console.log('Replaced', i, 'images');
