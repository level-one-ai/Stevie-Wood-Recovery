/* Adapted from the awwwards Scroll Craft engine (vanilla, no build step).
   Loads after js/vendor/gsap.min.js, ScrollTrigger.min.js and lenis.min.js
   and exposes window.ScrollCraft. */
/* ============================================================================
   Scroll Craft - engine
   Reusable scroll/motion primitives on top of Lenis + GSAP ScrollTrigger.
   Handles capability tiers, reduced motion, and a runtime frame-rate guard so
   heavy effects degrade instead of janking. See reference/feel.md,
   reference/worldflight.md, reference/devices.md.

   Expects (via import maps or bundler):
     import gsap from 'gsap';
     import { ScrollTrigger } from 'gsap/ScrollTrigger';
     import Lenis from 'lenis';
   Pass them in via ScrollCraft.init({ gsap, ScrollTrigger, Lenis }).
   ========================================================================== */

window.ScrollCraft = (() => {
  let gsap, ScrollTrigger, Lenis, lenis;
  let tier = 'high';
  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const html = document.documentElement;

  /* ---- Capability tier (reference/devices.md) ---------------------------- */
  function detectTier() {
    if (reduced) return 'reduced';
    const mem = navigator.deviceMemory || 4;
    const cores = navigator.hardwareConcurrency || 4;
    const coarse = matchMedia('(pointer: coarse)').matches;
    const saveData = navigator.connection && navigator.connection.saveData;
    if (saveData) return 'low';
    if (mem <= 2 || cores <= 4) return 'low';
    if (coarse && mem <= 4) return 'mid';
    if (mem >= 8 && cores >= 8 && !coarse) return 'high';
    return 'mid';
  }

  /* ---- Runtime frame-rate guard -----------------------------------------
     Watches for sustained frame drops after heavy effects start; on trouble it
     downgrades the tier and calls onDrop() so callers can tear an effect down. */
  function watchFrameRate(onDrop, { floor = 50, sample = 40 } = {}) {
    if (reduced) return;
    let last = performance.now(), acc = 0, frames = 0, tripped = false;
    function tick(now) {
      const dt = now - last; last = now;
      const fps = 1000 / dt;
      acc += fps; frames++;
      if (frames >= sample) {
        const avg = acc / frames; acc = 0; frames = 0;
        if (avg < floor && !tripped) {
          tripped = true;
          tier = tier === 'high' ? 'mid' : 'low';
          applyTierClass();
          if (typeof onDrop === 'function') onDrop(avg, tier);
        }
      }
      if (!tripped) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }

  function applyTierClass() {
    html.classList.remove('tier-low', 'tier-mid', 'tier-high', 'tier-reduced');
    html.classList.add('tier-' + tier);
  }

  /* ---- Smooth scroll ----------------------------------------------------- */
  function startLenis() {
    if (reduced || !Lenis) return null;
    lenis = new Lenis({
      duration: 1.1,
      easing: (t) => 1 - Math.pow(1 - t, 3),
      smoothWheel: true,
    });
    html.classList.add('lenis');
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => lenis.raf(time * 1000));
    gsap.ticker.lagSmoothing(0);
    return lenis;
  }

  /* ---- Init -------------------------------------------------------------- */
  function init(deps) {
    ({ gsap, ScrollTrigger, Lenis } = deps);
    gsap.registerPlugin(ScrollTrigger);
    tier = detectTier();
    applyTierClass();
    html.classList.add('sc-ready');

    if (reduced) {
      // Show every authored final state and wire nothing that moves.
      gsap.set('[data-reveal]', { clearProps: 'all', autoAlpha: 1, y: 0 });
      return { tier, lenis: null };
    }
    startLenis();
    reveal();
    return { tier, lenis };
  }

  /* ============================================================================
     Primitives
     ========================================================================== */

  /* Reveal - authored entrance, once, on enter. Not a global fade-up: pass a
     selector and stagger deliberately per section. */
  function reveal(selector = '[data-reveal]', opts = {}) {
    if (reduced) return;
    gsap.utils.toArray(selector).forEach((el) => {
      ScrollTrigger.create({
        trigger: el, start: opts.start || 'top 82%', once: opts.once !== false,
        onEnter: () => el.classList.add('is-in'),
      });
    });
  }

  /* Parallax - transform-only layered depth. layers: [{el, depth}] where depth
     is the fraction of scroll travel (negative moves up faster). */
  function parallax(stage, layers) {
    if (reduced || tier === 'low') return;   // reveal-only fallback on low tier
    const tl = gsap.timeline({
      scrollTrigger: { trigger: stage, start: 'top bottom', end: 'bottom top', scrub: 1 },
    });
    layers.forEach(({ el, depth }) => tl.to(el, { yPercent: depth * 100, ease: 'none' }, 0));
    return tl;
  }

  /* Pinned scrubbed stage - the worldflight workhorse. build(tl) receives a
     timeline you populate with transform/opacity tweens only. */
  function stage(trigger, build, { length = '150%', pin = true, scrub = 1 } = {}) {
    if (reduced || tier === 'low') { // play out instantly to final state
      const tl = gsap.timeline(); build(tl); tl.progress(1); return tl;
    }
    const tl = gsap.timeline({
      scrollTrigger: { trigger, start: 'top top', end: '+=' + length, scrub, pin,
        anticipatePin: 1, invalidateOnRefresh: true },
    });
    build(tl);
    return tl;
  }

  /* Horizontal flight - vertical scroll drives lateral travel. */
  function flight(wrapSelector, trackSelector) {
    if (reduced || tier === 'low') return;
    const track = document.querySelector(trackSelector);
    if (!track) return;
    gsap.to(track, {
      x: () => -(track.scrollWidth - window.innerWidth),
      ease: 'none',
      scrollTrigger: {
        trigger: wrapSelector, start: 'top top',
        end: () => '+=' + track.scrollWidth, scrub: 1, pin: true, invalidateOnRefresh: true,
      },
    });
  }

  /* Scroll progress - drive a [data-progress] element's scaleX 0→1. */
  function progress(selector = '[data-progress]') {
    const el = document.querySelector(selector);
    if (!el) return;
    gsap.to(el, { scaleX: 1, ease: 'none',
      scrollTrigger: { start: 0, end: 'max', scrub: true } });
  }

  /* Magnetic hover target - pointer-gated, transform-only. High/mid only. */
  function magnetic(selector = '.sc-magnetic', strength = 0.3) {
    if (reduced || tier === 'low' || matchMedia('(pointer: coarse)').matches) return;
    gsap.utils.toArray(selector).forEach((el) => {
      const move = (e) => {
        const r = el.getBoundingClientRect();
        gsap.to(el, { x: (e.clientX - (r.left + r.width / 2)) * strength,
                      y: (e.clientY - (r.top + r.height / 2)) * strength,
                      duration: 0.4, ease: 'power3.out' });
      };
      el.addEventListener('pointermove', move);
      el.addEventListener('pointerleave', () =>
        gsap.to(el, { x: 0, y: 0, duration: 0.5, ease: 'elastic.out(1, 0.4)' }));
    });
  }

  function refresh() { if (ScrollTrigger) ScrollTrigger.refresh(); }
  function stop() { if (lenis) lenis.stop(); }
  function start() { if (lenis) lenis.start(); }

  return { init, reveal, parallax, stage, flight, progress, magnetic,
           watchFrameRate, refresh, stop, start,
           get tier() { return tier; }, get lenis() { return lenis; } };
})();

