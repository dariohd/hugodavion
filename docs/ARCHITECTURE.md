# Notes techniques

Site statique sans build step obligatoire. Toute la donnée affichée vient de **`config.js`** ; `main.js` génère le DOM (grille projets, modales, filtres).

## Intro

`intro-cinematic.js` + GSAP : séquence au premier chargement, skip en sessionStorage.

## Filtres

Les catégories (`sites`, `jeux`, …) filtrent `projects[]`. L'URL `?filter=` est lue au chargement pour partager une vue.

## Vignettes

`npm run capture` lance Playwright sur les URLs live listées dans `scripts/capture-shots.mjs` et écrase les JPG dans `assets/projects/`.

## Déploiement

Fichiers servis tels quels. `vercel.json` pour headers éventuels. Canonical et OG dans `index.html` + `config.site`.
