Portfolio orienté **compétences techniques**, inspiré des meilleurs [developer portfolios](https://github.com/emmabostian/developer-portfolios).

Sections : hero, expertise (web · full-stack · branding · jeux), **19 projets filtrables**, stack détaillée, autres formats portfolio.

## Lancer

```bash
npm install
npm start
```

→ **http://localhost:3001**

## Personnaliser

Éditer **`config.js`** :

- `profile` — identité, contact, GitHub, LinkedIn, CV (`cv: 'assets/cv.pdf'`)
- `site.canonicalUrl` — URL de production (SEO / Open Graph)
- `projects` — réalisations (`imageLocal` pour vignettes locales dans `assets/projects/`)
- `heroManifest`, `expertise`, `stackGroups`, textes about

## Déploiement

Site statique : servir le dossier tel quel (Vercel, Netlify, etc.).  
Renseigner `site.canonicalUrl` avec l’URL finale avant mise en ligne.

## Filtres projets

Les catégories sont partageables via l’URL : `?filter=web`, `?filter=games`, etc.
