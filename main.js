import {
  site,
  profile,
  nav,
  heroStats,
  heroManifest,
  marqueeSkills,
  expertise,
  projectCategories,
  projects,
  stackGroups,
  about,
  experience,
  education,
  softSkills,
  languages,
  otherPortfolios,
  hubLinks,
} from './config.js';

let activeFilter = readFilterFromUrl();

function readFilterFromUrl() {
  const filter = new URLSearchParams(window.location.search).get('filter');
  return filter && projectCategories.some((c) => c.id === filter) ? filter : 'all';
}

function failSafeReveal() {
  document.getElementById('intro')?.remove();
  document.body.classList.remove('is-loading');
  document.body.classList.add('is-ready');
}

function setText(sel, key, obj) {
  document.querySelectorAll(sel).forEach((el) => {
    const k = el.dataset[key];
    if (k && obj[k] != null) el.textContent = obj[k];
  });
}

function absUrl(path) {
  if (!path) return '';
  if (/^https?:\/\//i.test(path)) return path;
  if (site.canonicalUrl) return new URL(path.replace(/^\.\//, ''), site.canonicalUrl).href;
  return path;
}

function initBrand() {
  document.querySelectorAll('[data-site="brand"]').forEach((el) => {
    el.textContent = site.brand;
  });
}

function initSeo() {
  const title = `${profile.name} · Portfolio technique`;
  const description = site.description;
  const image = absUrl(site.ogImage);

  document.title = title;

  const setMeta = (attr, key, value) => {
    if (!value) return;
    let el = document.querySelector(`meta[${attr}="${key}"]`);
    if (!el) {
      el = document.createElement('meta');
      el.setAttribute(attr, key);
      document.head.appendChild(el);
    }
    el.setAttribute('content', value);
  };

  setMeta('name', 'description', description);
  setMeta('property', 'og:type', 'website');
  setMeta('property', 'og:locale', site.locale);
  setMeta('property', 'og:title', title);
  setMeta('property', 'og:description', description);
  setMeta('property', 'og:image', image);
  setMeta('name', 'twitter:card', 'summary_large_image');
  setMeta('name', 'twitter:title', title);
  setMeta('name', 'twitter:description', description);
  setMeta('name', 'twitter:image', image);

  if (site.canonicalUrl) {
    let link = document.querySelector('link[rel="canonical"]');
    if (!link) {
      link = document.createElement('link');
      link.rel = 'canonical';
      document.head.appendChild(link);
    }
    link.href = site.canonicalUrl;
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: profile.name,
    jobTitle: profile.role,
    email: profile.email,
    url: site.canonicalUrl || undefined,
    sameAs: [profile.github, profile.linkedin].filter(Boolean),
    image: image || undefined,
    address: { '@type': 'PostalAddress', addressCountry: profile.location },
  };

  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify(jsonLd);
  document.head.appendChild(script);
}

function initProfile() {
  setText('[data-profile]', 'profile', profile);

  const gh = profile.github;
  document.querySelectorAll('#github-hero, #github-cta').forEach((a) => {
    a.href = gh;
    if (a.id === 'github-hero') a.textContent = 'GitHub';
  });

  const email = document.getElementById('email-link');
  if (email) {
    email.href = `mailto:${profile.email}`;
    email.textContent = profile.email;
  }

  const phone = document.getElementById('phone-link');
  if (phone) {
    phone.href = `tel:${profile.phoneTel}`;
    phone.textContent = profile.phone;
  }

  const photo = document.querySelector('[data-profile="photo"]');
  if (photo) photo.alt = `Portrait de ${profile.name}`;

  const linkedin = document.getElementById('linkedin-link');
  if (linkedin) {
    if (profile.linkedin) {
      linkedin.href = profile.linkedin;
      linkedin.hidden = false;
    } else {
      linkedin.remove();
    }
  }

  const cv = document.getElementById('cv-link');
  if (cv) {
    if (profile.cv) {
      cv.href = profile.cv;
      cv.target = '_blank';
      cv.rel = 'noopener noreferrer';
      if (profile.cv.endsWith('.pdf')) cv.setAttribute('download', '');
      cv.hidden = false;
    } else {
      cv.remove();
    }
  }

  const cvPreview = document.getElementById('cv-preview-link');
  if (cvPreview) {
    if (profile.cvPreview) {
      cvPreview.href = profile.cvPreview;
      cvPreview.hidden = false;
    } else {
      cvPreview.remove();
    }
  }
}

function initHeroManifest() {
  const el = document.getElementById('hero-manifest');
  if (!el) return;
  el.innerHTML = heroManifest
    .map(
      (line) =>
        `<div class="manifest__line"><span class="manifest__key">${line.key}</span><span class="manifest__val">${line.value}</span></div>`,
    )
    .join('');
}

function closeNav() {
  document.body.classList.remove('nav-open');
  document.getElementById('nav-toggle')?.setAttribute('aria-expanded', 'false');
  document.getElementById('nav-backdrop')?.setAttribute('hidden', '');
}

function initNav() {
  const navEl = document.getElementById('nav');
  if (!navEl) return;
  navEl.innerHTML = nav.map((n) => `<a href="#${n.id}">${n.label}</a>`).join('');

  const toggle = document.getElementById('nav-toggle');
  const backdrop = document.getElementById('nav-backdrop');

  toggle?.addEventListener('click', (e) => {
    e.stopPropagation();
    const open = document.body.classList.toggle('nav-open');
    toggle.setAttribute('aria-expanded', String(open));
    if (open) backdrop?.removeAttribute('hidden');
    else backdrop?.setAttribute('hidden', '');
  });
  backdrop?.addEventListener('click', () => closeNav());
  navEl.querySelectorAll('a').forEach((a) => {
    a.addEventListener('click', () => closeNav());
  });
  document.getElementById('rail')?.querySelector('.rail__cta')?.addEventListener('click', () => {
    closeNav();
  });

  document.addEventListener('click', (e) => {
    if (!document.body.classList.contains('nav-open')) return;
    if (e.target.closest('#nav-toggle') || e.target.closest('#nav')) return;
    closeNav();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeNav();
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 1024) closeNav();
  });
}

function initHeroStats() {
  const el = document.getElementById('hero-stats');
  if (!el) return;
  el.innerHTML = heroStats
    .map(
      (s) => `
    <div class="hero__stat">
      <strong>${s.value}</strong>
      <span>${s.label}</span>
    </div>`,
    )
    .join('');
}

function interleaveSkills(list) {
  const buckets = [
    ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Vite', 'Tailwind CSS', 'PWA'],
    ['Java', 'C#', 'Express', 'PostgreSQL', 'Supabase', 'Neon', 'AI SDK'],
    ['Unreal Engine 5', 'C++', 'Godot 4', 'GDScript', 'Babylon.js', 'WebGL', 'WASM', 'Canvas 2D'],
    ['GSAP', 'Framer Motion', 'Playwright', 'ffmpeg', 'Vercel', 'SEO', 'OpenStreetMap'],
  ];
  const known = new Set(buckets.flat());
  const rest = list.filter((s) => !known.has(s));
  if (rest.length) buckets.push(rest);
  const out = [];
  const max = Math.max(...buckets.map((b) => b.length));
  for (let i = 0; i < max; i += 1) {
    for (const bucket of buckets) {
      if (bucket[i]) out.push(bucket[i]);
    }
  }
  return out;
}

function initMarquee() {
  const wrap = document.getElementById('marquee');
  if (!wrap || wrap.dataset.marqueeReady) return;
  wrap.dataset.marqueeReady = '1';

  const skills = interleaveSkills(marqueeSkills);
  const half = Math.ceil(skills.length / 2);
  const trackB = [...skills.slice(half), ...skills.slice(0, half)];

  wrap.innerHTML = '';
  wrap.classList.add('skill-wall--dual');

  [skills, trackB].forEach((list, index) => {
    const track = document.createElement('div');
    track.className = `skill-wall__track${index === 1 ? ' skill-wall__track--alt' : ''}`;
    const chips = list.map((s) => `<span class="skill-chip">${s}</span>`).join('');
    track.innerHTML = chips + chips;
    wrap.appendChild(track);

    requestAnimationFrame(() => {
      const loopWidth = track.scrollWidth / 2;
      if (loopWidth > 0) {
        const seconds = Math.max(28, loopWidth / 52);
        track.style.setProperty('--marquee-duration', `${seconds}s`);
      }
    });
  });

  const setMarqueeState = (running) => {
    const state = running ? 'running' : 'paused';
    wrap.querySelectorAll('.skill-wall__track').forEach((track) => {
      track.style.animationPlayState = state;
    });
  };

  const marqueeObserver = new IntersectionObserver(
    ([entry]) => setMarqueeState(entry.isIntersecting),
    { rootMargin: '80px 0px' },
  );
  marqueeObserver.observe(wrap);
  setMarqueeState(false);
}

function parseBold(text) {
  return text.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
}

function initAbout() {
  setText('[data-about]', 'about', about);
  const el = document.getElementById('about-text');
  if (!el) return;
  const parts = [];
  if (about.goal) parts.push(`<p class="about__goal">${parseBold(about.goal)}</p>`);
  if (profile.details) parts.push(`<p class="about__details">${profile.details}</p>`);
  parts.push(...about.paragraphs.map((p) => `<p>${parseBold(p)}</p>`));
  el.innerHTML = parts.join('');
}

function initParcours() {
  const el = document.getElementById('parcours');
  if (!el) return;

  const timeline = (title, items, renderItem) => `
    <div class="parcours__col">
      <h3 class="parcours__title">${title}</h3>
      <ol class="parcours__list">
        ${items.map(renderItem).join('')}
      </ol>
    </div>`;

  el.innerHTML = `
    <div class="parcours__grid">
      ${timeline('Expériences', experience, (job) => `
        <li class="parcours__item">
          <div class="parcours__meta">
            <strong>${job.company}</strong>
            <span>${job.period}</span>
          </div>
          <p class="parcours__role">${job.role}</p>
          <ul>${job.highlights.map((h) => `<li>${h}</li>`).join('')}</ul>
        </li>`)}
      ${timeline('Formation', education, (edu) => `
        <li class="parcours__item">
          <div class="parcours__meta">
            <strong>${edu.title}</strong>
            <span>${edu.period}</span>
          </div>
          <p class="parcours__role">${edu.school} — ${edu.subtitle}</p>
          <ul>${edu.highlights.map((h) => `<li>${h}</li>`).join('')}</ul>
        </li>`)}
    </div>
    <div class="parcours__extras">
      <div class="parcours__extra">
        <h3 class="parcours__title">Soft skills</h3>
        <ul class="parcours__chips">${softSkills.map((s) => `<li>${s}</li>`).join('')}</ul>
      </div>
      <div class="parcours__extra">
        <h3 class="parcours__title">Langues</h3>
        <ul class="parcours__langs">${languages.map((l) => `<li><strong>${l.name}</strong> — ${l.level}</li>`).join('')}</ul>
      </div>
    </div>`;
}

function initExpertise() {
  const grid = document.getElementById('expertise-grid');
  if (!grid) return;
  grid.innerHTML = expertise
    .map(
      (e) => `
    <article class="expertise-card${e.featured ? ' expertise-card--featured' : ''}">
      ${e.subtitle ? `<span class="expertise-card__badge">${e.subtitle}</span>` : ''}
      <h3>${e.title}</h3>
      <p>${e.description}</p>
      <div class="expertise-card__tags">
        ${e.skills.map((s) => `<span>${s}</span>`).join('')}
      </div>
    </article>`,
    )
    .join('');
}

function projectImageSrc(p) {
  return p.image || p.imageLocal || null;
}

function projectImageFallback(p) {
  if (p.image && p.imageLocal && p.image !== p.imageLocal) return p.imageLocal;
  return null;
}

function isMonorepoLocal() {
  return ['localhost', '127.0.0.1'].includes(window.location.hostname);
}

function resolveProjectUrl(p) {
  if (isMonorepoLocal() && p.localUrl) return p.localUrl;
  if (!p.url) return null;
  if (/^https?:\/\//i.test(p.url)) return p.url;
  if (p.url.startsWith('./')) {
    return site.canonicalUrl || p.url;
  }
  if (isMonorepoLocal()) return p.url;
  return null;
}

function isRepoUrl(url) {
  return /github\.com/i.test(url);
}

function projectCard(p) {
  const url = resolveProjectUrl(p);
  const target = url && !p.local ? ' target="_blank" rel="noopener noreferrer"' : '';
  const imgSrc = projectImageSrc(p);
  const imgFallback = projectImageFallback(p);
  const imgPos = p.imagePosition || 'top center';
  const fallbackAttr = imgFallback
    ? ` data-fallback="${imgFallback}" onerror="if(this.dataset.fallback&&!this.dataset.fell){this.dataset.fell='1';this.src=this.dataset.fallback}"`
    : '';
  const img = imgSrc
    ? `<div class="project-card__img"><img src="${imgSrc}" alt="Aperçu de ${p.name}" loading="lazy" decoding="async" style="object-position:${imgPos}"${fallbackAttr} /></div>`
    : `<div class="project-card__img project-card__img--placeholder" aria-hidden="true"><span>${p.name.charAt(0)}</span></div>`;

  const overlay = url
    ? `<a class="project-card__overlay" href="${url}"${target} aria-label="${p.name} — ${p.local ? 'Ouvrir' : isRepoUrl(url) ? 'Voir le dépôt' : 'Voir le projet'}"></a>`
    : '';

  const ctaLabel = !url
    ? null
    : p.local
      ? 'Ouvrir →'
      : isRepoUrl(url)
        ? 'Voir le dépôt →'
        : 'Voir en ligne →';

  const primaryLink = ctaLabel
    ? `<span class="project-card__cta">${ctaLabel}</span>`
    : `<span class="project-card__personal">${p.demoNote || 'Projet perso · démo à venir'}</span>`;

  const repoLink =
    p.repo && p.repo !== url
      ? `<a class="project-card__repo" href="${p.repo}" target="_blank" rel="noopener noreferrer">Code</a>`
      : '';

  const caseStudy =
    p.role || p.outcome
      ? `<div class="project-card__case">
          ${p.role ? `<p class="project-card__role"><span>Rôle</span> ${p.role}</p>` : ''}
          ${p.outcome ? `<p class="project-card__outcome"><span>Résultat</span> ${p.outcome}</p>` : ''}
        </div>`
      : '';

  return `
    <article class="project-card${p.featured ? ' project-card--featured' : ''}${url ? ' project-card--has-link' : ''}" data-category="${p.category}">
      ${overlay}
      ${img}
      <div class="project-card__body">
        <div class="project-card__meta">
          <span class="project-card__cat">${projectCategories.find((c) => c.id === p.category)?.label ?? p.category}</span>
          ${p.featured ? '<span class="project-card__star" aria-label="Projet mis en avant">★</span>' : ''}
        </div>
        <h3>${p.name}</h3>
        <p>${p.description}</p>
        ${caseStudy}
        <div class="project-card__stack">${p.stack.map((t) => `<span>${t}</span>`).join('')}</div>
        <div class="project-card__links">
          ${primaryLink}
          ${repoLink}
        </div>
      </div>
    </article>`;
}

function syncFilterButtons() {
  const el = document.getElementById('project-filters');
  if (!el) return;
  el.querySelectorAll('.filter-btn').forEach((btn) => {
    const isActive = btn.dataset.filter === activeFilter;
    btn.classList.toggle('is-active', isActive);
    btn.setAttribute('aria-selected', String(isActive));
    btn.tabIndex = isActive ? 0 : -1;
  });
}

function updateFilterUrl() {
  const url = new URL(window.location.href);
  if (activeFilter === 'all') url.searchParams.delete('filter');
  else url.searchParams.set('filter', activeFilter);
  history.replaceState({ filter: activeFilter }, '', url);
}

function setActiveFilter(filter) {
  activeFilter = filter;
  syncFilterButtons();
  updateFilterUrl();
  renderProjects();
}

function renderProjects() {
  const grid = document.getElementById('projects-grid');
  if (!grid) return;
  const filtered =
    activeFilter === 'all' ? projects : projects.filter((p) => p.category === activeFilter);
  grid.innerHTML = filtered.map(projectCard).join('');
  if (window.refreshProjectCards) window.refreshProjectCards(grid);
}

function initFilters() {
  const el = document.getElementById('project-filters');
  const grid = document.getElementById('projects-grid');
  if (!el || !grid) return;

  el.innerHTML = projectCategories
    .map(
      (c) => `
    <button type="button" class="filter-btn${c.id === activeFilter ? ' is-active' : ''}" data-filter="${c.id}" role="tab" id="filter-${c.id}" aria-selected="${c.id === activeFilter}" aria-controls="projects-grid" tabindex="${c.id === activeFilter ? 0 : -1}">
      ${c.label}
      <span class="filter-count">${c.id === 'all' ? projects.length : projects.filter((p) => p.category === c.id).length}</span>
    </button>`,
    )
    .join('');

  grid.setAttribute('role', 'tabpanel');
  grid.setAttribute('aria-labelledby', `filter-${activeFilter}`);

  el.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-filter]');
    if (!btn) return;
    setActiveFilter(btn.dataset.filter);
    grid.setAttribute('aria-labelledby', btn.id);
  });

  el.addEventListener('keydown', (e) => {
    const tabs = [...el.querySelectorAll('[data-filter]')];
    const idx = tabs.findIndex((t) => t.dataset.filter === activeFilter);
    if (idx < 0) return;

    let next = idx;
    if (e.key === 'ArrowRight') next = (idx + 1) % tabs.length;
    else if (e.key === 'ArrowLeft') next = (idx - 1 + tabs.length) % tabs.length;
    else if (e.key === 'Home') next = 0;
    else if (e.key === 'End') next = tabs.length - 1;
    else return;

    e.preventDefault();
    tabs[next].focus();
    setActiveFilter(tabs[next].dataset.filter);
    grid.setAttribute('aria-labelledby', tabs[next].id);
  });

  window.addEventListener('popstate', () => {
    activeFilter = readFilterFromUrl();
    syncFilterButtons();
    renderProjects();
  });

  renderProjects();
}

function initStack() {
  const el = document.getElementById('stack-groups');
  if (!el) return;
  el.innerHTML = stackGroups
    .map(
      (g) => `
    <div class="tech-group${g.highlight ? ' tech-group--highlight' : ''}">
      <h3><span class="tech-group__icon" aria-hidden="true">${g.icon ?? '◇'}</span>${g.title}</h3>
      <ul class="tech-pills">
        ${g.items.map((name) => `<li class="tech-pill">${name}</li>`).join('')}
      </ul>
    </div>`,
    )
    .join('');
}

function initOtherPortfolios() {
  const row = document.getElementById('other-portfolios');
  if (!row) return;
  row.innerHTML = otherPortfolios
    .map((p) => {
      const external = /^https?:\/\//i.test(p.href);
      const target = external ? ' target="_blank" rel="noopener noreferrer"' : '';
      return `
    <a class="link-card" href="${p.href}"${target}>
      <strong>${p.label}</strong>
      <span>${p.desc}</span>
      <i aria-hidden="true">→</i>
    </a>`;
    })
    .join('');
}

function initFooterHub() {
  const hub = document.getElementById('hub-link');
  if (!hub) return;
  if (!isMonorepoLocal()) {
    hub.hidden = true;
    return;
  }
  hub.href = hubLinks.root;
  hub.hidden = false;
}

function initHeader() {
  const links = document.querySelectorAll('.nav a');
  const sections = nav.map((n) => document.getElementById(n.id)).filter(Boolean);
  const visible = new Map();

  const spy = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        visible.set(entry.target.id, entry.isIntersecting ? entry.intersectionRatio : 0);
      });
      let bestId = null;
      let bestRatio = 0;
      for (const [id, ratio] of visible) {
        if (ratio > bestRatio) {
          bestRatio = ratio;
          bestId = id;
        }
      }
      if (!bestId || bestRatio <= 0) return;
      links.forEach((a) => {
        a.classList.toggle('is-active', a.getAttribute('href') === `#${bestId}`);
      });
    },
    { rootMargin: '-40% 0px -55% 0px', threshold: [0, 0.15, 0.35, 0.55, 0.75, 1] },
  );
  sections.forEach((s) => spy.observe(s));
}

document.getElementById('year').textContent = String(new Date().getFullYear());

initBrand();
initSeo();
initProfile();
initHeroManifest();
initNav();
initHeroStats();
initMarquee();
initAbout();
initParcours();
initExpertise();
initFilters();
initStack();
initOtherPortfolios();
initFooterHub();
initHeader();

async function bootEffects() {
  try {
    const fx = await import('./effects.js');
    fx.splitTextToChars('.hero__name', profile.name);
    window.refreshProjectCards = fx.refreshProjectCards;
    fx.initEffects();
  } catch (err) {
    console.error('Effects failed:', err);
    failSafeReveal();
  }
}

bootEffects();
