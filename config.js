export const site = {
  brand: 'Hugo Davion',
  locale: 'fr_FR',
  /** URL absolue du site en production (pour OG / canonical). Laisser vide en local. */
  canonicalUrl: 'https://hugodavion.vercel.app/',
  description:
    'Portfolio de Hugo Davion — développeur full-stack en alternance (CGI), sites web, PWA métier et game dev.',
  ogImage: 'assets/og-cover.jpg',
};

export const profile = {
  name: 'Hugo Davion',
  role: 'Développeur full-stack',
  tagline: 'Web, applications métier & game dev',
  bio: 'Développeur full stack et technicien réseaux. En alternance chez CGI (front-end TypeScript, back-end Java Spring, PostgreSQL) et en cycle ingénieur RIOC à UniLaSalle Amiens. Je conçois aussi des sites vitrines, PWA métier et expériences interactives en indépendant.',
  details: '22 ans · Permis B',
  email: 'davionhugo@gmail.com',
  phone: '06 13 80 95 65',
  phoneTel: '+33613809565',
  github: 'https://github.com/dariohd',
  githubUser: 'dariohd',
  linkedin: 'https://www.linkedin.com/in/hugodavion/',
  cv: 'assets/cv-hugo.pdf',
  cvPreview: 'cv.html',
  photo: 'assets/hugo-portrait.png',
  available: 'Disponible',
  location: 'France',
};

export const hubLinks = {
  /** Hub Portfolio/index.html — monorepo local uniquement */
  root: '../',
  portfolioDariohd: 'https://dariohd.vercel.app/',
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
  { key: 'poste', value: 'alternance CGI' },
  { key: 'formation', value: 'ingénieur RIOC · UniLaSalle' },
  { key: 'stack', value: 'TypeScript · Java · PostgreSQL' },
  { key: 'aussi', value: 'React · PWA · Vercel' },
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
      'Applications métier : API Express ou Java Spring, PostgreSQL, tableaux de bord animés, PWA et exports PDF.',
    skills: [
      'Java',
      'Spring',
      'C#',
      'Express',
      'PostgreSQL',
      'Supabase',
      'Neon',
      'API REST',
      'Tailwind CSS',
      'Framer Motion',
      'Recharts',
      'Zustand',
      'Modélisation BDD',
    ],
  },
  {
    id: 'infra',
    title: 'Réseaux & systèmes',
    description:
      'Administration et support : TCP/IP, VLAN, Active Directory, parc postes, Linux et Windows Server.',
    skills: ['TCP/IP', 'VLAN', 'Active Directory', 'Linux', 'Windows Server', 'GLPI', 'ServiceNow'],
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
      'Prototypes et jeux : coop horreur UE5 (CarryTheCurse), PokeArena (2.5D PokéAPI), Pokédex et portfolio interactif dariohd.',
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
  { id: 'outils', label: 'Outils' },
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
    image: 'https://www.etcbc-charpente.com/images/gallery/realisation-18.webp',
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
    repo: 'https://github.com/dariohd/LaMaisonDEla',
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
    repo: 'https://github.com/dariohd/QuaiDesReves',
  },
  {
    id: 'domaine-roche',
    category: 'sites',
    name: 'Domaine de Roche',
    description:
      'Template Next.js (démo Bulle) pour gîtes & château : i18n, Framer Motion, SEO. Placeholders volontaires, pas un site client.',
    role: 'Template vitrine tourisme · Next.js',
    outcome: 'Démo publique · catalogue template Bulle ton site',
    image: 'https://l.icdbcdn.com/oh/509ecfea-facf-4d85-924d-7e36b8343ddf.jpg',
    imageLocal: 'assets/projects/domainederoche.jpg',
    imagePosition: 'center 30%',
    stack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'i18n', 'Template'],
    url: 'https://domainederoche.vercel.app/',
    repo: 'https://github.com/dariohd/DomaineDeRoche',
  },
  {
    id: 'forum-libre',
    category: 'sites',
    name: 'Forum libre',
    description:
      'Forum web full-stack : threads, réponses, upload fichiers (Vercel Blob), API serverless et base Neon PostgreSQL.',
    role: 'Full-stack React · API · base de données',
    outcome: 'En ligne sur mur-libre.vercel.app',
    imageLocal: 'assets/projects/forum.svg',
    stack: ['React', 'TypeScript', 'Vite', 'Neon', 'PostgreSQL', 'Vercel Blob', 'API REST'],
    url: 'https://mur-libre.vercel.app/',
    repo: 'https://github.com/dariohd/Forum',
  },
  /* ——— Outils ——— */
  {
    id: 'planning',
    category: 'outils',
    featured: true,
    name: 'Planning',
    description:
      'Planning de présence atelier : Next.js, Prisma, Neon, Auth.js, i18n FR/EN/PT, graphiques et tests Playwright.',
    role: 'Full-stack Next.js · auth · PostgreSQL',
    outcome: 'Outil métier en production (migration depuis Google Apps Script)',
    imageLocal: 'assets/projects/planning.svg',
    stack: ['Next.js', 'React', 'Prisma', 'Neon', 'Auth.js', 'Tailwind CSS', 'Playwright'],
    url: 'https://planning-presence-atelier.vercel.app/',
    repo: 'https://github.com/dariohd/Planning',
  },
  {
    id: 'rlreplay',
    category: 'outils',
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
    category: 'outils',
    featured: true,
    name: 'SQCDP',
    description:
      'PWA React/TypeScript pour le pilotage industriel : tableaux animés, mode Daily, PDCA, roulette de réunion et synchronisation hors-ligne via API.',
    role: 'Full-stack : React, API Express, PostgreSQL',
    outcome: 'PWA en production sur Vercel, mode hors-ligne atelier',
    imageLocal: 'assets/projects/sqcdp.jpg',
    stack: ['React', 'TypeScript', 'PWA', 'Tailwind CSS', 'Express', 'PostgreSQL', 'Supabase', 'Playwright', 'Framer Motion'],
    url: 'https://sqcdp.vercel.app/',
    repo: 'https://github.com/dariohd/SQCDP',
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
    imageLocal: 'assets/projects/portfolio-dariohd.jpg',
    stack: ['React', 'TypeScript', 'Vite', 'Canvas 2D', 'Framer Motion', 'Zustand'],
    url: hubLinks.portfolioDariohd,
    repo: 'https://github.com/dariohd/dariohd',
  },
  {
    id: 'portfolio-site',
    category: 'portfolio',
    name: 'hugodavion',
    description: 'Portfolio technique : compétences, stack et projets filtrables par domaine (sites, applications, jeux).',
    imageLocal: 'assets/projects/portfolio-site.jpg',
    stack: ['HTML', 'CSS', 'JS modules', 'GSAP', 'SEO'],
    url: 'https://hugodavion.vercel.app/',
    repo: 'https://github.com/dariohd/hugodavion',
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
    outcome: 'www.bulletonsite.com en production, démos intégrées dans la page',
    image: 'https://www.bulletonsite.com/assets/og-bubble.svg',
    imageLocal: 'assets/projects/bullweb.jpg',
    imagePosition: 'top center',
    stack: ['HTML', 'CSS', 'JS modules', 'Thèmes CSS', 'Vercel'],
    url: 'https://www.bulletonsite.com/',
    repo: 'https://github.com/dariohd/BulleTonSite',
  },
  {
    id: 'bulle',
    category: 'entreprise',
    featured: true,
    name: 'Bulle ChatBot',
    description:
      'Widget IA embarquable pour sites vitrines : assistant contextuel, indexation auto, clés par domaine et déploiement Vercel.',
    role: 'Next.js, AI SDK, widget embeddable',
    outcome: 'Produit en ligne sur bulle-chatbot.vercel.app',
    imageLocal: 'assets/projects/bulle.jpg',
    stack: ['Next.js', 'React', 'AI SDK', 'Tailwind CSS', 'Widget', 'Vercel'],
    url: 'https://bulle-chatbot.vercel.app/',
    repo: 'https://github.com/dariohd/BulleChatBot',
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
    demoNote: 'Prototype UE5 · éditeur requis',
  },
  {
    id: 'pokearena',
    category: 'jeux',
    name: 'PokeArena',
    description:
      'Combat de figurines 2.5D en navigateur : stats et sprites live PokéAPI, vagues, combos et recrutement.',
    role: 'Game dev web · Phaser 3',
    outcome: 'Jeu jouable en ligne sur Vercel',
    imageLocal: 'assets/projects/pokerift.jpg',
    stack: ['Phaser 3', 'TypeScript', 'Vite', 'PokéAPI', '2.5D'],
    url: 'https://pokearena-topaz.vercel.app/',
  },
  {
    id: 'pokedex',
    category: 'jeux',
    name: 'Pokédex',
    description:
      'Explorateur du Pokédex national via PokéAPI : recherche, favoris, comparaison BST, formes alternatives et évolutions.',
    role: 'Desktop WPF (.NET 10) et version web React',
    outcome: 'Double interface MVVM + React 19',
    imageLocal: 'assets/projects/pokedex.svg',
    stack: ['.NET 10', 'WPF', 'MVVM', 'React 19', 'Vite', 'Tailwind CSS', 'TypeScript'],
    url: 'https://pokedex-dariohprojects.vercel.app',
    repo: 'https://github.com/dariohd/Pokedex',
  },
  {
    id: 'pokemon-hoopa',
    category: 'jeux',
    name: 'PokemonHoopa',
    description:
      'Fan game Godot 4 : aventure narrative, hub dimensionnel et exploration 2D/3D (Kalos, Unys).',
    imageLocal: 'assets/projects/pokemon-hoopa.svg',
    stack: ['Godot 4', 'GDScript', '2D / 3D', 'Spritesheets'],
    demoNote: 'Fan game Godot · éditeur requis',
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
    items: ['Java', 'Spring', 'C#', 'Express', 'PostgreSQL', 'Supabase', 'Neon', 'API REST', 'Framer Motion', 'Recharts', 'Zustand'],
  },
  {
    title: 'Réseaux & systèmes',
    icon: '◇',
    items: ['TCP/IP', 'VLAN', 'Active Directory', 'Linux', 'Windows Server', 'GLPI', 'ServiceNow'],
  },
  {
    title: 'Jeux & game dev',
    icon: '◇',
    items: [
      'Unreal Engine 5', 'C++', 'Blueprints', 'Godot 4', 'GDScript',
      'Babylon.js', 'WebGL', 'Canvas 2D', '.NET', 'WPF', 'Action RPG', '2D / 3D',
    ],
  },
  {
    title: 'Design & outils',
    icon: '◇',
    items: ['Design', 'Thèmes CSS', 'Playwright', 'ffmpeg', 'Git', 'GitHub', 'Vercel'],
  },
];

export const about = {
  title: 'Profil',
  goal: 'En alternance chez CGI et en cycle ingénieur RIOC à UniLaSalle — rigoureux, autonome et à l’aise en environnement technique varié.',
  paragraphs: [
    'Développeur full stack et technicien réseaux : front-end TypeScript, back-end Java Spring ou Express, PostgreSQL, et déploiement Vercel pour mes projets personnels et clients.',
    'En parallèle, je réalise des sites, PWA métier, widgets IA et petits jeux (dariohd).',
    'Expériences en alternance et stage : CGI, Airbus Atlantic (support N2, parc 250+ postes) et Numih (SQL, Active Directory, 150+ machines).',
  ],
};

export const experience = [
  {
    company: 'CGI',
    period: '2025 — 2026',
    role: 'Alternance — Dev full stack',
    highlights: [
      'Front-end TypeScript : interfaces, composants et intégration API',
      'Back-end Java Spring : services, logique métier et API REST',
      'PostgreSQL : modélisation, requêtes et évolutions de schéma',
    ],
  },
  {
    company: 'Airbus Atlantic — Méaulte',
    period: '2024 — 2025',
    role: 'Alternance',
    highlights: [
      'Scripts internes pour automatisation et réduction du temps de traitement des tickets',
      'Collaboration en anglais (Inde), support technique N2, parc de 250+ postes',
    ],
  },
  {
    company: 'Numih — Amiens',
    period: '2023 — 2024',
    role: 'Stages',
    highlights: [
      'Requêtes SQL, automatisation de processus, documentation technique',
      'Support utilisateur, maintenance de 150+ machines, Active Directory',
    ],
  },
];

export const education = [
  {
    school: 'UniLaSalle Amiens',
    period: '2025 — 2026',
    title: 'Cycle ingénieur RIOC',
    subtitle: 'Réseaux, Informatique et Objets Connectés · alternance',
    highlights: [
      'Architecture logicielle, réseaux et systèmes, développement full stack, cybersécurité, objets connectés',
    ],
  },
  {
    school: 'IUT d’Amiens',
    period: '2024 — 2025',
    title: 'Licence professionnelle RGI',
    subtitle: 'Réseaux et Génie Informatique',
    highlights: [
      'Administration réseaux (TCP/IP, VLAN), Windows Server, scripting, C#, React, intégration d’API',
    ],
  },
  {
    school: 'Lycée Saint-Rémi',
    period: '2022 — 2024',
    title: 'BTS SIO option SLAM',
    subtitle: 'Solutions Logicielles et Applications Métiers',
    highlights: [
      'POO (C#, Java), développement web (PHP, JS), SQL/MySQL, UML, Linux/Windows, certification Cisco',
    ],
  },
];

export const softSkills = [
  'Autonomie et proactivité sur des projets techniques complexes',
  'Organisation, rigueur et documentation soignée',
  'Résolution de problèmes en environnement contraint',
  'Communication et vulgarisation technique',
  'Adaptabilité et montée en compétences rapide',
];

export const languages = [
  { name: 'Français', level: 'Langue maternelle' },
  { name: 'Anglais', level: 'C1 professionnel · TOEIC' },
];

export const otherPortfolios = [
  { label: 'dariohd', href: hubLinks.portfolioDariohd, desc: 'Portfolio interactif' },
];

const projectById = new Map(projects.map((p) => [p.id, p]));

/** Projets retenus pour le CV — focus recruteur / école : prod, stack moderne, preuves client. */
export const cvProjectSections = [
  {
    title: 'Applications & outils',
    ids: ['planning', 'sqcdp', 'bulle', 'rlreplay'],
  },
  {
    title: 'Sites web en production',
    ids: ['etcbc', 'maison-ela', 'quai-des-reves'],
  },
  {
    title: 'Produit commercial',
    ids: ['bullweb'],
  },
  {
    title: 'Jeux web & logiciels',
    ids: ['pokearena', 'pokedex'],
  },
];

export function cvProjectLine(id) {
  const p = projectById.get(id);
  if (!p) return '';
  const stack = (p.stack || []).slice(0, 6).join(', ');
  const detail = p.outcome || p.role || p.description;
  return stack ? `${stack} · ${detail}` : detail;
}

export function cvProjectUrl(id) {
  const p = projectById.get(id);
  if (!p?.url || /github\.com/i.test(p.url)) return p?.repo || '';
  return p.url;
}

const liveProjects = projects.filter(
  (p) =>
    p.url &&
    !p.local &&
    !metaProjectIds.has(p.id) &&
    !/github\.com/i.test(p.url),
);
const gameProjects = projects.filter((p) => p.category === 'jeux');

export const heroStats = [
  { value: String(liveProjects.length), label: 'sites & apps en ligne' },
  { value: String(gameProjects.length), label: 'projets jeux' },
  { value: String(expertise.length), label: "domaines d'expertise" },
];
