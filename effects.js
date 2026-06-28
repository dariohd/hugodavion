import gsap from './node_modules/gsap/index.js';
import { ScrollTrigger } from './node_modules/gsap/ScrollTrigger.js';

gsap.registerPlugin(ScrollTrigger);

const BOING = 'elastic.out(1, 0.55)';
const POP = 'back.out(2.8)';
const INTRO_SEEN_KEY = 'portfolio-intro-seen';
const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const isFinePointer = window.matchMedia('(pointer: fine)').matches;

let scrollTriggers = [];

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

export function refreshScrollAnimations() {
  clearScrollTriggers();
  if (prefersReduced) return;
  setupScrollAnimations();
  ScrollTrigger.refresh();
}

function shouldSkipIntro() {
  try {
    return sessionStorage.getItem(INTRO_SEEN_KEY) === '1';
  } catch {
    return false;
  }
}

function markIntroSeen() {
  try {
    sessionStorage.setItem(INTRO_SEEN_KEY, '1');
  } catch {
    /* ignore */
  }
}

function finishIntro(intro, onDone) {
  intro?.remove();
  document.body.classList.remove('is-loading');
  document.body.classList.add('is-ready');
  markIntroSeen();
  onDone?.();
}

function runIntro(onDone) {
  const intro = document.getElementById('intro');
  if (!intro || shouldSkipIntro()) {
    finishIntro(intro, onDone);
    return;
  }

  const counter = intro.querySelector('.intro__counter');
  const bar = intro.querySelector('.intro__bar-fill');
  const logo = intro.querySelector('.intro__logo');
  const tag = intro.querySelector('.intro__tag');
  const lines = intro.querySelectorAll('.intro__grid');

  document.body.classList.add('is-loading');

  const failSafe = setTimeout(() => {
    finishIntro(intro, onDone);
  }, 6000);

  const counterObj = { val: 0 };
  const tl = gsap.timeline({
    onComplete: () => {
      clearTimeout(failSafe);
      finishIntro(intro, onDone);
    },
  });

  tl.set(intro, { display: 'flex' })
    .from(lines, { opacity: 0, duration: 0.6, ease: 'power2.out' })
    .from(logo, { scale: 0, opacity: 0, duration: 0.9, ease: BOING }, '-=0.3')
    .from(tag, { y: 12, opacity: 0, duration: 0.4 }, '-=0.2')
    .to(bar, { scaleX: 1, duration: 1.6, ease: 'power2.inOut' }, '-=0.1')
    .to(
      counterObj,
      {
        val: 100,
        duration: 1.6,
        ease: 'power2.inOut',
        onUpdate: () => {
          if (counter) counter.textContent = String(Math.round(counterObj.val)).padStart(3, '0');
        },
      },
      '<',
    )
    .to(intro.querySelector('.intro__inner'), {
      scale: 1.06,
      opacity: 0,
      duration: 0.4,
      ease: 'power2.in',
    })
    .to(intro, { opacity: 0, duration: 0.55, ease: 'power2.inOut' }, '-=0.1');
}

function animateHero() {
  const chars = document.querySelectorAll('.hero__name .char');
  const tl = gsap.timeline({ defaults: { ease: BOING } });

  tl.from('.rail', { x: -40, opacity: 0, duration: 0.8, ease: POP })
    .from(chars, { y: 50, opacity: 0, scale: 0.3, stagger: 0.05, duration: 0.9 }, '-=0.4')
    .from('.cloud', { scale: 0, opacity: 0, stagger: 0.12, duration: 1, ease: BOING }, '-=0.7')
    .from('.hero__stamp', { y: 20, opacity: 0, scale: 0.8, duration: 0.7 }, '-=0.5')
    .from('.hero__role', { y: 24, opacity: 0, scale: 0.85, duration: 0.7 }, '-=0.5')
    .from('.hero__tagline', { y: 20, opacity: 0, duration: 0.6, ease: POP }, '-=0.45')
    .from('.hero__eyebrow', { scale: 0, opacity: 0, duration: 0.6 }, '-=0.5')
    .from('.hero__bio', { y: 16, opacity: 0, duration: 0.65, ease: POP }, '-=0.35')
    .from('.manifest__line', { x: -16, opacity: 0, scale: 0.9, stagger: 0.1, duration: 0.55 }, '-=0.4')
    .from('.hero__actions .btn', { scale: 0, opacity: 0, stagger: 0.1, duration: 0.75 }, '-=0.35')
    .from('.hero__stat', { scale: 0, opacity: 0, stagger: 0.1, duration: 0.7 }, '-=0.4')
    .from('.skill-chip', { scale: 0, opacity: 0, stagger: 0.03, duration: 0.5 }, '-=0.5');
}

function setupScrollAnimations() {
  gsap.utils.toArray('.section-head').forEach((head) => {
    const tween = gsap.from(head.children, {
      scrollTrigger: {
        trigger: head,
        start: 'top 82%',
        toggleActions: 'play none none reverse',
      },
      y: 40,
      opacity: 0,
      scale: 0.88,
      stagger: 0.1,
      duration: 0.85,
      ease: BOING,
    });
    if (tween.scrollTrigger) scrollTriggers.push(tween.scrollTrigger);
  });

  gsap.utils.toArray('.expertise-card').forEach((card, i) => {
    const tween = gsap.from(card, {
      scrollTrigger: { trigger: card, start: 'top 88%' },
      y: 50,
      opacity: 0,
      scale: 0.85,
      duration: 0.8,
      delay: (i % 2) * 0.08,
      ease: BOING,
    });
    if (tween.scrollTrigger) scrollTriggers.push(tween.scrollTrigger);
  });

  gsap.utils.toArray('.project-card').forEach((card, i) => {
    const tween = gsap.from(card, {
      scrollTrigger: { trigger: card, start: 'top 90%' },
      y: 60,
      opacity: 0,
      scale: 0.82,
      duration: 0.85,
      delay: (i % 3) * 0.06,
      ease: BOING,
    });
    if (tween.scrollTrigger) scrollTriggers.push(tween.scrollTrigger);
  });

  gsap.utils.toArray('.tech-group').forEach((group) => {
    const pills = group.querySelectorAll('.tech-pill');
    const tween = gsap.from(pills, {
      scrollTrigger: { trigger: group, start: 'top 88%' },
      y: 14,
      opacity: 0,
      scale: 0.7,
      stagger: 0.04,
      duration: 0.6,
      ease: BOING,
    });
    if (tween.scrollTrigger) scrollTriggers.push(tween.scrollTrigger);
  });

  gsap.utils.toArray('.about__portrait').forEach((el) => {
    const tween = gsap.from(el, {
      scrollTrigger: { trigger: el, start: 'top 80%' },
      scale: 0.7,
      opacity: 0,
      duration: 1,
      ease: BOING,
    });
    if (tween.scrollTrigger) scrollTriggers.push(tween.scrollTrigger);
  });

  gsap.utils.toArray('.about__text p').forEach((p, i) => {
    const tween = gsap.from(p, {
      scrollTrigger: { trigger: p, start: 'top 90%' },
      x: -24,
      opacity: 0,
      scale: 0.95,
      duration: 0.7,
      delay: i * 0.1,
      ease: BOING,
    });
    if (tween.scrollTrigger) scrollTriggers.push(tween.scrollTrigger);
  });

  gsap.utils.toArray('.link-card, .cta').forEach((el) => {
    const tween = gsap.from(el, {
      scrollTrigger: { trigger: el, start: 'top 88%' },
      y: 36,
      opacity: 0,
      scale: 0.88,
      duration: 0.85,
      ease: BOING,
    });
    if (tween.scrollTrigger) scrollTriggers.push(tween.scrollTrigger);
  });
}

function initCursor() {
  if (!isFinePointer || prefersReduced) return;

  const cursor = document.getElementById('cursor');
  if (!cursor) return;

  document.body.classList.add('has-cursor');

  const hoverables =
    'a, button, .project-card--has-link, .expertise-card, .filter-btn, .tech-pill, .link-card, .skill-chip';

  document.addEventListener(
    'pointermove',
    (e) => {
      cursor.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      cursor.classList.add('is-on');
    },
    { passive: true },
  );

  document.addEventListener('pointerleave', () => cursor.classList.remove('is-on'));

  document.addEventListener(
    'pointerover',
    (e) => {
      if (e.target.closest(hoverables)) {
        cursor.classList.add('is-hover');
        gsap.to(cursor.querySelector('.cursor__blob'), { scale: 1.6, duration: 0.5, ease: BOING });
      }
    },
    { passive: true },
  );
  document.addEventListener(
    'pointerout',
    (e) => {
      if (e.target.closest(hoverables)) {
        cursor.classList.remove('is-hover');
        gsap.to(cursor.querySelector('.cursor__blob'), { scale: 1, duration: 0.55, ease: BOING });
      }
    },
    { passive: true },
  );
}

function initBoingHover() {
  if (prefersReduced) return;

  const sel =
    '.btn, .filter-btn, .project-card, .expertise-card, .skill-chip, .tech-pill, .link-card, .hero__stat, .cta, .rail__nav a, .rail__brand, .rail__cta, .about__portrait';

  document.querySelectorAll(sel).forEach((el) => {
    if (el.dataset.boing) return;
    el.dataset.boing = '1';

    el.addEventListener('mouseenter', () => {
      gsap.to(el, { scale: 1.05, duration: 0.55, ease: BOING });
    });
    el.addEventListener('mouseleave', () => {
      gsap.to(el, { scale: 1, duration: 0.65, ease: BOING });
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

function initCloudFloat() {
  if (prefersReduced) return;
  gsap.utils.toArray('.cloud').forEach((cloud, i) => {
    gsap.to(cloud, {
      y: `+=${18 + i * 8}`,
      x: `+=${12 - i * 3}`,
      duration: 3.5 + i * 0.8,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    });
    gsap.to(cloud, {
      scale: 1.06,
      duration: 2.5 + i * 0.5,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    });
  });
}

function initBubbles() {
  const canvas = document.getElementById('bubbles');
  if (!canvas || prefersReduced) return;

  const ctx = canvas.getContext('2d');
  let w, h, bubbles, animId;

  const COLORS = [
    'rgba(255,255,255,0.55)',
    'rgba(200,220,255,0.45)',
    'rgba(255,200,230,0.4)',
    'rgba(180,230,255,0.5)',
  ];

  function resize() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
  }

  function mkBubble() {
    return {
      x: Math.random() * w,
      y: Math.random() * h,
      vy: -(Math.random() * 0.35 + 0.15),
      vx: (Math.random() - 0.5) * 0.2,
      r: Math.random() * 14 + 6,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
    };
  }

  resize();
  bubbles = Array.from({ length: 28 }, mkBubble);

  function draw() {
    ctx.clearRect(0, 0, w, h);
    for (const b of bubbles) {
      b.x += b.vx;
      b.y += b.vy;
      if (b.y < -b.r) {
        b.y = h + b.r;
        b.x = Math.random() * w;
      }
      if (b.x < -b.r) b.x = w + b.r;
      if (b.x > w + b.r) b.x = -b.r;
      ctx.beginPath();
      ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2);
      ctx.fillStyle = b.color;
      ctx.fill();
      ctx.beginPath();
      ctx.arc(b.x - b.r * 0.25, b.y - b.r * 0.25, b.r * 0.22, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(255,255,255,0.7)';
      ctx.fill();
    }
    animId = requestAnimationFrame(draw);
  }

  window.addEventListener('resize', resize, { passive: true });
  draw();
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

  document.querySelectorAll('.expertise-card, .project-card, .cta').forEach((el) => {
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
  if (!isFinePointer || prefersReduced) return;

  document.querySelectorAll('.btn, .filter-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      gsap.fromTo(btn, { scale: 0.88 }, { scale: 1, duration: 0.7, ease: BOING });
    });
  });
}

function initCardTilt() {
  /* remplacé par boing hover */
}

export function reinitCardTilt() {
  initCardTilt();
}

function initSkyParallax() {
  if (prefersReduced) return;
  const sky = document.querySelector('.sky');
  if (!sky) return;
  window.addEventListener(
    'mousemove',
    (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 30;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      gsap.to(sky, { x, y, duration: 1.2, ease: 'sine.out' });
    },
    { passive: true },
  );
}

export function animateProjectFilter(grid) {
  if (prefersReduced) return;
  gsap.from(grid.children, {
    y: 40,
    opacity: 0,
    scale: 0.6,
    stagger: 0.06,
    duration: 0.75,
    ease: BOING,
  });
}

export function initEffects() {
  initCursor();
  initScrollProgress();
  initSpotlight();
  initBubbles();
  initCloudFloat();
  initSkyParallax();
  initBoingHover();

  if (prefersReduced) {
    document.getElementById('intro')?.remove();
    document.body.classList.add('is-ready');
    setupScrollAnimations();
    initMagnetic();
    initCardTilt();
    initBoingHover();
    window.__reinitTilt = reinitCardTilt;
    window.__reinitSpotlight = reinitSpotlight;
    window.__reinitBoing = reinitBoing;
    return;
  }

  runIntro(() => {
    animateHero();
    setupScrollAnimations();
    initMagnetic();
    initCardTilt();
    initBoingHover();
    window.__reinitTilt = reinitCardTilt;
    window.__reinitSpotlight = reinitSpotlight;
    window.__reinitBoing = reinitBoing;
  });
}
