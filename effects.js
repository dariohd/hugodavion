import gsap from './vendor/gsap/index.js';
import { ScrollTrigger } from './vendor/gsap/ScrollTrigger.js';
import { initTechBg } from './tech-bg.js';
import { runIntroCinematic } from './intro-cinematic.js';

gsap.registerPlugin(ScrollTrigger);

const BOING = 'elastic.out(1, 0.55)';
const POP = 'back.out(2)';
const SMOOTH = 'power3.out';
const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const isFinePointer = window.matchMedia('(pointer: fine)').matches;

let scrollTriggers = [];
let projectScrollTriggers = [];

export function splitTextToChars(selector, accessibleLabel = '') {
  const el = document.querySelector(selector);
  if (!el || el.dataset.split) return [];
  const text = el.textContent;
  el.dataset.split = '1';
  if (accessibleLabel) el.setAttribute('aria-label', accessibleLabel);
  el.innerHTML = '';
  const chars = [];
  for (const ch of text) {
    if (ch === ' ') {
      el.appendChild(document.createTextNode(' '));
      continue;
    }
    const span = document.createElement('span');
    span.className = 'char';
    span.setAttribute('aria-hidden', 'true');
    span.textContent = ch;
    el.appendChild(span);
    chars.push(span);
  }
  return chars;
}

function clearScrollTriggers() {
  scrollTriggers.forEach((t) => t.kill());
  scrollTriggers = [];
}

function clearProjectScrollTriggers() {
  projectScrollTriggers.forEach((t) => t.kill());
  projectScrollTriggers = [];
}

export function refreshScrollAnimations() {
  clearScrollTriggers();
  if (prefersReduced) return;
  setupScrollAnimations();
  setupProjectCardScrollAnimations();
  ScrollTrigger.refresh();
}

export function refreshProjectCards(grid) {
  clearProjectScrollTriggers();
  if (prefersReduced || !grid) return;
  animateProjectFilter(grid);
}

function runIntro(onDone) {
  runIntroCinematic({
    gsap,
    BOING,
    onComplete: ({ skipped, intro }) => {
      if (skipped) {
        intro?.remove();
        document.body.classList.remove('is-loading');
        document.body.classList.add('is-ready');
      }
      onDone?.(skipped);
    },
  });
}

function animateHero(skippedIntro = false) {
  const chars = document.querySelectorAll('.hero__name .char');
  const tl = gsap.timeline({ defaults: { ease: BOING } });

  if (skippedIntro) {
    gsap.set('.tech-bg', { opacity: 1 });
  }

  tl.from('.rail', { x: -40, opacity: 0, duration: 1.1, ease: SMOOTH })
    .fromTo('.tech-bg', { opacity: 0 }, { opacity: 1, duration: 1.4, ease: 'power2.out' }, skippedIntro ? 0 : '-=0.7')
    .from(chars, { y: 40, opacity: 0, scale: 0.5, stagger: 0.07, duration: 1.1 }, '-=0.85')
    .from('.hero__stamp', { y: 20, opacity: 0, letterSpacing: '0.22em', duration: 0.95, ease: SMOOTH }, '-=0.7')
    .from('.hero__role', { y: 22, opacity: 0, scale: 0.92, duration: 0.95 }, '-=0.65')
    .from('.hero__tagline', { y: 18, opacity: 0, duration: 0.85, ease: SMOOTH }, '-=0.6')
    .from('.hero__eyebrow', { scale: 0.6, opacity: 0, duration: 0.8 }, '-=0.55')
    .from('.hero__bio', { y: 16, opacity: 0, duration: 0.9, ease: SMOOTH }, '-=0.5')
    .from('.manifest__line', { x: -16, opacity: 0, scale: 0.96, stagger: 0.12, duration: 0.75 }, '-=0.5')
    .from('.hero__actions .btn', { scale: 0.7, opacity: 0, stagger: 0.12, duration: 0.9 }, '-=0.45')
    .from('.hero__stat', { opacity: 0, y: 16, stagger: 0.12, duration: 0.85 }, '-=0.5')
    .add(animateHeroStats, '-=0.4')
    .from('.skill-wall-wrap', { opacity: 0, y: 16, duration: 1, ease: 'power2.out' }, '-=0.55');
}

function animateHeroStats() {
  if (prefersReduced) return;
  document.querySelectorAll('.hero__stat strong').forEach((el, i) => {
    const end = parseInt(el.textContent, 10);
    if (Number.isNaN(end)) return;
    const obj = { val: 0 };
    el.textContent = '0';
    gsap.to(obj, {
      val: end,
      duration: 1.4,
      delay: i * 0.12,
      ease: 'power2.out',
      onUpdate: () => {
        el.textContent = String(Math.round(obj.val));
      },
    });
  });
}

function setupScrollAnimations() {
  gsap.utils.toArray('.section-head').forEach((head) => {
    const tween = gsap.from(head.children, {
      scrollTrigger: {
        trigger: head,
        start: 'top 82%',
        once: true,
      },
      y: 28,
      opacity: 0,
      scale: 0.94,
      stagger: 0.1,
      duration: 1,
      ease: SMOOTH,
    });
    if (tween.scrollTrigger) scrollTriggers.push(tween.scrollTrigger);
  });

  gsap.utils.toArray('.expertise-card').forEach((card, i) => {
    const tween = gsap.from(card, {
      scrollTrigger: { trigger: card, start: 'top 88%', once: true },
      y: 40,
      opacity: 0,
      scale: 0.94,
      duration: 1,
      delay: (i % 2) * 0.1,
      ease: SMOOTH,
    });
    if (tween.scrollTrigger) scrollTriggers.push(tween.scrollTrigger);
  });

  gsap.utils.toArray('.tech-group').forEach((group) => {
    const pills = group.querySelectorAll('.tech-pill');
    const tween = gsap.from(pills, {
      scrollTrigger: { trigger: group, start: 'top 88%', once: true },
      y: 12,
      opacity: 0,
      scale: 0.9,
      stagger: 0.05,
      duration: 0.85,
      ease: SMOOTH,
    });
    if (tween.scrollTrigger) scrollTriggers.push(tween.scrollTrigger);
  });

  const aboutText = document.querySelector('.about__text');
  if (aboutText) {
    const tween = gsap.from(aboutText.querySelectorAll('p'), {
      scrollTrigger: { trigger: aboutText, start: 'top 88%', once: true },
      x: -18,
      opacity: 0,
      stagger: 0.1,
      duration: 0.9,
      ease: SMOOTH,
    });
    if (tween.scrollTrigger) scrollTriggers.push(tween.scrollTrigger);
  }

  const portrait = document.querySelector('.about__portrait');
  if (portrait) {
    const tween = gsap.from(portrait, {
      scrollTrigger: { trigger: portrait, start: 'top 80%', once: true },
      scale: 0.92,
      opacity: 0,
      duration: 1.1,
      ease: SMOOTH,
    });
    if (tween.scrollTrigger) scrollTriggers.push(tween.scrollTrigger);
  }

  gsap.utils.toArray('.link-card, .cta').forEach((el) => {
    const tween = gsap.from(el, {
      scrollTrigger: { trigger: el, start: 'top 88%', once: true },
      y: 28,
      opacity: 0,
      scale: 0.94,
      duration: 1,
      ease: SMOOTH,
    });
    if (tween.scrollTrigger) scrollTriggers.push(tween.scrollTrigger);
  });
}

function setupProjectCardScrollAnimations(root = document) {
  if (prefersReduced) return;

  const grid = root.querySelector?.('#projects-grid') || document.getElementById('projects-grid');
  if (!grid || !grid.children.length) return;

  const tween = gsap.from(grid.children, {
    scrollTrigger: { trigger: grid, start: 'top 88%', once: true },
    y: 40,
    opacity: 0,
    scale: 0.96,
    stagger: 0.06,
    duration: 0.9,
    ease: SMOOTH,
  });
  if (tween.scrollTrigger) projectScrollTriggers.push(tween.scrollTrigger);
}

function initCursor() {
  if (!isFinePointer || prefersReduced) return;

  const cursor = document.getElementById('cursor');
  if (!cursor) return;

  document.documentElement.classList.add('has-cursor');
  document.body.classList.add('has-cursor');
  cursor.classList.add('is-on');

  const hoverables =
    'a, button, .project-card--has-link, .expertise-card, .filter-btn, .tech-pill, .link-card, .skill-chip';

  const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
  const target = { x: pos.x, y: pos.y };
  const blob = cursor.querySelector('.cursor__blob');
  let cursorRaf = 0;

  document.addEventListener(
    'pointermove',
    (e) => {
      target.x = e.clientX;
      target.y = e.clientY;
      cursor.classList.add('is-on');
    },
    { passive: true },
  );

  const tickCursor = () => {
    pos.x += (target.x - pos.x) * 0.55;
    pos.y += (target.y - pos.y) * 0.55;
    cursor.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0)`;
    cursorRaf = requestAnimationFrame(tickCursor);
  };
  cursorRaf = requestAnimationFrame(tickCursor);

  document.addEventListener('pointerleave', () => cursor.classList.remove('is-on'));

  document.addEventListener(
    'pointerover',
    (e) => {
      if (e.target.closest(hoverables)) {
        cursor.classList.add('is-hover');
        if (blob) blob.style.transform = 'translate(-50%, -50%) scale(1.6)';
      }
    },
    { passive: true },
  );
  document.addEventListener(
    'pointerout',
    (e) => {
      if (e.target.closest(hoverables)) {
        cursor.classList.remove('is-hover');
        if (blob) blob.style.transform = 'translate(-50%, -50%) scale(1)';
      }
    },
    { passive: true },
  );
}

function initBoingHover() {
  if (prefersReduced) return;

  const sel = '.btn, .filter-btn, .link-card, .rail__cta';

  document.querySelectorAll(sel).forEach((el) => {
    if (el.dataset.boing) return;
    el.dataset.boing = '1';

    el.addEventListener('mouseenter', () => {
      gsap.to(el, { scale: 1.04, duration: 0.4, ease: SMOOTH });
    });
    el.addEventListener('mouseleave', () => {
      gsap.to(el, { scale: 1, duration: 0.45, ease: SMOOTH });
    });
    el.addEventListener('mousedown', () => {
      gsap.to(el, { scale: 0.9, duration: 0.12, ease: 'power2.out' });
    });
    el.addEventListener('mouseup', () => {
      gsap.to(el, { scale: 1.05, duration: 0.5, ease: BOING });
    });
  });
}

export function reinitBoing() {
  initBoingHover();
}

function initScrollProgress() {
  const bar = document.getElementById('scroll-progress');
  const railBar = document.getElementById('rail-progress');
  if (!bar && !railBar) return;

  const update = () => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const p = max > 0 ? window.scrollY / max : 0;
    if (bar) bar.style.transform = `scaleX(${p})`;
    if (railBar) railBar.style.transform = `scaleY(${p})`;
  };

  window.addEventListener('scroll', update, { passive: true });
  update();
}

function initSpotlight() {
  if (!isFinePointer) return;

  document.querySelectorAll('.expertise-card, .project-card, .cta, .link-card').forEach((el) => {
    if (el.dataset.spotlight) return;
    el.dataset.spotlight = '1';
    el.addEventListener(
      'pointermove',
      (e) => {
        const r = el.getBoundingClientRect();
        el.style.setProperty('--mx', `${e.clientX - r.left}px`);
        el.style.setProperty('--my', `${e.clientY - r.top}px`);
      },
      { passive: true },
    );
  });
}

export function reinitSpotlight() {
  initSpotlight();
}

function initMagnetic() {
  /* désactivé — trop coûteux avec le curseur custom */
}

function initCardTilt() {
  if (!isFinePointer || prefersReduced) return;

  document.querySelectorAll('.project-card, .expertise-card, .about__portrait').forEach((card) => {
    if (card.dataset.tilt) return;
    card.dataset.tilt = '1';

    card.addEventListener('mousemove', (e) => {
      const r = card.getBoundingClientRect();
      const rx = ((e.clientY - r.top) / r.height - 0.5) * -4;
      const ry = ((e.clientX - r.left) / r.width - 0.5) * 4;
      card.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-3px)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });
}

function initSectionParallax() {
  /* désactivé — scrub ScrollTrigger coûteux au scroll */
}

function initRailNavGlow() {
  const links = document.querySelectorAll('.rail__nav a');
  links.forEach((link) => {
    link.addEventListener('mouseenter', () => {
      if (!link.classList.contains('is-active')) {
        gsap.to(link, { color: 'var(--accent)', duration: 0.35, ease: BOING });
      }
    });
    link.addEventListener('mouseleave', () => {
      if (!link.classList.contains('is-active')) {
        gsap.to(link, { color: 'var(--muted)', duration: 0.4, ease: 'power2.out' });
      }
    });
  });
}

export function reinitCardTilt() {
  initCardTilt();
}

export function animateProjectFilter(grid) {
  if (prefersReduced) return;
  gsap.from(grid.children, {
    y: 24,
    opacity: 0,
    stagger: 0.05,
    duration: 0.65,
    ease: SMOOTH,
  });
}

export function initEffects() {
  initScrollProgress();

  if (prefersReduced) {
    document.getElementById('intro')?.remove();
    document.body.classList.remove('is-loading');
    document.body.classList.add('is-ready');
    initTechBg();
    gsap.set('.tech-bg', { opacity: 1 });
    setupScrollAnimations();
    setupProjectCardScrollAnimations();
    initBoingHover();
    initRailNavGlow();
    return;
  }

  runIntro((skipped) => {
    initTechBg();
    animateHero(skipped);
    setupScrollAnimations();
    setupProjectCardScrollAnimations();
    initBoingHover();
    initRailNavGlow();
  });
}
