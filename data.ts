import { Project, ContentType, AboutData } from './types';

export const aboutData: AboutData = {
  name: "Shavonne Yang",
  roles: ["Interdisciplinary Artist", "Pottery", "Installation", "Multimedia"],
  location: "London",
  email: "xhyshavonne@gmail.com",
  overview: [
    "Shavonne Yang is a multi-disciplinary artist working across ceramics, illustration, painting and conceptual objects. Her practice confronts identity, gender and the lived realities of navigating systems that mute or distort marginalised voices. Drawing influence from Riot Grrrl, feminist thought and queer theory, she treats material as a form of dissent. Her ceramics deconstruct vessel forms and challenge the cultural policing of the female body, while her cyberpunk-inspired implants question how technology alters agency, sensation and the definition of being human.",
    "Her work carries anger, wit and empathy in equal measure, creating spaces where those pushed aside by social hierarchies can recognise themselves. She is currently expanding her research into ecofeminism and responsive installations, using bioluminescent organisms to explore how bodies, environments and power shape one another."
  ],
  skills: [
    "Ceramics (hand-building, wheel throwing, experimental sculptural forms)",
    "Mixed-media sculpture and conceptual object-making",
    "Illustration and painting",
    "Cross-media and installation work",
    "Speculative and conceptual prototyping",
    "Sensor-based interaction (heart rate, temperature, responsive materials)",
    "Visual development for performance and theatre",
    "Material research and experimental craft processes"
  ],
  exhibitions: [
    {
      year: "2026",
      title: "DUALITY Exhibition – Group Exhibition",
      location: "Palazzo Durini, Milan, Italy"
    },
    {
      year: "2025",
      title: "Ashes to Ashes – Group Exhibition",
      location: "Asylum Chapel, Caroline Gardens Estate, London",
      description: "Group exhibition presenting experimental installations and sculptures."
    },
    {
      year: "2025",
      title: "Land Wave Studio – Group Exhibition",
      location: "65A Charlotte Street, London",
      description: "Group showcase presenting experimental ceramics and material-focused works."
    },
    {
      year: "2025",
      title: "Open Art Space Market – Ceramic Showcase",
      location: "Portobello Road, Kensington, London",
      description: "Independent market exhibition featuring sculptural ceramic works exploring form and identity."
    },
    {
      year: "2025",
      title: "Filtrate – Cross-Media Theatre Collaboration",
      location: "Atlas Cinema, LJ Works, London",
      description: "Visual system design and conceptual imagery for the performance project Filtrate."
    },
    {
      year: "2025",
      title: "FRINGE Exhibition",
      location: "Kensington + Chelsea Art Week (KCAW)",
      description: "Exhibited ceramic works as part of the wider KCAW public programme."
    }
  ],
  professionalRoles: [
    "2024: Co-founder & Artist, Land Wave Studio (London) - Studio focused on ceramics, mixed media, and collaborative artistic development. Teaching, production and community-oriented practice.",
    "2020 - 2023: Independent Conceptual and Installation Projects (China & London) - Multimedia work including murals, illustration-led installations and conceptual pieces developed outside academic frameworks (e.g., Windows98 Bar).",
    "Collaborative Creative Practice (New York & China) - Illustration, object-making and visual development projects with Gee Tattoo, CUIXU and other creative groups."
  ],
  education: [
    {
      years: "2023 - 2024",
      degree: "MA Graphic Communication Design",
      school: "Central Saint Martins College of Art & Design, London"
    },
    {
      years: "2021 - 2022",
      degree: "Graduate Diploma in Art & Design",
      school: "Royal College of Art, London"
    },
    {
      years: "2016 – 2020",
      degree: "BFA Communications Design",
      school: "Pratt Institute, New York"
    }
  ]
};

export const projects: Project[] = [
  {
    id: 'graphic-design',
    title: 'Graphic Design',
    category: 'Publication / Design',
    blocks: [
      { type: ContentType.HEADER, content: 'GRAPHIC DESIGN' },

      { type: ContentType.SUBHEADER, content: 'The play "Filtrate"' },
      { type: ContentType.TEXT, content: '2025' },
      { type: ContentType.IMAGE, src: '/portfolio/images/graphic-design/filtrate/filtrate-poster-mockup_副本.jpg', alt: 'Filtrate Poster', caption: 'Filtrate Poster' },
      { type: ContentType.IMAGE, src: '/portfolio/images/graphic-design/filtrate/filtrate-invitation-pillbox_副本.jpg', alt: 'Filtrate Materials', caption: 'Ticket stubs and other materials' },
      { type: ContentType.IMAGE, src: '/portfolio/images/graphic-design/filtrate/filtrate-invitation-mockup_副本.jpg', alt: 'Filtrate Installation', caption: 'Installation view' },

      { type: ContentType.SUBHEADER, content: 'Homosexual Stemps' },
      { type: ContentType.TEXT, content: '2024' },
      { type: ContentType.IMAGE, src: '/portfolio/images/graphic-design/queer-stamps/stamps.jpg', alt: 'Stamps', caption: 'Stamps Design' },


      { type: ContentType.SUBHEADER, content: 'Windows98' },
      { type: ContentType.TEXT, content: '2023' },
      { type: ContentType.IMAGE, src: '/portfolio/images/graphic-design/windows98/3.8-poster.jpg', alt: '3.8-poster.jpg', caption: '3.8-poster.jpg' },
      { type: ContentType.IMAGE, src: '/portfolio/images/graphic-design/windows98/3.8-poster2.jpg', alt: '3.8-poster2.jpg', caption: '3.8-poster2.jpg' },
      { type: ContentType.IMAGE, src: '/portfolio/images/graphic-design/windows98/3.8-poster3.jpg', alt: '3.8-poster3.jpg', caption: '3.8-poster3.jpg' },
      { type: ContentType.IMAGE, src: '/portfolio/images/graphic-design/windows98/windows98-3.8poster.jpg', alt: 'windows98-3.8poster.jpg', caption: 'windows98-3.8poster.jpg' },
      { type: ContentType.IMAGE, src: '/portfolio/images/graphic-design/windows98/Windows98-dj-Poster.jpg', alt: 'Windows98-dj-Poster.jpg', caption: 'Windows98-dj-Poster.jpg' },
      { type: ContentType.IMAGE, src: '/portfolio/images/graphic-design/windows98/windows98-halloween.jpg', alt: 'windows98-halloween.jpg', caption: 'windows98-halloween.jpg' },
      { type: ContentType.IMAGE, src: '/portfolio/images/graphic-design/windows98/windows98-last-poster.jpg', alt: 'windows98-last-poster.jpg', caption: 'windows98-last-poster.jpg' },
      { type: ContentType.IMAGE, src: '/portfolio/images/graphic-design/windows98/windows98-mid-autumn1.jpg', alt: 'windows98-mid-autumn1.jpg', caption: 'windows98-mid-autumn1.jpg' },
      { type: ContentType.IMAGE, src: '/portfolio/images/graphic-design/windows98/windows98-mid-autumn2.jpg', alt: 'windows98-mid-autumn2.jpg', caption: 'windows98-mid-autumn2.jpg' },

      { type: ContentType.HEADER, content: 'ART PUBLICATIONS' },

      { type: ContentType.SUBHEADER, content: 'On The Street' },
      { type: ContentType.TEXT, content: '12p' },
      { type: ContentType.TEXT, content: '2022' },
      { type: ContentType.IMAGE, src: '/portfolio/images/graphic-design/on-the-street/on-the-street-scanned_页面_01_副本.jpg', alt: 'On The Street Cover', caption: 'On The Street' },
      { type: ContentType.IMAGE, src: '/portfolio/images/graphic-design/on-the-street/on-the-street-scanned_页面_02_副本.jpg', alt: 'On The Street Spread 1', caption: 'Spread 1' },
      { type: ContentType.IMAGE, src: '/portfolio/images/graphic-design/on-the-street/on-the-street-scanned_页面_03_副本.jpg', alt: 'On The Street Spread 2', caption: 'Spread 2' },
      { type: ContentType.IMAGE, src: '/portfolio/images/graphic-design/on-the-street/on-the-street-scanned_页面_04_副本.jpg', alt: 'On The Street Spread 3', caption: 'Spread 3' },
      { type: ContentType.IMAGE, src: '/portfolio/images/graphic-design/on-the-street/on-the-street-scanned_页面_05_副本.jpg', alt: 'On The Street Spread 4', caption: 'Spread 4' },

      { type: ContentType.SUBHEADER, content: 'Artist-diary' },
      { type: ContentType.TEXT, content: '24p' },
      { type: ContentType.TEXT, content: '2021' },
      { type: ContentType.IMAGE, src: '/portfolio/images/illustration/artist‘s-diary/artist-diary-scanned&edit_画板 1.jpg', alt: 'Artist-diary Cover', caption: 'Artist-diary' },
      { type: ContentType.IMAGE, src: '/portfolio/images/illustration/artist‘s-diary/artist-diary-scanned&edit-02.jpg', alt: 'Artist-diary Spread 2', caption: 'Spread 2' },
      { type: ContentType.IMAGE, src: '/portfolio/images/illustration/artist‘s-diary/artist-diary-scanned&edit-03.jpg', alt: 'Artist-diary Spread 3', caption: 'Spread 3' },
      { type: ContentType.IMAGE, src: '/portfolio/images/illustration/artist‘s-diary/artist-diary-scanned&edit-04.jpg', alt: 'Artist-diary Spread 4', caption: 'Spread 4' },
      { type: ContentType.IMAGE, src: '/portfolio/images/illustration/artist‘s-diary/artist-diary-scanned&edit-05.jpg', alt: 'Artist-diary Spread 5', caption: 'Spread 5' },
      { type: ContentType.IMAGE, src: '/portfolio/images/illustration/artist‘s-diary/artist-diary-scanned&edit-06.jpg', alt: 'Artist-diary Spread 6', caption: 'Spread 6' },
      { type: ContentType.IMAGE, src: '/portfolio/images/illustration/artist‘s-diary/artist-diary-scanned&edit-07.jpg', alt: 'Artist-diary Spread 7', caption: 'Spread 7' },
      { type: ContentType.IMAGE, src: '/portfolio/images/illustration/artist‘s-diary/artist-diary-scanned&edit-08.jpg', alt: 'Artist-diary Spread 8', caption: 'Spread 8' },
      { type: ContentType.IMAGE, src: '/portfolio/images/illustration/artist‘s-diary/artist-diary-scanned&edit-09.jpg', alt: 'Artist-diary Spread 9', caption: 'Spread 9' },
    ]
  },
  {
    id: 'body-implants',
    title: 'The Perfect Female',
    category: 'Installation / Sculpture',
    blocks: [
      { type: ContentType.HEADER, content: 'PROJECTION' },

      { type: ContentType.HEADER, content: 'BODY IMPLANTS' },

      { type: ContentType.HEADER, content: 'STEREOTYPES <-> IMPLANTS' },
      { type: ContentType.IMAGE, src: '/portfolio/images/the-perfect-female/brain-Bound-control.jpg', alt: 'The Brain Implant Sketch', caption: 'Sketch of Brain Implant' },
      { type: ContentType.SUBHEADER, content: 'The Brain' },
      { type: ContentType.TEXT, content: "The brain represents thought and mental states, reflecting how women change their thought and behaviour patterns in response to societal influences. Such changes are often made to accommodate male-dominated social expectations, such as changing one's thoughts when doing so to flatter a man." },

      { type: ContentType.IMAGE, src: '/portfolio/images/the-perfect-female/arm-Muscle-tuner.jpg', alt: 'The Arm Muscle Implant Sketch', caption: 'Sketch of Arm Muscle Implant' },
      { type: ContentType.SUBHEADER, content: 'The Arm Muscle' },
      { type: ContentType.TEXT, content: "Arm muscles play an important role in everyday activities, including lifting, grasping and other physical labour. In this project, the strength of the arm muscles symbolises the physical labour women perform to maintain the home, such as cleaning. This physical labour not only reflects the role expected of women in the home but also society's expectations and demands for women to be physically active." },

      { type: ContentType.IMAGE, src: '/portfolio/images/the-perfect-female/fingernails-Tactile-aid.jpg', alt: 'The Fingernails Implant Sketch', caption: 'Sketch of Fingernail Implants' },
      { type: ContentType.SUBHEADER, content: 'The Fingernails' },
      { type: ContentType.TEXT, content: "In this project, the changing shape of the nails is not only a symbol of society's demand for women to maintain a refined beauty but also a symbol of the adaptations and sacrifices that women make in their daily domestic activities, especially in activities such as cooking and chopping vegetables for the family." },

      { type: ContentType.HEADER, content: 'USER SAFETY INSTRUCTIONS' },
      { type: ContentType.IMAGE, src: '/portfolio/images/the-perfect-female/bound-control-scanned-front.jpg', alt: 'Bound Control Unit Front', caption: 'Bound Control Unit Front' },
      { type: ContentType.IMAGE, src: '/portfolio/images/the-perfect-female/bound-control-scanned-back.jpg', alt: 'Bound Control Unit Back', caption: 'Bound Control Unit Back' },
      { type: ContentType.IMAGE, src: '/portfolio/images/the-perfect-female/tactile-aid-scanned-front.jpg', alt: 'Tactile-aid Units Front', caption: 'Tactile-aid Units Front' },
      { type: ContentType.IMAGE, src: '/portfolio/images/the-perfect-female/tactile-aid-scanned-back.jpg', alt: 'Tactile-aid Units Back', caption: 'Tactile-aid Units Back' },
      { type: ContentType.IMAGE, src: '/portfolio/images/the-perfect-female/muscle-tuner-scanned-front.jpg', alt: 'Muscle Tuner Unit Front', caption: 'Muscle Tuner Unit Front' },
      { type: ContentType.IMAGE, src: '/portfolio/images/the-perfect-female/muscle-tuner-scanned-back.jpg', alt: 'Muscle Tuner Unit Back', caption: 'Muscle Tuner Unit Back' },

      { type: ContentType.HEADER, content: 'BODY IMPLANTS IN DOMESTIC SCENE' },
      { type: ContentType.IMAGE, src: '/portfolio/images/the-perfect-female/bound-control-photo1.jpg', alt: 'Bound Control Unit - 1', caption: 'Bound Control Unit - 1' },
      { type: ContentType.IMAGE, src: '/portfolio/images/the-perfect-female/bound-control-photo2.jpg', alt: 'Bound Control Unit - 2', caption: 'Bound Control Unit - 2' },
      { type: ContentType.IMAGE, src: '/portfolio/images/the-perfect-female/bound-control-photo3.jpg', alt: 'Bound Control Unit - 3', caption: 'Bound Control Unit - 3' },

      { type: ContentType.IMAGE, src: '/portfolio/images/the-perfect-female/muscle-tuner-photo1.jpg', alt: 'Muscle Tuner Unit - 1', caption: 'Muscle Tuner Unit - 1' },
      { type: ContentType.IMAGE, src: '/portfolio/images/the-perfect-female/muscle-tuner-photo2.jpg', alt: 'Muscle Tuner Unit - 2', caption: 'Muscle Tuner Unit - 2' },

      { type: ContentType.IMAGE, src: '/portfolio/images/the-perfect-female/tactile-aid-photo1.jpg', alt: 'Tactile-aid Units - 1', caption: 'Tactile-aid Units - 1' },
      { type: ContentType.IMAGE, src: '/portfolio/images/the-perfect-female/tactile-aid-photo2.jpg', alt: 'Tactile-aid Units - 2', caption: 'Tactile-aid Units - 2' },

      { type: ContentType.HEADER, content: 'WEBSITE DESIGN & PRODUCTS' },
      { type: ContentType.TEXT, content: "The webpage of AnKang Bio™ is created for curating each of body implants. By including branding, product shots, and invented narratives in the website building, I wanted to achieve an image of a large biotech corporation led by a patriarch. To achieve the imagery of this authentic corporation, I took another set of photographs of body implants, warned by a model against a clean, white background." },
      { type: ContentType.IMAGE, src: '/portfolio/images/the-perfect-female/web1.jpg', alt: 'AnKang Bio Website Mockup 1', caption: 'Website Design Mockup 1' },
      { type: ContentType.IMAGE, src: '/portfolio/images/the-perfect-female/web2.jpg', alt: 'AnKang Bio Website Mockup 2', caption: 'Website Design Mockup 2' },

      { type: ContentType.HEADER, content: 'INVESTIGATION REPORT VIDEO' },
      { type: ContentType.TEXT, content: "If the AnKang Bio™ is the supporter of this future, then the video is the opposite. The video is created based on the concept of investigating AnKang Biotechnology Ltd. The tension is revealed in this video by exposing that the AnKang Bio™ actually create problematic products that cause injury and damage to the property of their clients. The video is created with found footage of real news in China and the footage of a model wearing body implants. The reporter of this video is an AI-generated avatar." },
      { type: ContentType.VIDEO_LINK, content: "https://youtu.be/osWV2gntCI8" },
    ]
  },
  {
    id: 'wrong-vessels',
    title: 'Wrong Vessels',
    category: 'Ceramics',
    blocks: [
      { type: ContentType.HEADER, content: 'WRONG VESSELS' },
      { type: ContentType.TEXT, content: 'This ceramic series makes people uncomfortable on purpose. Female genitalia are supposed to stay hidden. When the vulva becomes visible, it gets coded as impure, shameful, something that shouldn\'t be seen. This is social discipline: women learn early that certain parts of our bodies must be concealed or we become "unclean."' },
      { type: ContentType.TEXT, content: 'I put vulva forms on ceramic vessels as direct refusal of this rule. If discomfort arises, that discomfort is the point. It exposes how deeply we\'ve internalized the idea that female genitalia are obscene while male genitalia appear on monuments, in art, as symbols of power.' },
      { type: ContentType.TEXT, content: 'The vessels themselves are deliberately wrong. They don\'t function properly as containers. They leak, refuse to hold, crack in ways I can\'t predict. This isn\'t technical failure. It\'s the concept.' },
      { type: ContentType.TEXT, content: 'When I fire these pieces at 1200-1280°C, I lose control. The clay warps. Glazes flow where I didn\'t plan. Forms collapse. Cracks appear. I set up conditions but the material does what it wants. This is the clay and glaze resisting me as the person trying to control them.' },
      { type: ContentType.TEXT, content: 'I see this material resistance as parallel to women resisting patriarchal control. Both the clay and women are expected to behave, to take the shape demanded of them, to perform correctly. When either refuses, the response is similar: this is wrong, this failed, this needs to be fixed or destroyed.' },
      { type: ContentType.TEXT, content: 'But what if the refusal is the work? What if "wrong" is actually resistance made visible? These vessels exist because I want forms that have been hidden to occupy space with the same legitimacy given to phallic forms throughout history. Not to reverse anything. To refuse the terms entirely.' },

      { type: ContentType.IMAGE, src: '/portfolio/images/wrong-vessels/0U5A9947.jpg', alt: '0U5A9947', caption: '' },
      { type: ContentType.IMAGE, src: '/portfolio/images/wrong-vessels/10-1.jpg', alt: '10-1', caption: '' },
      { type: ContentType.IMAGE, src: '/portfolio/images/wrong-vessels/10-2_副本.jpg', alt: '10-2_副本', caption: '' },
      { type: ContentType.IMAGE, src: '/portfolio/images/wrong-vessels/10-3.jpg', alt: '10-3', caption: '' },
      { type: ContentType.IMAGE, src: '/portfolio/images/wrong-vessels/10-4_副本.jpg', alt: '10-4_副本', caption: '' },
      { type: ContentType.IMAGE, src: '/portfolio/images/wrong-vessels/17-1_副本.jpg', alt: '17-1_副本', caption: '' },
      { type: ContentType.IMAGE, src: '/portfolio/images/wrong-vessels/17-2_副本.jpg', alt: '17-2_副本', caption: '' },
      { type: ContentType.IMAGE, src: '/portfolio/images/wrong-vessels/18-1_副本.jpg', alt: '18-1_副本', caption: '' },

      { type: ContentType.IMAGE, src: '/portfolio/images/wrong-vessels/18-6_副本.jpg', alt: '18-6_副本', caption: '' },
      { type: ContentType.IMAGE, src: '/portfolio/images/wrong-vessels/18-7_副本.jpg', alt: '18-7_副本', caption: '' },
      { type: ContentType.IMAGE, src: '/portfolio/images/wrong-vessels/22-1.jpg', alt: '22-1', caption: '' },
      { type: ContentType.IMAGE, src: '/portfolio/images/wrong-vessels/22-2.jpg', alt: '22-2', caption: '' },
      { type: ContentType.IMAGE, src: '/portfolio/images/wrong-vessels/22-3.jpg', alt: '22-3', caption: '' },

      { type: ContentType.IMAGE, src: '/portfolio/images/wrong-vessels/41-2_副本.jpg', alt: '41-2_副本', caption: '' },
      { type: ContentType.IMAGE, src: '/portfolio/images/wrong-vessels/41-3_副本.jpg', alt: '41-3_副本', caption: '' },
      { type: ContentType.IMAGE, src: '/portfolio/images/wrong-vessels/41-4_副本.jpg', alt: '41-4_副本', caption: '' },

      { type: ContentType.IMAGE, src: '/portfolio/images/wrong-vessels/41-6_副本.jpg', alt: '41-6_副本', caption: '' },
      { type: ContentType.IMAGE, src: '/portfolio/images/wrong-vessels/45-1.jpg', alt: '45-1', caption: '' },
      { type: ContentType.IMAGE, src: '/portfolio/images/wrong-vessels/45-2.jpg', alt: '45-2', caption: '' },
      { type: ContentType.IMAGE, src: '/portfolio/images/wrong-vessels/45-3.jpg', alt: '45-3', caption: '' },
      { type: ContentType.IMAGE, src: '/portfolio/images/wrong-vessels/45-4.jpg', alt: '45-4', caption: '' },
      { type: ContentType.IMAGE, src: '/portfolio/images/wrong-vessels/46-1.jpg', alt: '46-1', caption: '' },
      { type: ContentType.IMAGE, src: '/portfolio/images/wrong-vessels/46-2.jpg', alt: '46-2', caption: '' },
      { type: ContentType.IMAGE, src: '/portfolio/images/wrong-vessels/46-3.jpg', alt: '46-3', caption: '' },
      { type: ContentType.IMAGE, src: '/portfolio/images/wrong-vessels/DSC04926_副本.jpg', alt: 'DSC04926_副本', caption: '' },
      { type: ContentType.IMAGE, src: '/portfolio/images/wrong-vessels/46-4.jpg', alt: '46-4', caption: '' },
      { type: ContentType.IMAGE, src: '/portfolio/images/wrong-vessels/54-1_副本.jpg', alt: '54-1_副本', caption: '' },
      { type: ContentType.IMAGE, src: '/portfolio/images/wrong-vessels/54-2_副本.jpg', alt: '54-2_副本', caption: '' },
      { type: ContentType.IMAGE, src: '/portfolio/images/wrong-vessels/54-3_副本.jpg', alt: '54-3_副本', caption: '' },
      { type: ContentType.IMAGE, src: '/portfolio/images/wrong-vessels/54-4_副本.jpg', alt: '54-4_副本', caption: '' },
      { type: ContentType.IMAGE, src: '/portfolio/images/wrong-vessels/54-5_副本.jpg', alt: '54-5_副本', caption: '' },
      { type: ContentType.IMAGE, src: '/portfolio/images/wrong-vessels/54-6_副本.jpg', alt: '54-6_副本', caption: '' },
    ]
  },
  {
    id: 'illustration',
    title: 'Illustration',
    category: 'Illustration',
    blocks: [
      { type: ContentType.HEADER, content: 'ILLUSTRATION' },

      { type: ContentType.SUBHEADER, content: 'Smoking Kills' },
      { type: ContentType.IMAGE, src: '/portfolio/images/illustration/Smoking_kills_副本.jpg', alt: 'Smoking Kills', caption: '' },



      { type: ContentType.SUBHEADER, content: 'The Chip Bag' },
      { type: ContentType.IMAGE, src: '/portfolio/images/illustration/the-chip-bag/chip-bag-1.jpg', alt: 'The Chip Bag Page 1', caption: '' },
      { type: ContentType.IMAGE, src: '/portfolio/images/illustration/the-chip-bag/chip-bag-2.jpg', alt: 'The Chip Bag Page 2', caption: '' },
      { type: ContentType.IMAGE, src: '/portfolio/images/illustration/the-chip-bag/chip-bag-3.jpg', alt: 'The Chip Bag Page 3', caption: '' },
      { type: ContentType.IMAGE, src: '/portfolio/images/illustration/the-chip-bag/chip-bag-4.jpg', alt: 'The Chip Bag Page 4', caption: '' },
      { type: ContentType.IMAGE, src: '/portfolio/images/illustration/the-chip-bag/chip-bag-5.jpg', alt: 'The Chip Bag Page 5', caption: '' },
      { type: ContentType.IMAGE, src: '/portfolio/images/illustration/the-chip-bag/chip-bag-6.jpg', alt: 'The Chip Bag Page 6', caption: '' },

      { type: ContentType.SUBHEADER, content: 'The Zoo' },
      { type: ContentType.IMAGE, src: '/portfolio/images/illustration/the-zoo/the-zoo-illustration/1.jpg', alt: 'The Zoo 1', caption: '' },
      { type: ContentType.IMAGE, src: '/portfolio/images/illustration/the-zoo/the-zoo-illustration/2.jpg', alt: 'The Zoo 2', caption: '' },
      { type: ContentType.IMAGE, src: '/portfolio/images/illustration/the-zoo/the-zoo-illustration/3.jpg', alt: 'The Zoo 3', caption: '' },
      { type: ContentType.IMAGE, src: '/portfolio/images/illustration/the-zoo/the-zoo-illustration/4.jpg', alt: 'The Zoo 4', caption: '' },
      { type: ContentType.IMAGE, src: '/portfolio/images/illustration/the-zoo/the-zoo-illustration/5.jpg', alt: 'The Zoo 5', caption: '' },
      { type: ContentType.IMAGE, src: '/portfolio/images/illustration/the-zoo/the-zoo-illustration/zoo-6.jpg', alt: 'The Zoo 6', caption: '' },
      { type: ContentType.IMAGE, src: '/portfolio/images/illustration/the-zoo/the-zoo-illustration/zoo-7.jpg', alt: 'The Zoo 7', caption: '' },
      { type: ContentType.IMAGE, src: '/portfolio/images/illustration/the-zoo/the-zoo-illustration/8.jpg', alt: 'The Zoo 8', caption: '' },
      { type: ContentType.IMAGE, src: '/portfolio/images/illustration/the-zoo/the-zoo-illustration/9.jpg', alt: 'The Zoo 9', caption: '' },
      { type: ContentType.IMAGE, src: '/portfolio/images/illustration/the-zoo/the-zoo-illustration/character-sketch.jpg', alt: 'The Zoo Character Sketch', caption: '' },
    ]
  },
  {
    id: 'paintings',
    title: 'Paintings',
    category: 'Oil on Canvas',
    blocks: [
      { type: ContentType.IMAGE, src: '/portfolio/images/oil-painting/boy-with-raven.jpg', alt: 'boy-with-raven', caption: 'boy-with-raven' },
      { type: ContentType.IMAGE, src: '/portfolio/images/oil-painting/Self-portrait-painting.jpg', alt: 'Self-portrait-painting', caption: 'Self-portrait-painting' },
      { type: ContentType.IMAGE, src: '/portfolio/images/oil-painting/fish.jpg', alt: 'fish', caption: 'fish' },
      { type: ContentType.IMAGE, src: '/portfolio/images/oil-painting/Fish-in-space.jpg', alt: 'Fish-in-space', caption: 'Fish-in-space' },
      { type: ContentType.IMAGE, src: '/portfolio/images/oil-painting/pigeon-and-rat2.jpg', alt: 'pigeon-and-rat2', caption: 'pigeon-and-rat2' },
      { type: ContentType.IMAGE, src: '/portfolio/images/oil-painting/interior1.jpg', alt: 'interior1', caption: 'interior1' },
      { type: ContentType.IMAGE, src: '/portfolio/images/oil-painting/interior2.jpg', alt: 'interior2', caption: 'interior2' },
      { type: ContentType.IMAGE, src: '/portfolio/images/oil-painting/interior3.jpg', alt: 'interior3', caption: 'interior3' },
      { type: ContentType.IMAGE, src: '/portfolio/images/oil-painting/chain.jpg', alt: 'chain', caption: 'chain' },
      { type: ContentType.IMAGE, src: '/portfolio/images/oil-painting/construction.jpg', alt: 'construction', caption: 'construction' },
    ]
  }
];
