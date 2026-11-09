/** Native, optional visual effects. No cursor replacement, canvas, or animation loop. */
export function initEffects(config) {
  // Preferences / পছন্দ: reduced motion and pointer type control optional effects.
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const fine = matchMedia('(hover: hover) and (pointer: fine)');
  const root = document.documentElement;
  const cards = '.project-card, .skill-card, .quick-card, .resume-card, .certificate-card';
  const buttons =
    '.button, #theme-toggle, .filter-row button, .top-contact, .project-link, .certificate-preview, .certificate-download, .cv-preview';
  let scene,
    frame = 0,
    scrollFrame = 0,
    pending,
    hovered;

  // Background / পটভূমি: decorative layers never intercept clicks.
  if (config.background) {
    scene = document.createElement('div');
    scene.className = 'ambient-scene';
    scene.setAttribute('aria-hidden', 'true');
    for (const className of [
      'ambient-grid',
      'ambient-orb orb-blue',
      'ambient-orb orb-cyan',
      'geometry geometry-cube',
      'geometry geometry-ring',
      'geometry geometry-diamond',
    ]) {
      const shape = document.createElement('div');
      shape.className = className;
      scene.append(shape);
    }
    document.body.prepend(scene);
  }

  // Reset helpers / রিসেট: clear pointer effects when leaving a card or the page.
  function clearCard() {
    if (!hovered) return;
    hovered.classList.remove('pointer-lit');
    for (const name of ['--pointer-x', '--pointer-y', '--tilt-x', '--tilt-y'])
      hovered.style.removeProperty(name);
    hovered = undefined;
  }
  function reset() {
    cancelAnimationFrame(frame);
    cancelAnimationFrame(scrollFrame);
    frame = 0;
    scrollFrame = 0;
    pending = undefined;
    clearCard();
    scene?.style.removeProperty('--scene-x');
    scene?.style.removeProperty('--scene-y');
    scene?.style.removeProperty('--scroll-offset');
  }
  function sync() {
    reset();
    const active = fine.matches && !reduced.matches;
    root.dataset.pointerEffects = String(active);
    root.dataset.buttonEffects = String(Boolean(config.buttons && !reduced.matches));
  }

  // Pointer effects / হোভার: update card highlight and a small 3D tilt.
  function paint() {
    frame = 0;
    if (!pending || document.hidden) return;
    const { x, y, target } = pending;
    pending = undefined;
    if (scene) {
      scene.style.setProperty('--scene-x', `${(x / innerWidth - 0.5) * 12}px`);
      scene.style.setProperty('--scene-y', `${(y / innerHeight - 0.5) * 10}px`);
    }
    const card = target.closest(cards);
    if (hovered !== card) clearCard();
    if (card) {
      hovered = card;
      const rect = card.getBoundingClientRect();
      const px = x - rect.left,
        py = y - rect.top;
      if (config.spotlight) {
        card.classList.add('pointer-lit');
        card.style.setProperty('--pointer-x', `${px}px`);
        card.style.setProperty('--pointer-y', `${py}px`);
      }
      if (config.tilt && card.matches('.project-card')) {
        const degrees = Math.min(Math.max(Number(config.tiltDegrees) || 0, 0), 8);
        card.style.setProperty('--tilt-x', `${-(py / rect.height - 0.5) * degrees}deg`);
        card.style.setProperty('--tilt-y', `${(px / rect.width - 0.5) * degrees}deg`);
      }
    }
  }

  // Pointer events / মাউস: schedule work with requestAnimationFrame.
  document.addEventListener(
    'pointermove',
    (event) => {
      if (!fine.matches || reduced.matches || event.pointerType !== 'mouse' || document.hidden)
        return;
      pending = { x: event.clientX, y: event.clientY, target: event.target };
      if (!frame) frame = requestAnimationFrame(paint);
    },
    { passive: true },
  );

  // Background movement / পটভূমি: small desktop-only scroll movement.
  function scrollBackground() {
    scrollFrame = 0;
    if (scene && fine.matches && !reduced.matches && !document.hidden && innerWidth > 760)
      scene.style.setProperty('--scroll-offset', `${Math.min(scrollY * 0.025, 90)}px`);
  }
  window.addEventListener(
    'scroll',
    () => {
      if (!scene || reduced.matches || !fine.matches || document.hidden || innerWidth <= 760)
        return;
      if (!scrollFrame) scrollFrame = requestAnimationFrame(scrollBackground);
    },
    { passive: true },
  );
  document.documentElement.addEventListener('pointerleave', reset);
  window.addEventListener('blur', reset);
  document.addEventListener('visibilitychange', reset);

  // Button feedback / বাটন: temporary ripple after a click.
  document.addEventListener('click', (event) => {
    if (!config.buttons || reduced.matches) return;
    const button = event.target.closest(buttons);
    if (!button) return;
    const rect = button.getBoundingClientRect();
    const ripple = document.createElement('span');
    ripple.className = 'button-ripple';
    ripple.setAttribute('aria-hidden', 'true');
    ripple.style.left = `${event.detail ? event.clientX - rect.left : rect.width / 2}px`;
    ripple.style.top = `${event.detail ? event.clientY - rect.top : rect.height / 2}px`;
    button.querySelector('.button-ripple')?.remove();
    button.append(ripple);
    ripple.addEventListener('animationend', () => ripple.remove(), { once: true });
  });

  // Preference changes / পছন্দ বদল: immediately respect reduced motion.
  reduced.addEventListener('change', sync);
  fine.addEventListener('change', sync);
  sync();
}
