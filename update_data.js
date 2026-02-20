import fs from 'fs';
import path from 'path';

const dataFilePath = path.join(process.cwd(), 'data.ts');
let content = fs.readFileSync(dataFilePath, 'utf-8');

// 1. "Graphic Design" content removals & period updates
content = content.replace(
    /{ type: ContentType\.SUBHEADER, content: 'The play "Filtrate"' },\n\s+{ type: ContentType\.TEXT, content: 'Content: Posters, ticket stubs, and other materials' },\n\s+{ type: ContentType\.TEXT, content: 'Period: 2025' },/g,
    `{ type: ContentType.SUBHEADER, content: 'The play "Filtrate"' },
      { type: ContentType.TEXT, content: '2025' },`
);

content = content.replace(
    /{ type: ContentType\.SUBHEADER, content: 'Homosexual Stemps' },\n\s+{ type: ContentType\.TEXT, content: 'Content: Posters, and other materials' },\n\s+{ type: ContentType\.TEXT, content: 'Period: 2024' },\n\s+{ type: ContentType\.IMAGE, src: '\/images\/graphic-design\/queer-stamps\/stamps\.jpg', alt: 'Stamps', caption: 'Stamps Design' },\n\s+{ type: ContentType\.IMAGE, src: '\/images\/graphic-design\/windows98\/3\.8-poster\.jpg', alt: 'Posters', caption: 'Poster Design' },\n\s+{ type: ContentType\.IMAGE, src: '\/images\/graphic-design\/windows98\/3\.8-poster2\.jpg', alt: 'Envelopes', caption: 'Envelope Design' },/g,
    `{ type: ContentType.SUBHEADER, content: 'Homosexual Stemps' },
      { type: ContentType.TEXT, content: '2024' },
      { type: ContentType.IMAGE, src: '/images/graphic-design/queer-stamps/stamps.jpg', alt: 'Stamps', caption: 'Stamps Design' },`
);

// Add Windows98 underneath
const windows98Images = [
    '3.8-poster.jpg', '3.8-poster2.jpg', '3.8-poster3.jpg',
    'windows98-3.8poster.jpg', 'Windows98-dj-Poster.jpg',
    'windows98-halloween.jpg', 'windows98-last-poster.jpg',
    'windows98-mid-autumn1.jpg', 'windows98-mid-autumn2.jpg'
];
const windows98Code = `
      { type: ContentType.SUBHEADER, content: 'Windows98' },
      { type: ContentType.TEXT, content: '2023' },
${windows98Images.map(img => `      { type: ContentType.IMAGE, src: '/images/graphic-design/windows98/${img}', alt: '${img}', caption: '${img}' },`).join('\n')}
`;

content = content.replace(
    /(      \{ type: ContentType\.HEADER, content: 'ART PUBLICATIONS' \},)/,
    windows98Code + '\n$1'
);

// 2. Art Publications
content = content.replace(
    /{ type: ContentType\.SUBHEADER, content: 'On The Street' },\n\s+{ type: ContentType\.TEXT, content: 'Materials: Printing' },\n\s+{ type: ContentType\.TEXT, content: 'Page: 12p' },\n\s+{ type: ContentType\.TEXT, content: 'Period: 2022' },/g,
    `{ type: ContentType.SUBHEADER, content: 'On The Street' },
      { type: ContentType.TEXT, content: '12p' },
      { type: ContentType.TEXT, content: '2022' },`
);

content = content.replace(
    /{ type: ContentType\.SUBHEADER, content: 'Artist-diary' },\n\s+{ type: ContentType\.TEXT, content: 'Materials: Printing' },\n\s+{ type: ContentType\.TEXT, content: 'Page: 24p' },\n\s+{ type: ContentType\.TEXT, content: 'Period: 2021' },/g,
    `{ type: ContentType.SUBHEADER, content: 'Artist-diary' },
      { type: ContentType.TEXT, content: '24p' },
      { type: ContentType.TEXT, content: '2021' },`
);

// 3. Body Implants - Title
content = content.replace(
    /id: 'body-implants',\n\s+title: 'Body Implants & Projection',/g,
    `id: 'body-implants',\n    title: 'The Perfect Female',`
);

// 4. Body Implants - Photographs & User safety instructions
const photographsToRemove = `      { type: ContentType.HEADER, content: 'Photographs' },
      { type: ContentType.IMAGE, src: '/images/the-perfect-female/tactile-aid-scanned-front.jpg', alt: 'Tactile-aid Units for Fingers', caption: 'Tactile-aid Units for Fingers' },
      { type: ContentType.IMAGE, src: '/images/the-perfect-female/bound-control-scanned-front.jpg', alt: 'Bound Control Unit', caption: 'Bound Control Unit' },
      { type: ContentType.IMAGE, src: '/images/the-perfect-female/muscle-tuner-scanned-front.jpg', alt: 'Muscle Tuner Unit', caption: 'Muscle Tuner Unit' },

`;
content = content.replace(photographsToRemove, '');

const oldSafetyInstructions = `      { type: ContentType.HEADER, content: 'USER SAFETY INSTRUCTIONS' },
      { type: ContentType.TEXT, content: "Bound Control Unit User Manual Scans" },
      { type: ContentType.IMAGE, src: '/images/the-perfect-female/bound-control-scanned-back.jpg', alt: 'User Safety Instructions - Bound Control Unit', caption: 'User Safety Instructions - Bound Control Unit' },
      { type: ContentType.IMAGE, src: '/images/the-perfect-female/tactile-aid-scanned-back.jpg', alt: 'User Safety Instructions - Tactile-aid Units', caption: 'User Safety Instructions - Tactile-aid Units' },
      { type: ContentType.IMAGE, src: '/images/the-perfect-female/muscle-tuner-scanned-back.jpg', alt: 'User Safety Instructions - Muscle Tuner Unit', caption: 'User Safety Instructions - Muscle Tuner Unit' },`;

const newSafetyInstructions = `      { type: ContentType.HEADER, content: 'USER SAFETY INSTRUCTIONS' },
      { type: ContentType.TEXT, content: "Bound Control Unit User Manual Scans" },
      { type: ContentType.IMAGE, src: '/images/the-perfect-female/bound-control-scanned-front.jpg', alt: 'Bound Control Unit Front', caption: 'Bound Control Unit Front' },
      { type: ContentType.IMAGE, src: '/images/the-perfect-female/bound-control-scanned-back.jpg', alt: 'Bound Control Unit Back', caption: 'Bound Control Unit Back' },
      { type: ContentType.IMAGE, src: '/images/the-perfect-female/tactile-aid-scanned-front.jpg', alt: 'Tactile-aid Units Front', caption: 'Tactile-aid Units Front' },
      { type: ContentType.IMAGE, src: '/images/the-perfect-female/tactile-aid-scanned-back.jpg', alt: 'Tactile-aid Units Back', caption: 'Tactile-aid Units Back' },
      { type: ContentType.IMAGE, src: '/images/the-perfect-female/muscle-tuner-scanned-front.jpg', alt: 'Muscle Tuner Unit Front', caption: 'Muscle Tuner Unit Front' },
      { type: ContentType.IMAGE, src: '/images/the-perfect-female/muscle-tuner-scanned-back.jpg', alt: 'Muscle Tuner Unit Back', caption: 'Muscle Tuner Unit Back' },`;

content = content.replace(oldSafetyInstructions, newSafetyInstructions);

// 5. Remove video1 image
content = content.replace(
    /      \{ type: ContentType\.IMAGE, src: '\/images\/the-perfect-female\/video1\.jpg', alt: 'Video Stills', caption: 'Investigation Report Video Stills' \},\n/g,
    ''
);

// 6. Wrong Vessels - replace the small array of images with ALL images
const wrongVesselsImages = fs.readdirSync(path.join(process.cwd(), 'images', 'wrong-vessels'))
    .filter(f => f !== '.DS_Store');

const oldWrongVesselsBlock = `      { type: ContentType.IMAGE, src: '/images/wrong-vessels/10-1.jpg', alt: 'Ceramic Vessel 1', caption: 'H 8.1 x Ø14.4 (cm)' },
      { type: ContentType.IMAGE, src: '/images/wrong-vessels/10-2_副本.jpg', alt: 'Ceramic Vessel 2', caption: 'H36 x W12.2 x D11.6 (cm)' },
      { type: ContentType.IMAGE, src: '/images/wrong-vessels/10-3.jpg', alt: 'Ceramic Vessel 3', caption: 'Split Vessel Form' },
      { type: ContentType.IMAGE, src: '/images/wrong-vessels/10-4_副本.jpg', alt: 'Ceramic Vessel 4', caption: 'H8.7 x Ø10.5 (cm)' },
      { type: ContentType.IMAGE, src: '/images/wrong-vessels/17-1_副本.jpg', alt: 'Ceramic Vessel 5', caption: 'H4.4 x Ø16.1 (cm)' },`;

const newWrongVesselsBlock = wrongVesselsImages.map(img =>
    `      { type: ContentType.IMAGE, src: '/images/wrong-vessels/${img}', alt: '${img.split('.')[0]}', caption: '' },`
).join('\n');

content = content.replace(oldWrongVesselsBlock, newWrongVesselsBlock);

fs.writeFileSync(dataFilePath, content);
console.log('Update Complete.');
