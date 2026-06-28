export const site = {
  brand: 'Hugo Davion',
  locale: 'fr_FR',
  /** URL absolue du site en production (pour OG / canonical). Laisser vide en local. */
  canonicalUrl: 'https://dariohd.github.io/hugodavion/',
  description:
    'Portfolio technique de Hugo Davion : sites web, applications React/TypeScript, portfolios interactifs et jeux (Godot, UE5, Babylon.js).',
  ogImage: 'assets/og-cover.jpg',
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
  linkedin: 'https://www.linkedin.com/in/hugodavion/',
  /** Chemin vers un CV PDF (ex. assets/cv-hugo.pdf). Masqué si vide. */
  cv: 'cv.html',
  photo: 'assets/hugo-portrait.png',
  available: 'Disponible',
  location: 'France',
};

export const hubLinks = {
  root: '../../',
  bulleTonSite: '../../Entreprise/BulleTonSite/',
  portfolioDariohd: '../dariohd/',
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
  { key: 'dispo', value: 'disponible' },
  { key: 'cible', value: 'web · full-stack' },
];

/** Projets méta (hors compteur « en ligne »). */
export const metaProjectIds = new Set(['portfolio-site', 'portfolio-dariohd']);

/** Bande défilante — technologies issues des projets du dossier /Projets */
export const marqueeSkills = [
  'HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'Java', 'C#', 'React', 'Next.js', 'Vite', 'PWA', 'Tailwind CSS',
  'Express', 'PostgreSQL', 'Supabase', 'Neon', 'AI SDK', 'WASM', 'Canvas 2D', 'GSAP', 'Framer Motion',
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
      'Java',
      'C#',
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
      'Prototypes et jeux : coop horreur UE5 (CarryTheCurse), brawler navigateur (Pokémon Rumble Web) et portfolio interactif dariohd.',
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
    name: 'ETCBC',
    description:
      'Site pro charpente & construction bois : métiers, zone d’intervention, galerie de chantiers filtrable, devis.',
    role: 'Conception et développement du site vitrine',
    outcome: 'Site en production, référencement local et galerie chantiers filtrable',
    image: 'https://www.etcbc-charpente.fr/images/gallery/realisation-18.webp',
    imageLocal: 'assets/projects/etcbc.jpg',
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
    role: 'Site vitrine multilingue pour client tourisme',
    outcome: 'Galerie, formulaires et version FR/EN en ligne',
    image: 'https://www.lamaisondela.com/images/piscine.jpg',
    imageLocal: 'assets/projects/maison-ela.jpg',
    stack: ['HTML / CSS', 'Formulaires', 'Galerie', 'Multilingue', 'SEO'],
    url: 'https://www.lamaisondela.com/',
  },
  {
    id: 'quai-des-reves',
    category: 'sites',
    name: 'Quai des Rêves',
    description:
      'Landing immersive, ancienne gare sur le GR37 : storytelling, chambres, carte et demande de réservation.',
    role: 'Landing narrative et intégration carte',
    outcome: 'Déployé sur Vercel avec parcours réservation',
    image: 'https://quai-des-reves.vercel.app/images/og-image.jpg',
    imageLocal: 'assets/projects/quai.jpg',
    stack: ['Landing', 'Storytelling', 'OpenStreetMap', 'HTML / CSS'],
    url: 'https://quai-des-reves.vercel.app/',
  },
  {
    id: 'domaine-rochebonne',
    category: 'sites',
    featured: true,
    name: 'Domaine de Rochebonne',
    description:
      'Château et gîtes en Charente-Maritime : site Next.js multilingue, réservation, animations Framer Motion et SEO.',
    role: 'Développement Next.js · client tourisme premium',
    outcome: 'Site en production sur ledomainederochebonne.com',
    image: 'https://l.icdbcdn.com/oh/f2bbba72-1407-4f30-9f44-bebc70b6384e.jpg?w=1200',
    imageLocal: 'assets/projects/rochebonne.jpg',
    imagePosition: 'center 30%',
    stack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'i18n', 'SEO'],
    url: 'https://ledomainederochebonne.com/',
  },
  {
    id: 'rlreplay',
    category: 'sites',
    name: 'RL Replay',
    description:
      'Outil coach 100 % client : analyse de replays Rocket League (WASM), minimap, graphiques boost/possession, comparaison multi-replays.',
    role: 'Développement front et parsing WASM',
    outcome: 'Outil public en ligne, analyse locale sans serveur',
    imageLocal: 'assets/projects/rlreplay.jpg',
    imagePosition: 'top center',
    stack: ['Vite', 'JavaScript', 'WASM', 'Canvas 2D'],
    url: 'https://rl-replay.vercel.app/',
    repo: 'https://github.com/dariohd/RLReplay',
  },
  {
    id: 'sqcdp',
    category: 'sites',
    featured: true,
    name: 'SQCDP',
    description:
      'PWA React/TypeScript pour le pilotage industriel : tableaux animés, mode Daily, PDCA, roulette de réunion et synchronisation hors-ligne via API.',
    role: 'Full-stack : React, API Express, PostgreSQL',
    outcome: 'PWA en production sur Vercel, mode hors-ligne atelier',
    imageLocal: 'assets/projects/sqcdp.jpg',
    stack: ['React', 'TypeScript', 'PWA', 'Tailwind CSS', 'Express', 'PostgreSQL', 'Framer Motion'],
    url: 'https://sqcdp.vercel.app/',
    repo: 'https://github.com/dariohd/SQCDP',
  },
  {
    id: 'forum-libre',
    category: 'sites',
    name: 'Forum libre',
    description:
      'Forum web full-stack : threads, réponses, upload fichiers (Vercel Blob), API serverless et base Neon PostgreSQL.',
    role: 'Full-stack React · API · base de données',
    outcome: 'Application complète prête au déploiement Vercel',
    imageLocal: 'assets/projects/forum.svg',
    stack: ['React', 'TypeScript', 'Vite', 'Neon', 'PostgreSQL', 'Vercel Blob', 'API REST'],
    url: '../../Sites/Forum/',
    local: true,
    demoNote: 'Démo locale · déploiement à venir',
  },
  /* ——— Portfolio ——— */
  {
    id: 'portfolio-dariohd',
    category: 'portfolio',
    name: 'dariohd',
    description:
      'Portfolio interactif : chambre pixel rétro et bureau DHD OS, explorateur de projets avec aperçus live et carte Canvas 2D.',
    role: 'React, TypeScript, Vite, Canvas 2D',
    outcome: 'Portfolio gamifié en ligne · exploration et fenêtres OS',
    imageLocal: 'assets/projects/portfolio-dariohd.svg',
    stack: ['React', 'TypeScript', 'Vite', 'Canvas 2D', 'Framer Motion', 'Zustand'],
    url: hubLinks.portfolioDariohd,
    repo: 'https://github.com/dariohd/dariohd',
    local: true,
  },
  {
    id: 'portfolio-site',
    category: 'portfolio',
    name: 'hugodavion',
    description: 'Portfolio technique : compétences, stack et projets filtrables par domaine (sites, applications, jeux).',
    imageLocal: 'assets/projects/portfolio-site.svg',
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
    role: 'Produit et site commercial · modules JS et thèmes',
    outcome: 'bulletonsite.com en production, démos intégrées dans la page',
    imageLocal: 'assets/projects/bullweb.jpg',
    imagePosition: 'top center',
    stack: ['HTML', 'CSS', 'JS modules', 'Thèmes CSS', 'Vercel'],
    url: 'https://bulletonsite.com',
    repo: 'https://github.com/dariohd/BulleTonSite',
  },
  {
    id: 'bulle',
    category: 'entreprise',
    name: 'Bulle',
    description:
      'Widget IA embarquable pour sites vitrines : chat contextuel, clés par domaine, démo intégrée et déploiement Vercel.',
    role: 'Next.js, AI SDK, widget embeddable',
    outcome: 'Produit en ligne sur bulle-chatbot.vercel.app',
    imageLocal: 'assets/projects/bulle.jpg',
    stack: ['Next.js', 'React', 'AI SDK', 'Tailwind CSS', 'Widget', 'Vercel'],
    url: 'https://bulle-chatbot.vercel.app/',
  },
  /* ——— Jeux ——— */
  {
    id: 'carry-the-curse',
    category: 'jeux',
    name: 'CarryTheCurse',
    description:
      'Prototype coop horreur UE5 : FPS, objets maudits en physique, entité patrouille, puzzles coop et contrat de corruption.',
    imageLocal: 'assets/projects/carry-the-curse.svg',
    stack: ['Unreal Engine 5', 'C++', 'Blueprints', '3D', 'Gameplay'],
    url: '../../Jeux/CarryTheCurse/',
    local: true,
    demoNote: 'Prototype UE5 · éditeur requis',
  },
  {
    id: 'pokemon-rumble-web',
    category: 'jeux',
    featured: true,
    name: 'Pokémon Rumble Web',
    description:
      'Jeu navigateur style Pokémon Rumble : Toy Field, figurines, stages, recrutement et combat auto en WebGL (Babylon.js).',
    role: 'Game dev web · Babylon.js et gameplay',
    outcome: 'Jeu jouable en ligne sur Vercel',
    imageLocal: 'assets/projects/pokerift.jpg',
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
    items: ['Java', 'C#', 'Express', 'PostgreSQL', 'Supabase', 'API REST', 'Framer Motion', 'Recharts', 'Zustand'],
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
  goal: 'Ouvert aux opportunités en développement web et full-stack (CDI, alternance, freelance).',
  paragraphs: [
    'Développeur web et full-stack : sites vitrines (HTML/CSS, SEO), applications React/TypeScript (SQCDP, RL Replay), API Express et PostgreSQL, déploiement Vercel.',
    'Je réalise aussi des portfolios interactifs (Canvas 2D, GSAP) et des outils de communication (thèmes CSS, export vidéo Playwright/ffmpeg).',
    'En game dev : prototype coop UE5 (CarryTheCurse), jeu navigateur Babylon.js (Pokémon Rumble Web), portfolio interactif dariohd.',
  ],
};

export const otherPortfolios = [
  { label: 'dariohd', href: hubLinks.portfolioDariohd, desc: 'Portfolio interactif' },
];

const liveProjects = projects.filter((p) => p.url && !p.local && !metaProjectIds.has(p.id));
const gameProjects = projects.filter((p) => p.category === 'jeux');

export const heroStats = [
  { value: String(liveProjects.length), label: 'sites & apps en ligne' },
  { value: String(gameProjects.length), label: 'projets jeux' },
  { value: String(expertise.length), label: "domaines d'expertise" },
];
