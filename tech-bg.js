const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const COLORS = {
  grid: 'rgba(123, 156, 255, 0.16)',
  gridBright: 'rgba(123, 156, 255, 0.32)',
  node: 'rgba(123, 156, 255, 0.5)',
  nodeHot: 'rgba(123, 156, 255, 0.75)',
  nodeCursor: 'rgba(255, 184, 221, 0.9)',
  edge: 'rgba(123, 156, 255, 0.12)',
  edgeHot: 'rgba(123, 156, 255, 0.22)',
  edgeCursor: 'rgba(123, 156, 255, 0.35)',
  packet: '#ffb8dd',
  packetTrail: 'rgba(123, 156, 255, 0.55)',
};

let activeCleanup = null;

export function initTechBg() {
  if (activeCleanup) {
    activeCleanup();
    activeCleanup = null;
  }

  const canvas = document.getElementById('tech-canvas');
  const glow = document.getElementById('tech-glow');
  if (!canvas) return;

  if (prefersReduced) {
    canvas.remove();
    return;
  }

  const ctx = canvas.getContext('2d');
  let w = 0;
  let h = 0;
  let dpr = 1;
  let nodes = [];
  let edges = [];
  let packets = [];
  let time = 0;
  let scrollY = 0;
  let scrollP = 0;
  let rafId = 0;
  let visible = true;
  let frameN = 0;
  const pointer = { x: 0.5, y: 0.42, px: 0, py: 0, active: false };

  function resize() {
    dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    w = canvas.clientWidth;
    h = canvas.clientHeight;
    if (w < 2 || h < 2) return;
    canvas.width = Math.floor(w * dpr);
    canvas.height = Math.floor(h * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    buildGraph();
  }

  function buildGraph() {
    nodes = [];
    const cell = Math.max(110, Math.min(140, w / 9));
    const cols = Math.min(Math.ceil(w / cell) + 1, 11);
    const rows = Math.min(Math.ceil(h / cell) + 1, 7);

    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const jx = (Math.random() - 0.5) * cell * 0.28;
        const jy = (Math.random() - 0.5) * cell * 0.28;
        nodes.push({
          x: c * cell + jx,
          y: r * cell + jy,
          r: 1.2 + Math.random() * 1.8,
          phase: Math.random() * Math.PI * 2,
        });
      }
    }

    edges = [];
    const maxDist = cell * 1.38;
    for (let i = 0; i < nodes.length; i++) {
      const near = [];
      for (let j = i + 1; j < nodes.length; j++) {
        const d = Math.hypot(nodes[i].x - nodes[j].x, nodes[i].y - nodes[j].y);
        if (d < maxDist) near.push({ j, d });
      }
      near.sort((a, b) => a.d - b.d);
      for (let k = 0; k < Math.min(2, near.length); k++) {
        edges.push({ a: i, b: near[k].j });
      }
    }

    packets = Array.from({ length: Math.min(12, edges.length) }, (_, i) => ({
      edge: i % edges.length,
      t: Math.random(),
      speed: 0.00028 + Math.random() * 0.00035,
      dir: Math.random() > 0.5 ? 1 : -1,
    }));
  }

  function vanishingPoint() {
    return {
      x: w * 0.5 + (pointer.x - 0.5) * 80,
      y: h * 0.34 + scrollY * 0.028 + (pointer.y - 0.5) * 32,
    };
  }

  function drawPerspectiveGrid() {
    const { x: vx, y: vy } = vanishingPoint();
    const depth = 0.65 + scrollP * 0.3;
    const rows = 12;
    const rays = 16;

    ctx.strokeStyle = COLORS.grid;
    ctx.lineWidth = 1;
    ctx.globalAlpha = depth;

    for (let i = 0; i <= rows; i++) {
      const t = i / rows;
      const y = vy + (h - vy + 60) * t * t;
      const half = w * t * t * 0.92;
      ctx.beginPath();
      ctx.moveTo(vx - half, y);
      ctx.lineTo(vx + half, y);
      ctx.stroke();
    }

    for (let i = 0; i <= rays; i++) {
      const a = ((i / rays) - 0.5) * Math.PI * 0.88;
      ctx.beginPath();
      ctx.moveTo(vx, vy);
      ctx.lineTo(vx + Math.sin(a) * w * 1.25, h + 80);
      ctx.stroke();
    }

    ctx.globalAlpha = 1;
    ctx.strokeStyle = COLORS.gridBright;
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.arc(vx, vy, 3, 0, Math.PI * 2);
    ctx.stroke();

    const horizonY = vy + 8;
    const grad = ctx.createLinearGradient(0, horizonY, 0, horizonY + 100);
    grad.addColorStop(0, 'rgba(123, 156, 255, 0.14)');
    grad.addColorStop(1, 'transparent');
    ctx.fillStyle = grad;
    ctx.fillRect(0, horizonY, w, 100);
  }

  function parallaxOffset() {
    if (!pointer.active) return { x: 0, y: 0 };
    return {
      x: (pointer.x - 0.5) * 24,
      y: (pointer.y - 0.5) * 18,
    };
  }

  function drawNetwork() {
    const off = parallaxOffset();
    const px = pointer.px || w * pointer.x;
    const py = pointer.py || h * pointer.y;
    const cursorR = Math.min(w, h) * 0.2;
    const cursorR2 = cursorR * cursorR;

    for (let i = 0; i < edges.length; i++) {
      const e = edges[i];
      const a = nodes[e.a];
      const b = nodes[e.b];
      const ax = a.x + off.x;
      const ay = a.y + off.y;
      const bx = b.x + off.x;
      const by = b.y + off.y;
      const mx = (ax + bx) * 0.5;
      const my = (ay + by) * 0.5;
      const dx = mx - px;
      const dy = my - py;
      const near = dx * dx + dy * dy < cursorR2;
      const wave = 0.5 + 0.5 * Math.sin(time * 0.001 + i * 0.12);
      ctx.strokeStyle = near ? COLORS.edgeCursor : wave > 0.72 ? COLORS.edgeHot : COLORS.edge;
      ctx.lineWidth = near ? 1.5 : 1;
      ctx.beginPath();
      ctx.moveTo(ax, ay);
      ctx.lineTo(bx, by);
      ctx.stroke();
    }

    for (const n of nodes) {
      const x = n.x + off.x;
      const y = n.y + off.y;
      const dx = x - px;
      const dy = y - py;
      const near = dx * dx + dy * dy < cursorR2 * 0.7;
      const pulse = 0.6 + 0.4 * Math.sin(time * 0.0015 + n.phase);
      ctx.fillStyle = near ? COLORS.nodeCursor : pulse > 0.88 ? COLORS.nodeHot : COLORS.node;
      ctx.beginPath();
      ctx.arc(x, y, n.r * pulse * (near ? 1.4 : 1), 0, Math.PI * 2);
      ctx.fill();
    }

    for (const p of packets) {
      const e = edges[p.edge];
      if (!e) continue;
      p.t += p.speed * p.dir;
      if (p.t > 1 || p.t < 0) {
        p.dir *= -1;
        p.t = Math.max(0, Math.min(1, p.t));
      }
      const a = nodes[e.a];
      const b = nodes[e.b];
      const x = a.x + (b.x - a.x) * p.t + off.x;
      const y = a.y + (b.y - a.y) * p.t + off.y;

      ctx.strokeStyle = COLORS.packetTrail;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(x - 14 * p.dir, y);
      ctx.lineTo(x, y);
      ctx.stroke();

      ctx.fillStyle = COLORS.packet;
      ctx.beginPath();
      ctx.arc(x, y, 3, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  function drawAxes() {
    const pad = 22;
    ctx.strokeStyle = 'rgba(123, 156, 255, 0.22)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(pad, h - pad);
    ctx.lineTo(pad + 44, h - pad);
    ctx.moveTo(pad, h - pad);
    ctx.lineTo(pad, h - pad - 44);
    ctx.stroke();

    ctx.font = '10px "IBM Plex Mono", ui-monospace, monospace';
    ctx.fillStyle = 'rgba(122, 140, 184, 0.5)';
    ctx.fillText('x', pad + 48, h - pad + 4);
    ctx.fillText('y', pad - 4, h - pad - 48);
  }

  function updateGlow() {
    if (!glow) return;
    const x = pointer.px || w * pointer.x;
    const y = pointer.py || h * pointer.y;
    glow.style.setProperty('--gx', `${x}px`);
    glow.style.setProperty('--gy', `${y}px`);
    glow.style.opacity = pointer.active ? '0.9' : '0.55';
  }

  function frame(ts) {
    rafId = requestAnimationFrame(frame);
    if (!visible || w < 2 || h < 2) return;

    time = ts;
    frameN += 1;
    ctx.clearRect(0, 0, w, h);
    drawPerspectiveGrid();
    drawNetwork();
    if (frameN % 2 === 0) drawAxes();
    if (frameN % 3 === 0) updateGlow();
  }

  const onResize = () => resize();
  const onScroll = () => {
    scrollY = window.scrollY;
    const max = document.documentElement.scrollHeight - window.innerHeight;
    scrollP = max > 0 ? scrollY / max : 0;
  };
  const onPointer = (e) => {
    if (w < 2) return;
    pointer.x = e.clientX / w;
    pointer.y = e.clientY / h;
    pointer.px = e.clientX;
    pointer.py = e.clientY;
    pointer.active = true;
  };
  const onVis = () => {
    visible = !document.hidden;
  };

  window.addEventListener('resize', onResize, { passive: true });
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('pointermove', onPointer, { passive: true });
  document.addEventListener('visibilitychange', onVis);

  requestAnimationFrame(() => {
    resize();
    if (w < 2) resize();
    onScroll();
    rafId = requestAnimationFrame(frame);
  });

  activeCleanup = () => {
    cancelAnimationFrame(rafId);
    window.removeEventListener('resize', onResize);
    window.removeEventListener('scroll', onScroll);
    window.removeEventListener('pointermove', onPointer);
    document.removeEventListener('visibilitychange', onVis);
  };

  return activeCleanup;
}
