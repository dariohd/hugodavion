export const site = {
  brand: 'Hugo Davion',
  locale: 'fr_FR',
  /** URL absolue du site en production (pour OG / canonical). Laisser vide en local. */
  canonicalUrl: '',
  description:
    'Portfolio technique de Hugo Davion : sites web, applications React/TypeScript, portfolios interactifs et jeux (Godot, UE5, Babylon.js).',
  ogImage: 'assets/hugo-portrait.png',
};

export const profile = {
  name: 'Hugo Davion',
  role: 'Développeur web & full-stack',
  tagline: 'Développeur web, full-stack et game dev',
  bio: 'Je conçois des sites vitrines, des applications métier (React, TypeScript, PostgreSQL) et des expériences interactives. Ouvert aux opportunités en développement web et full-stack.',
  email: 'davionhugo@gmail.com',
  phone: '06 13 80 95 65',
  phoneTel: '+33613809565',
  github: 'https://github.com/dariohd',
  githubUser: 'dariohd',
  linkedin: '',
  /** Chemin vers un CV PDF (ex. assets/cv-hugo.pdf). Masqué si vide. */
  cv: '',
  photo: 'assets/hugo-portrait.png',
  available: 'Disponible',
  location: 'France',
};

export const hubLinks = {
  root: '../../',
  bulleTonSite: '../../Entreprise/BulleTonSite/',
  portfolioGame: '../PortfolioGame/',
  bulleCom: '../../Entreprise/BulleTonSiteCommunication/',
};

export const nav = [
  { id: 'about', label: 'À propos' },
  { id: 'expertise', label: 'Expertise' },
  { id: 'projets', label: 'Projets' },
  { id: 'stack', label: 'Stack' },
  { id: 'autres', label: 'Autres' },
  { id: 'contact', label: 'Contact' },
];

export const heroManifest = [
  { key: 'focus', value: 'développement web' },
  { key: 'aussi', value: 'UE5 · Godot · Babylon.js' },
  { key: 'stack', value: 'React · TypeScript · PostgreSQL' },
];

/** Projets méta (hors compteur « en ligne »). */
export const metaProjectIds = new Set(['portfolio-site', 'portfolio-game']);

/** Bande défilante — technologies issues des projets du dossier /Projets */
export const marqueeSkills = [
  'HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React', 'Vite', 'PWA', 'Tailwind CSS',
  'Express', 'PostgreSQL', 'Supabase', 'WASM', 'Canvas 2D', 'GSAP', 'Framer Motion',
  'Unreal Engine 5', 'C++', 'Godot 4', 'GDScript', 'Babylon.js', 'WebGL',
  'Playwright', 'ffmpeg', 'Vercel', 'SEO', 'OpenStreetMap',
];

export const expertise = [
  {
    id: 'web',
    featured: true,
    title: 'Développement web',
    description:
      'Sites vitrines, landings et interfaces : HTML/CSS, JavaScript, React, TypeScript, Vite, PWA, galeries, formulaires, multilingue, SEO et déploiement Vercel.',
    skills: [
      'HTML / CSS',
      'JavaScript',
      'React',
      'TypeScript',
      'Vite',
      'PWA',
      'SEO',
      'Multilingue',
      'Formulaires',
      'Galerie',
      'Storytelling',
      'OpenStreetMap',
      'Canvas 2D',
      'WASM',
      'GSAP',
      'JS modules',
      'Responsive',
      'Accessibilité',
    ],
  },
  {
    id: 'fullstack',
    title: 'Full-stack & données',
    description:
      'Applications métier de bout en bout : API Express, PostgreSQL, Supabase, tableaux de bord animés et exports PDF.',
    skills: [
      'Express',
      'PostgreSQL',
      'Supabase',
      'API REST',
      'Tailwind CSS',
      'Framer Motion',
      'Recharts',
      'Zustand',
      'Modélisation BDD',
    ],
  },
  {
    id: 'branding',
    title: 'Design & outils',
    description:
      'Identité visuelle, thèmes CSS, portfolios et export vidéo automatisé (Playwright, ffmpeg) pour la communication.',
    skills: ['Design', 'Thèmes CSS', 'Playwright', 'ffmpeg', 'Identité visuelle'],
  },
  {
    id: 'games',
    title: 'Jeux & game dev',
    description:
      'Prototypes et jeux : coop horreur UE5 (C++), aventure narrative Godot 4, brawler navigateur Babylon.js et portfolio interactif Canvas 2D.',
    skills: [
      'Unreal Engine 5',
      'C++',
      'Blueprints',
      'Godot 4',
      'GDScript',
      'Babylon.js',
      'WebGL',
      'Action RPG',
      '2D / 3D',
      'Spritesheets',
      'Gameplay',
    ],
  },
];

/** Filtres alignés sur l’arborescence /Projets */
export const projectCategories = [
  { id: 'all', label: 'Tous' },
  { id: 'sites', label: 'Sites' },
  { id: 'portfolio', label: 'Portfolio' },
  { id: 'entreprise', label: 'Entreprise' },
  { id: 'jeux', label: 'Jeux' },
];

export const projects = [
  /* ——— Sites ——— */
  {
    id: 'etcbc',
    category: 'sites',
    name: 'ETCBC Charpente',
    description:
      'Site pro charpente & construction bois : métiers, zone d’intervention, galerie de chantiers filtrable, devis.',
    stack: ['Site vitrine', 'Galerie', 'SEO local', 'HTML', 'CSS', 'JavaScript'],
    url: 'https://www.etcbc-charpente.com/',
    repo: 'https://github.com/dariohd/ETCBC',
  },
  {
    id: 'maison-ela',
    category: 'sites',
    name: "La Maison d'Ela",
    description:
      'Site vitrine chambre d’hôtes en Dordogne : séjours thématiques, galerie, réservation par e-mail, multilingue.',
    stack: ['HTML / CSS', 'Formulaires', 'Galerie', 'Multilingue', 'SEO'],
    url: 'https://www.lamaisondela.com/',
  },
  {
    id: 'quai-des-reves',
    category: 'sites',
    name: 'Quai des Rêves',
    description:
      'Landing immersive, ancienne gare sur le GR37 : storytelling, chambres, carte et demande de réservation.',
    stack: ['Landing', 'Storytelling', 'OpenStreetMap', 'HTML / CSS'],
    url: 'https://quai-des-reves.vercel.app/',
  },
  {
    id: 'rlreplay',
    category: 'sites',
    featured: true,
    name: 'RL Replay',
    description:
      'Outil coach 100 % client : analyse de replays Rocket League (WASM), minimap, graphiques boost/possession, comparaison multi-replays.',
    stack: ['Vite', 'JavaScript', 'WASM', 'Canvas 2D'],
    url: 'https://dariohd.github.io/RLReplay/',
    repo: 'https://github.com/dariohd/RLReplay',
  },
  {
    id: 'sqcdp',
    category: 'sites',
    featured: true,
    name: 'SQCDP',
    description:
      'PWA React/TypeScript pour le pilotage industriel : tableaux SQCDP animés, PDCA, roulette de réunion et mode hors-ligne en atelier.',
    stack: ['React', 'TypeScript', 'PWA', 'Tailwind CSS', 'Supabase', 'Express', 'PostgreSQL', 'Framer Motion'],
    url: 'https://sqcdp.vercel.app/',
    repo: 'https://github.com/dariohd/SQCDP',
  },
  /* ——— Portfolio ——— */
  {
    id: 'portfolio-game',
    category: 'portfolio',
    name: 'Île des Créations',
    description:
      'Portfolio interactif en vue top-down : explorez une île, découvrez chaque projet dans son bâtiment avec aperçu live.',
    stack: ['React', 'TypeScript', 'Vite', 'Canvas 2D', 'Framer Motion', 'Zustand'],
    url: hubLinks.portfolioGame,
    local: true,
  },
  {
    id: 'portfolio-site',
    category: 'portfolio',
    name: 'Portfolio technique',
    description: 'Ce portfolio : compétences, stack et projets filtrables par domaine (sites, applications, jeux).',
    stack: ['HTML', 'CSS', 'JS modules', 'GSAP', 'SEO'],
    url: './',
    local: true,
  },
  /* ——— Entreprise ——— */
  {
    id: 'bullweb',
    category: 'entreprise',
    featured: true,
    name: 'Bulle ton site',
    description:
      'One-page dynamique : carrousel de réalisations, mini-navigateurs intégrés, modules JS, thèmes CSS. Site commercial artisans & tourisme.',
    stack: ['HTML', 'CSS', 'JS modules', 'Thèmes CSS', 'Vercel'],
    url: 'https://bulletonsite.com',
    repo: 'https://github.com/dariohd/BulleTonSite',
  },
  {
    id: 'bullweb-com',
    category: 'entreprise',
    name: 'Diapo promo 9:16',
    description:
      'Générateur de vidéo verticale Bulle ton site : slides animées, capture Playwright, export MP4 via ffmpeg.',
    stack: ['Design', 'Playwright', 'ffmpeg', 'JavaScript'],
    url: hubLinks.bulleCom,
    local: true,
  },
  /* ——— Jeux ——— */
  {
    id: 'carry-the-curse',
    category: 'jeux',
    featured: true,
    name: 'Carry the Curse',
    description:
      'Prototype coop horreur UE5 : FPS, objets maudits en physique, entité patrouille, puzzles coop et contrat de corruption.',
    stack: ['Unreal Engine 5', 'C++', 'Blueprints', '3D', 'Gameplay'],
    url: '../../Jeux/CarryTheCurse/',
    local: true,
    demoNote: 'Prototype UE5 · éditeur requis',
  },
  {
    id: 'pokemon-hoopa',
    category: 'jeux',
    name: 'HoopaRift',
    description:
      'Fan game non commercial Godot 4 : hub dimensionnel 3D, exploration Kalos/Unys, dialogues, journal de Hoopa et spritesheets 2D.',
    stack: ['Godot 4', 'GDScript', '2D / 3D', 'Spritesheets'],
    url: '../../Jeux/PokemonHoopa/',
    local: true,
    demoNote: 'Fan game · Godot 4.7+',
  },
  {
    id: 'pokemon-rumble-web',
    category: 'jeux',
    featured: true,
    name: 'PokeRift',
    description:
      'Brawler navigateur style Pokémon Rumble : hub, donjons, vagues d’ennemis, combos et collection en WebGL (Babylon.js).',
    stack: ['Babylon.js', 'WebGL', 'Vite', 'JavaScript', 'Action RPG'],
    url: 'https://poke-rift.vercel.app/',
    repo: 'https://github.com/dariohd/PokemonRumbleWeb',
  },
];

export const stackGroups = [
  {
    title: 'Front-end & web',
    highlight: true,
    icon: '◆',
    items: [
      'HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React',
      'Vite', 'PWA', 'Tailwind CSS', 'Canvas 2D', 'WASM', 'GSAP',
      'Responsive', 'Accessibilité', 'SEO', 'Multilingue',
    ],
  },
  {
    title: 'Back-end & données',
    icon: '◇',
    items: ['Express', 'PostgreSQL', 'Supabase', 'API REST', 'Framer Motion', 'Recharts', 'Zustand'],
  },
  {
    title: 'Jeux & game dev',
    icon: '◇',
    items: [
      'Unreal Engine 5', 'C++', 'Blueprints', 'Godot 4', 'GDScript',
      'Babylon.js', 'WebGL', 'Action RPG', '2D / 3D', 'Spritesheets',
    ],
  },
  {
    title: 'Design & outils',
    icon: '◇',
    items: ['Design', 'Thèmes CSS', 'Playwright', 'ffmpeg', 'Git', 'GitHub', 'Vercel'],
  },
];

export const about = {
  title: 'Profil technique',
  paragraphs: [
    'Développeur web et full-stack : sites vitrines (HTML/CSS, SEO), applications React/TypeScript (SQCDP, RL Replay), API Express et PostgreSQL, déploiement Vercel.',
    'Je réalise aussi des portfolios interactifs (Canvas 2D, GSAP) et des outils de communication (thèmes CSS, export vidéo Playwright/ffmpeg).',
    'En game dev : prototype coop UE5 (C++), aventure narrative Godot 4 (HoopaRift), brawler navigateur Babylon.js (PokeRift).',
  ],
};

export const otherPortfolios = [
  { label: 'Bulle ton site', href: hubLinks.bulleTonSite, desc: 'Site clients bulletonsite.com' },
  { label: 'Portfolio jeu', href: hubLinks.portfolioGame, desc: 'Île interactive (Canvas 2D)' },
  { label: 'Bulle ton site · Com', href: hubLinks.bulleCom, desc: 'Diapo commerciale 9:16' },
];

const liveProjects = projects.filter((p) => p.url && !p.local && !metaProjectIds.has(p.id));
const gameProjects = projects.filter((p) => p.category === 'jeux');

export const heroStats = [
  { value: String(liveProjects.length), label: 'sites & apps en ligne' },
  { value: String(gameProjects.length), label: 'projets jeux' },
  { value: String(expertise.length), label: "domaines d'expertise" },
];
