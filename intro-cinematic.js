const BOOT_LINES = [
  'init portfolio.runtime',
  'mount: hero · expertise · projects',
  'load: react, typescript, vite',
  'render pipeline ok — entering',
];

const CHAR_MS = 0.012;
const LINE_GAP = 0.04;
const INTRO_SKIP_KEY = 'hugodavion-intro-skip';

export function runIntroCinematic({ gsap, BOING, onComplete }) {
  const intro = document.getElementById('intro');

  if (!intro) {
    onComplete?.({ skipped: true, intro });
    return;
  }

  const skipIntro = (persistSkip = false) => {
    if (persistSkip) {
      try {
        sessionStorage.setItem(INTRO_SKIP_KEY, '1');
      } catch {
        /* ignore */
      }
    }
    intro.remove();
    document.body.classList.remove('is-loading');
    document.body.classList.add('is-ready');
    onComplete?.({ skipped: true, intro });
  };

  if (sessionStorage.getItem(INTRO_SKIP_KEY)) {
    skipIntro();
    return;
  }

  document.body.classList.add('is-loading');

  const terminal = document.getElementById('intro-terminal');
  const logo = intro.querySelector('.intro__logo');
  const tag = intro.querySelector('.intro__tag');
  const counter = intro.querySelector('.intro__counter');
  const bar = intro.querySelector('.intro__bar');
  const barFill = intro.querySelector('.intro__bar-fill');
  const grid = intro.querySelector('.intro__grid');
  const scan = intro.querySelector('.intro__scan');
  const shutters = intro.querySelectorAll('.intro__shutter');
  const skipBtn = document.getElementById('intro-skip');

  if (!terminal || !logo) {
    document.body.classList.remove('is-loading');
    onComplete?.({ skipped: true, intro });
    return;
  }

  const counterObj = { val: 0 };
  let finished = false;
  let tl;

  skipBtn?.addEventListener('click', () => {
    if (finished) return;
    tl?.kill();
    skipIntro(true);
  });

  terminal.innerHTML = '';
  const lineEls = BOOT_LINES.map((text) => {
    const line = document.createElement('p');
    line.className = 'intro__term-line';
    line.innerHTML =
      '<span class="intro__term-prefix" aria-hidden="true">></span> ' +
      `<span class="intro__term-text" data-full="${text}"></span>` +
      '<span class="intro__term-cursor" aria-hidden="true">_</span>';
    terminal.appendChild(line);
    return line;
  });

  gsap.set(intro, { display: 'flex', opacity: 1, clipPath: 'inset(0 0 0 0)' });
  gsap.set(shutters, { scaleY: 0 });
  gsap.set([logo, tag, counter, bar], { opacity: 0, y: 16 });
  gsap.set(logo, { scale: 0.85 });
  gsap.set(barFill, { scaleX: 0 });
  gsap.set(scan, { y: '-120%', opacity: 0.85 });
  gsap.set(terminal, { opacity: 1 });
  if (skipBtn) gsap.set(skipBtn, { opacity: 0, y: 8 });

  const finish = () => {
    if (finished) return;
    finished = true;
    clearTimeout(failSafe);
    intro.remove();
    document.body.classList.remove('is-loading');
    document.body.classList.add('is-ready');
    onComplete?.({ skipped: false });
  };

  const failSafe = setTimeout(finish, 7000);

  tl = gsap.timeline({ onComplete: finish });

  tl.from(grid, { opacity: 0, duration: 0.35, ease: 'power2.out' })
    .to(scan, { y: '120%', duration: 0.65, ease: 'power2.inOut' }, 0.08)
    .to(scan, { opacity: 0, duration: 0.15 }, '-=0.12');

  if (skipBtn) {
    tl.to(skipBtn, { opacity: 1, y: 0, duration: 0.35, ease: 'power2.out' }, 0.2);
  }

  let cursor = 0.28;
  lineEls.forEach((line) => {
    const textEl = line.querySelector('.intro__term-text');
    const cursorEl = line.querySelector('.intro__term-cursor');
    const full = textEl.dataset.full || '';
    const obj = { n: 0 };
    const typeDur = Math.max(0.14, full.length * CHAR_MS);

    tl.from(line, { opacity: 0, x: -6, duration: 0.1 }, cursor);
    tl.to(
      obj,
      {
        n: full.length,
        duration: typeDur,
        ease: 'none',
        onUpdate: () => {
          textEl.textContent = full.slice(0, Math.round(obj.n));
        },
      },
      cursor,
    );
    tl.to(cursorEl, { opacity: 0, duration: 0.06 }, '+=0.02');
    cursor += typeDur + LINE_GAP;
  });

  tl.to(terminal, { opacity: 0, y: -8, duration: 0.2 }, cursor + 0.02)
    .to(logo, { opacity: 1, y: 0, scale: 1, duration: 0.55, ease: BOING }, cursor + 0.05)
    .to(tag, { opacity: 1, y: 0, duration: 0.28, ease: 'power2.out' }, cursor + 0.18)
    .to(bar, { opacity: 1, y: 0, duration: 0.22 }, cursor + 0.2)
    .to(counter, { opacity: 1, y: 0, duration: 0.22 }, cursor + 0.2)
    .to(barFill, { scaleX: 1, duration: 0.65, ease: 'power2.inOut' }, cursor + 0.28)
    .to(
      counterObj,
      {
        val: 100,
        duration: 0.65,
        ease: 'power2.inOut',
        onUpdate: () => {
          if (counter) counter.textContent = String(Math.round(counterObj.val)).padStart(3, '0');
        },
      },
      '<',
    )
    .to(intro.querySelector('.intro__inner'), { opacity: 0, scale: 1.03, duration: 0.22, ease: 'power2.in' }, '+=0.04')
    .to(terminal, { opacity: 0, duration: 0.12 }, '<')
    .to(shutters, { scaleY: 1, duration: 0.22, ease: 'power2.in', stagger: 0.02 }, '+=0.01')
    .to(
      shutters,
      {
        scaleY: 0,
        duration: 0.55,
        ease: 'power3.inOut',
        stagger: 0.03,
      },
      '+=0.02',
    )
    .to(intro, { opacity: 0, duration: 0.22, ease: 'power2.in' }, '-=0.15');
}
