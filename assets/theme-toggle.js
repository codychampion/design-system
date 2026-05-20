/* ============================================================
   theme-toggle.js — light/dark theme toggle for any surface
   carrying [data-mode] on <html>.

   Each mode has a natural theme. Setting [data-theme] on <html>
   flips to the sibling defined in tokens.css.

     signal   natural = light   sibling = dark
     obsidian natural = dark    sibling = light
     field    natural = dark    sibling = light

   Markup: drop a `<button data-theme-toggle>` somewhere in your
   chrome. This script wires it up. Initial icon reflects the
   *current* theme (☼ for dark→light, ☾ for light→dark).
   ============================================================ */
(function () {
  const html = document.documentElement;
  const mode = html.dataset.mode || 'signal';
  const naturalTheme = mode === 'signal' ? 'light' : 'dark';
  const altTheme = naturalTheme === 'light' ? 'dark' : 'light';

  // Read ?theme=light|dark from the URL and apply it on load (for gallery embeds).
  try {
    const params = new URLSearchParams(window.location.search);
    const urlTheme = params.get('theme');
    if (urlTheme === 'light' || urlTheme === 'dark') {
      if (urlTheme === naturalTheme) {
        delete html.dataset.theme;
      } else {
        html.dataset.theme = altTheme;
      }
    }
  } catch (e) { /* ignore */ }

  const btn = document.querySelector('[data-theme-toggle]');
  if (!btn) return;

  function currentTheme() {
    return html.dataset.theme || naturalTheme;
  }
  function setIcon() {
    const c = currentTheme();
    btn.textContent = c === 'light' ? '\u263E' : '\u2600';
    const title = c === 'light' ? 'Switch to dark theme' : 'Switch to light theme';
    btn.setAttribute('title', title);
    btn.setAttribute('aria-label', title);
  }
  setIcon();
  btn.addEventListener('click', () => {
    const next = currentTheme() === 'light' ? 'dark' : 'light';
    if (next === naturalTheme) {
      delete html.dataset.theme;
    } else {
      html.dataset.theme = altTheme;
    }
    setIcon();
  });
})();
