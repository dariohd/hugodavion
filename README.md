# hugodavion — Documentation projet

Portfolio technique de **Hugo Davion** : compétences, stack, projets filtrables avec études de cas et CV intégré.

| | |
|---|---|
| **URL production** | https://dariohd.github.io/hugodavion/ |
| **Dépôt GitHub** | [github.com/dariohd/hugodavion](https://github.com/dariohd/hugodavion) |
| **Hébergement** | GitHub Pages / Vercel |

---

## Stack technique

- HTML5, CSS3, **JavaScript modules** (sans framework)
- **GSAP** : animations hero, intro cinématique, scroll
- **Playwright** : captures automatiques des vignettes projets
- SEO : `canonicalUrl`, Open Graph, `sitemap.xml`, `robots.txt`
- 100 % statique — aucun backend

---

## Fonctionnalités

- Intro cinématique (skippable, mémorisée en session)
- Sections : à propos, expertise (4 domaines), **projets filtrables** (sites, portfolio, entreprise, jeux)
- Fiches projet détaillées : rôle, résultat, stack, lien live / repo
- Bandeau défilant technologies
- CV HTML intégré (`cv.html`)
- Stats hero dynamiques (nombre de projets en ligne)
- Filtres partageables via URL : `?filter=sites`, `?filter=jeux`, etc.
- Responsive + accessibilité de base

---

## Structure du projet

```
hugodavion/
├── index.html, cv.html
├── config.js           # ★ Configuration centrale (projets, profil, stack)
├── main.js             # Rendu UI, filtres, modales projet
├── effects.js          # Effets visuels
├── intro-cinematic.js  # Séquence d'ouverture
├── assets/
│   ├── projects/       # Vignettes (jpg, svg)
│   └── og-cover.jpg
├── scripts/
│   └── capture-shots.mjs
├── vercel.json
├── sitemap.xml
├── robots.txt
└── package.json
```

---

## Prérequis

- Node.js 18+
- npm

---

## Développement local

```bash
npm install
npm start
```

→ **http://localhost:3001**

---

## Personnalisation

Éditer **`config.js`** :

| Export | Contenu |
|--------|---------|
| `profile` | Nom, contact, GitHub, LinkedIn, photo, CV |
| `site.canonicalUrl` | URL production (SEO) |
| `projects[]` | Liste projets : `id`, `category`, `url`, `stack`, `imageLocal`, `role`, `outcome` |
| `expertise[]` | Domaines de compétence |
| `stackGroups[]` | Technologies affichées |
| `hubLinks` | Liens vers autres portfolios |

---

## Captures vignettes projets

```bash
npx playwright install chromium
npm run capture
```

Met à jour `assets/projects/*.jpg` depuis les URLs live définies dans `scripts/capture-shots.mjs`.

---

## Déploiement

### GitHub Pages

Push `main` → configurer Pages sur le dépôt.

### Vercel

`vercel.json` inclus — déploiement statique direct.

---

## SEO

- `site.canonicalUrl` : `https://dariohd.github.io/hugodavion/`
- Meta description dans `index.html`
- Sitemap généré manuellement dans `sitemap.xml`

---

## Contact

- **Hugo Davion** — davionhugo@gmail.com
- [GitHub](https://github.com/dariohd) · [LinkedIn](https://www.linkedin.com/in/hugodavion/)
