import { translate } from './i18n.js?v=20261109-formatted';

/** One active-section controller for pointer, keyboard, scroll, and history. */
export function initNavigation() {
  // Elements and breakpoints / মেনু: collect controls and section targets.
  const toggle = document.querySelector('#menu-toggle');
  const nav = document.querySelector('#site-nav');
  const links = [...nav.querySelectorAll('a[href^="#"]')];
  const ids = new Set(links.map((link) => link.hash.slice(1)));
  const sections = [...document.querySelectorAll('main section[id]')].filter((section) =>
    ids.has(section.id),
  );
  const breadcrumb = document.querySelector('.breadcrumb strong');
  const mobile = matchMedia('(max-width: 900px)');
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const indicator = document.createElement('span');
  indicator.className = 'nav-indicator';
  indicator.setAttribute('aria-hidden', 'true');
  nav.prepend(indicator);
  let activeId = 'home',
    frame = 0,
    bottomTarget = null;
  const label = (link) => link.textContent.trim().replace(/^[⌂◉⌘▦⌨▤◇↓✉]\s*/, '');

  // Active marker / সক্রিয় লিংক: place the sliding highlight behind the selected link.
  function placeIndicator() {
    const active = links.find((link) => link.hash === '#' + activeId);
    if (!active || !nav.getClientRects().length) {
      indicator.hidden = true;
      return;
    }
    indicator.hidden = false;
    indicator.style.width = active.offsetWidth + 'px';
    indicator.style.height = active.offsetHeight + 'px';
    indicator.style.transform = `translate(${active.offsetLeft}px,${active.offsetTop}px)`;
  }
  function setActive(id) {
    activeId = id;
    links.forEach((link) => {
      const selected = link.hash === '#' + id;
      link.classList.toggle('active', selected);
      if (selected) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
    const active = links.find((link) => link.hash === '#' + id);
    if (active) breadcrumb.textContent = label(active);
    placeIndicator();
  }

  // Mobile menu / মোবাইল মেনু: update visibility and accessible labels.
  function setOpen(open) {
    nav.classList.toggle('menu-open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', translate(open ? 'Close menu' : 'Open menu'));
    toggle.querySelector('span').textContent = open ? '×' : '☰';
    placeIndicator();
  }
  function fromHash(hash) {
    try {
      return document.getElementById(decodeURIComponent(hash.replace(/^#/, '')));
    } catch {
      return null;
    }
  }

  // Scroll tracking / স্ক্রল: select the section currently being read.
  function updateFromScroll() {
    frame = 0;
    const threshold = mobile.matches ? 110 : Math.min(180, innerHeight * 0.22);
    let current = sections[0];
    for (const section of sections) {
      if (section.getBoundingClientRect().top <= threshold) current = section;
    }
    if (scrollY + innerHeight >= document.documentElement.scrollHeight - 4)
      current = bottomTarget || sections.at(-1);
    if (current && current.id !== activeId) setActive(current.id);
  }

  // User actions / ব্যবহার: clicks, Escape, scrolling, resize, and browser history.
  toggle.addEventListener('click', () => setOpen(toggle.getAttribute('aria-expanded') !== 'true'));
  document.addEventListener('click', (event) => {
    const anchor = event.target.closest('a[href^="#"]');
    if (!anchor) return;
    const target = fromHash(anchor.hash);
    if (!target) return;
    event.preventDefault();
    bottomTarget = sections.includes(target) ? target : null;
    if (mobile.matches) setOpen(false);
    if (location.hash !== anchor.hash) history.pushState(null, '', anchor.hash);
    if (sections.includes(target)) setActive(target.id);
    if (!target.hasAttribute('tabindex')) target.setAttribute('tabindex', '-1');
    target.focus({ preventScroll: true });
    target.scrollIntoView({ behavior: reduced.matches ? 'instant' : 'smooth', block: 'start' });
  });
  document.addEventListener('keydown', (event) => {
    if (
      event.key === 'Escape' &&
      mobile.matches &&
      toggle.getAttribute('aria-expanded') === 'true'
    ) {
      setOpen(false);
      toggle.focus();
    }
  });
  document.addEventListener('click', (event) => {
    if (mobile.matches && !event.target.closest('.sidebar')) setOpen(false);
  });
  for (const type of ['wheel', 'touchmove'])
    window.addEventListener(
      type,
      () => {
        bottomTarget = null;
      },
      { passive: true },
    );
  document.addEventListener('keydown', (event) => {
    if (['ArrowDown', 'ArrowUp', 'PageDown', 'PageUp', 'Home', 'End', ' '].includes(event.key))
      bottomTarget = null;
  });
  window.addEventListener(
    'scroll',
    () => {
      if (!frame) frame = requestAnimationFrame(updateFromScroll);
    },
    { passive: true },
  );
  window.addEventListener(
    'resize',
    () => {
      placeIndicator();
      updateFromScroll();
    },
    { passive: true },
  );
  mobile.addEventListener('change', () => setOpen(false));
  window.addEventListener('hashchange', () => {
    const target = fromHash(location.hash);
    if (target && sections.includes(target)) setActive(target.id);
  });
  window.addEventListener('popstate', () => {
    const target = fromHash(location.hash);
    bottomTarget = target;
    if (target) target.scrollIntoView({ behavior: 'instant' });
    updateFromScroll();
  });
  document.addEventListener('languagechange', () => {
    setOpen(toggle.getAttribute('aria-expanded') === 'true');
    setActive(activeId);
  });
  new ResizeObserver(placeIndicator).observe(nav);
  document.fonts?.ready.then(placeIndicator);

  // Initial state / শুরু: restore a direct section link after the page is ready.
  setOpen(false);
  setActive('home');
  const initial = fromHash(location.hash);
  bottomTarget = sections.includes(initial) ? initial : null;
  if (initial)
    requestAnimationFrame(() => {
      initial.scrollIntoView({ behavior: 'instant' });
      updateFromScroll();
    });
  else updateFromScroll();
}
