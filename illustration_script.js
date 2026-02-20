import fs from 'fs';
import path from 'path';

const dataFilePath = path.join(process.cwd(), 'data.ts');
let content = fs.readFileSync(dataFilePath, 'utf-8');

// 1. Remove specific Wrong Vessels images
const imagesToRemove = [
    '18-2_副本.jpg',
    '18-3_副本.jpg',
    '18-4_副本.jpg',
    '18-5_副本.jpg',
    '41-1_副本.jpg',
    '41-5_副本.jpg'
];

for (const imgName of imagesToRemove) {
    const regex = new RegExp(`\\s*\\{ type: ContentType\\.IMAGE, src: '\\/images\\/wrong-vessels\\/${imgName}', alt: '[^']+', caption: '' \\},?\\n`, 'g');
    content = content.replace(regex, '');
}

// 2. Add Illustration Section
// We need to inject this between wrong-vessels and paintings
// Locate paintings start:
const paintingsStartIndex = content.indexOf(`  {\n    id: 'paintings',`);
if (paintingsStartIndex === -1) {
    console.error("Could not find paintings section!");
    process.exit(1);
}

// Prepare illustration block
// The illustration folder structure:
// images/illustration/Smoking_kills_副本.jpg
// images/illustration/artist‘s-diary/*
// images/illustration/the-chip-bag/*
// images/illustration/the-zoo/the-zoo-illustration/*

const illustrationFolders = fs.readdirSync(path.join(process.cwd(), 'images', 'illustration')).filter(f => f !== '.DS_Store');

let blocks = [];
blocks.push(`      { type: ContentType.HEADER, content: 'ILLUSTRATION' },`);

// Single loose files like Smoking_kills
const looseFiles = illustrationFolders.filter(f => f.endsWith('.jpg') || f.endsWith('.png'));
for (const loose of looseFiles) {
    blocks.push(`      { type: ContentType.IMAGE, src: '/images/illustration/${loose}', alt: '${loose.split('.')[0]}', caption: '${loose.split('.')[0]}' },`);
}

// Folders
const subFolders = illustrationFolders.filter(f => !f.endsWith('.jpg') && !f.endsWith('.png') && f !== 'the-zoo' && f !== '.DS_Store');
for (const sub of subFolders) {
    blocks.push(`      { type: ContentType.SUBHEADER, content: '${sub}' },`);
    const subPath = path.join(process.cwd(), 'images', 'illustration', sub);
    const subFiles = fs.readdirSync(subPath).filter(f => !f.startsWith('.'));
    // Sort logically if there are numbers
    subFiles.sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' }));
    for (const file of subFiles) {
        blocks.push(`      { type: ContentType.IMAGE, src: '/images/illustration/${sub}/${file}', alt: '${file.split('.')[0]}', caption: '${file.split('.')[0]}' },`);
    }
}

// Handle the zoo specifically because of its nested structure
const zooPath = path.join(process.cwd(), 'images', 'illustration', 'the-zoo', 'the-zoo-illustration');
if (fs.existsSync(zooPath)) {
    blocks.push(`      { type: ContentType.SUBHEADER, content: 'the-zoo' },`);
    const zooFiles = fs.readdirSync(zooPath).filter(f => !f.startsWith('.'));
    zooFiles.sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' }));
    for (const file of zooFiles) {
        blocks.push(`      { type: ContentType.IMAGE, src: '/images/illustration/the-zoo/the-zoo-illustration/${file}', alt: '${file.split('.')[0]}', caption: '${file.split('.')[0]}' },`);
    }
}

const illustrationSection = `  {
    id: 'illustration',
    title: 'Illustration',
    category: 'Illustration',
    blocks: [
${blocks.join('\n')}
    ]
  },
`;

content = content.slice(0, paintingsStartIndex) + illustrationSection + content.slice(paintingsStartIndex);

fs.writeFileSync(dataFilePath, content);
console.log('Update Complete.');
