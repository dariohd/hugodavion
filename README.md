Portfolio orienté **compétences techniques**, inspiré des meilleurs [developer portfolios](https://github.com/emmabostian/developer-portfolios).

Sections : hero, expertise (web · full-stack · branding · jeux), **projets filtrables** avec vignettes et études de cas, stack détaillée, CV HTML.

## Lancer

```bash
npm install
npm start
```

→ **http://localhost:3001**

## Personnaliser

Éditer **`config.js`** :

- `profile` — identité, contact, GitHub, LinkedIn (`linkedin: 'https://…'`), CV (`cv: 'cv.html'`)
- `site.canonicalUrl` — URL de production (SEO / Open Graph)
- `projects` — réalisations (`imageLocal`, `role`, `outcome` pour les fiches détaillées)
- `heroManifest`, `expertise`, `stackGroups`, textes about

## Captures projets

```bash
npx playwright install chromium
npm run capture
```

## Déploiement

Site statique : Vercel, Netlify ou GitHub Pages (`dariohd.github.io/hugodavion/`).  
`vercel.json`, `robots.txt` et `sitemap.xml` sont inclus.

Intro : rejouée à chaque rechargement ; bouton « Passer l'intro » pour la masquer jusqu'à la fin de l'onglet.

## Filtres projets

Les catégories sont partageables via l’URL : `?filter=web`, `?filter=games`, etc.
