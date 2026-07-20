/**
 * Vignettes projets : captures Playwright + images OG natives + SVG locaux.
 * Usage : npx playwright install chromium && node scripts/capture-shots.mjs
 */
import { chromium } from 'playwright';
import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const outDir = path.join(root, 'assets', 'projects');

/** Sites en ligne — capture navigateur */
const captures = [
  { file: 'etcbc.jpg', url: 'https://www.etcbc-charpente.com/' },
  { file: 'maison-ela.jpg', url: 'https://www.lamaisondela.com/' },
  { file: 'quai.jpg', url: 'https://quai-des-reves.vercel.app/' },
  { file: 'domainederoche.jpg', url: 'https://domainederoche.vercel.app/' },
  { file: 'rlreplay.jpg', url: 'https://rl-replay.vercel.app/' },
  { file: 'sqcdp.jpg', url: 'https://sqcdp.vercel.app/' },
  { file: 'pokerift.jpg', url: 'https://poke-rift.vercel.app/' },
  { file: 'pokemon-rumble.jpg', url: 'https://pokemonrumbleweb.vercel.app/' },
  { file: 'bulle.jpg', url: 'https://bullechatbot.vercel.app/' },
  { file: 'bullweb.jpg', url: 'https://www.bulletonsite.com/' },
  { file: 'portfolio-site.jpg', url: 'https://hugodavion.vercel.app/', skipIntro: true, wait: 3500 },
  { file: 'portfolio-dariohd.jpg', url: 'https://dariohd.vercel.app/', wait: 3500 },
];

/** Images OG / assets officiels (évite les captures ratées) */
const ogDownloads = [];

/** Projets locaux sans URL — vignette SVG brandée */
const localSvgs = [
  { file: 'forum.svg', title: 'Forum libre', subtitle: 'React · Neon · Vercel Blob', color: '#6b8cff' },
  { file: 'carry-the-curse.svg', title: 'CarryTheCurse', subtitle: 'Unreal Engine 5 · C++', color: '#8b5cf6' },
  { file: 'pokemon-hoopa.svg', title: 'PokemonHoopa', subtitle: 'Godot 4 · GDScript', color: '#f472b6' },
  { file: 'pokemon-rumble.svg', title: 'Pokémon Rumble', subtitle: 'Canvas 2D · Vite', color: '#60a5fa' },
  { file: 'pokedex.svg', title: 'Pokédex', subtitle: '.NET WPF · React 19', color: '#f87171' },
  { file: 'portfolio-site.svg', title: 'hugodavion', subtitle: 'HTML · CSS · GSAP', color: '#7b9cff' },
  { file: 'portfolio-dariohd.svg', title: 'dariohd', subtitle: 'React · TypeScript · Canvas', color: '#a868e8' },
];

function svgThumb(title, subtitle, color) {
  const safe = title.replace(/[<>&]/g, '');
  const sub = subtitle.replace(/[<>&]/g, '');
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="1280" height="800" viewBox="0 0 1280 800">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#dce8f8"/>
      <stop offset="100%" stop-color="#e8e0f8"/>
    </linearGradient>
    <linearGradient id="accent" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="${color}"/>
      <stop offset="100%" stop-color="#7b9cff"/>
    </linearGradient>
  </defs>
  <rect width="1280" height="800" fill="url(#bg)"/>
  <g opacity="0.12" stroke="#7b9cff" stroke-width="1">
    ${Array.from({ length: 12 }, (_, i) => `<line x1="0" y1="${60 + i * 64}" x2="1280" y2="${60 + i * 64}"/>`).join('')}
    ${Array.from({ length: 20 }, (_, i) => `<line x1="${64 * i}" y1="0" x2="${64 * i}" y2="800"/>`).join('')}
  </g>
  <rect x="80" y="80" width="1120" height="640" rx="24" fill="rgba(255,255,255,0.72)" stroke="rgba(123,156,255,0.25)" stroke-width="2"/>
  <rect x="80" y="80" width="1120" height="48" rx="24" fill="url(#accent)"/>
  <circle cx="108" cy="104" r="8" fill="#ffb8dd"/><circle cx="132" cy="104" r="8" fill="#fff" opacity="0.7"/><circle cx="156" cy="104" r="8" fill="#fff" opacity="0.7"/>
  <text x="640" y="380" text-anchor="middle" font-family="Nunito,Segoe UI,sans-serif" font-size="56" font-weight="800" fill="#3d4f7a">${safe}</text>
  <text x="640" y="450" text-anchor="middle" font-family="IBM Plex Mono,Consolas,monospace" font-size="22" fill="#7a8cb8">${sub}</text>
  <text x="640" y="560" text-anchor="middle" font-family="IBM Plex Mono,Consolas,monospace" font-size="16" fill="#7b9cff" letter-spacing="3">PROJET LOCAL</text>
</svg>`;
}

async function downloadOg(entry) {
  const res = await fetch(entry.url);
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const buf = Buffer.from(await res.arrayBuffer());
  const out = path.join(outDir, entry.file.replace(/\.jpg$/, '.svg'));
  await writeFile(out, buf);
  console.log(`OG ${entry.file} ← ${entry.url}`);
}

await mkdir(outDir, { recursive: true });

for (const entry of localSvgs) {
  const svg = svgThumb(entry.title, entry.subtitle, entry.color);
  const out = path.join(outDir, entry.file);
  await writeFile(out, svg);
  console.log(`SVG ${entry.file}`);
}

if (ogDownloads.length) {
  try {
    await downloadOg(ogDownloads[0]);
  } catch (err) {
    console.warn('OG download:', err.message);
  }
}

let browser;
try {
  browser = await chromium.launch();
  for (const shot of captures) {
    const page = await browser.newPage({ viewport: { width: 1280, height: 800 } });
    try {
      if (shot.skipIntro) {
        await page.addInitScript(() => {
          sessionStorage.setItem('hugodavion-intro-skip', '1');
        });
      }
      console.log(`Capture ${shot.url}`);
      await page.goto(shot.url, { waitUntil: 'networkidle', timeout: 90000 });
      await page.waitForTimeout(shot.wait ?? 2000);
      await page.screenshot({
        path: path.join(outDir, shot.file),
        type: 'jpeg',
        quality: 85,
      });
    } catch (err) {
      console.warn(`Échec ${shot.file}:`, err.message);
    } finally {
      await page.close();
    }
  }
} catch (err) {
  console.warn('Playwright indisponible:', err.message);
} finally {
  await browser?.close();
}

console.log('Terminé.');
