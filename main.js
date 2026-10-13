(function () {
  // Menú móvil
  var t = document.querySelector('.nav-toggle'), n = document.getElementById('menu');
  if (t && n) {
    t.addEventListener('click', function () {
      var o = n.classList.toggle('open');
      t.setAttribute('aria-expanded', o);
      t.setAttribute('aria-label', o ? 'Cerrar menú' : 'Abrir menú');
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && n.classList.contains('open')) { t.click(); t.focus(); }
    });
  }
  // Carrusel de galería
  document.querySelectorAll('[data-carousel]').forEach(function (c) {
    var track = c.querySelector('.gallery-track'), prev = c.querySelector('.prev'), next = c.querySelector('.next');
    var step = function () { return Math.max(track.clientWidth * 0.7, 240); };
    var go = function (d) {
      var max = track.scrollWidth - track.clientWidth;
      if (d > 0 && track.scrollLeft >= max - 8) track.scrollTo({ left: 0, behavior: 'smooth' });
      else track.scrollBy({ left: d * step(), behavior: 'smooth' });
    };
    prev && prev.addEventListener('click', function () { go(-1); });
    next && next.addEventListener('click', function () { go(1); });
    var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!reduce) {
      var timer, start = function () { stop(); timer = setInterval(function () { go(1); }, 4500); }, stop = function () { clearInterval(timer); };
      c.addEventListener('mouseenter', stop); c.addEventListener('mouseleave', start);
      c.addEventListener('focusin', stop); c.addEventListener('touchstart', stop, { passive: true });
      if ('IntersectionObserver' in window) {
        new IntersectionObserver(function (e) { e[0].isIntersecting ? start() : stop(); }).observe(c);
      }
    }
  });
})();

// Botón flotante "Contactar"
(function () {
  var fab = document.querySelector('[data-fab]'); if (!fab) return;
  var btn = fab.querySelector('.fab-btn');
  var set = function (o) { fab.classList.toggle('open', o); btn.setAttribute('aria-expanded', o); };
  btn.addEventListener('click', function (e) { e.preventDefault(); set(!fab.classList.contains('open')); });
  document.addEventListener('click', function (e) { if (!fab.contains(e.target)) set(false); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') { set(false); } });
})();
