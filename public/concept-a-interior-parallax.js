(function () {
  // Parallax + scroll-emergence for Concept A interior sections
  // Disabled under prefers-reduced-motion

  var motionOk = !window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // ── Parallax ──────────────────────────────────────────────────────────────
  if (motionOk) {
    var layers = [];
    document.querySelectorAll('[data-parallax-rate]').forEach(function (el) {
      var rate = parseFloat(el.dataset.parallaxRate) || 0;
      layers.push({ el: el, rate: rate });
    });

    if (layers.length) {
      var ticking = false;

      function updateParallax() {
        layers.forEach(function (item) {
          var parent = item.el.parentElement;
          if (!parent) return;
          var rect = parent.getBoundingClientRect();
          var offset = (rect.top + rect.height / 2 - window.innerHeight / 2) * item.rate;
          item.el.style.transform = 'translateY(' + offset.toFixed(2) + 'px)';
        });
        ticking = false;
      }

      window.addEventListener('scroll', function () {
        if (!ticking) {
          window.requestAnimationFrame(updateParallax);
          ticking = true;
        }
      }, { passive: true });

      updateParallax();
    }
  }

  // ── Scroll-emergence (instrument cards + phase items) ──────────────────────
  // ca-emerge is handled by ConceptAEmerge React component — only target new classes
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  document.querySelectorAll('.ca-instrument-card, .ca-phase-item').forEach(function (el) {
    observer.observe(el);
  });
})();
