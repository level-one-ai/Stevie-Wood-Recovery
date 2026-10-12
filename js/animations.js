// Stevie Wood Recovery - scroll animations (Scroll Craft engine + GSAP).
// If the libraries fail to load, nothing here runs and every section stays
// fully visible. Under "reduce motion" the engine shows final states only.
(function() {
    if (!window.gsap || !window.ScrollTrigger || !window.ScrollCraft) return;

    var gsap = window.gsap;
    var ScrollTrigger = window.ScrollTrigger;
    var SC = window.ScrollCraft;
    var state = SC.init({ gsap: gsap, ScrollTrigger: ScrollTrigger, Lenis: window.Lenis });
    var lenis = state.lenis;

    // Visitors who ask for less motion get the finished page, nothing moves
    if (SC.tier === "reduced" || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    var EASE_IN = "expo.out"; // close to cubic-bezier(0.16, 1, 0.3, 1)
    var lite = SC.tier === "low";
    var heavy = []; // scrubbed effects to drop if the frame rate struggles

    // Wrap text in a mask so it can rise up from behind a clip edge
    function mask(el) {
        if (!el || el.querySelector(".mask-inner")) return el && el.querySelector(".mask-inner");
        var inner = document.createElement("span");
        inner.className = "mask-inner";
        while (el.firstChild) inner.appendChild(el.firstChild);
        el.appendChild(inner);
        el.classList.add("mask");
        return inner;
    }

    function onEnter(trigger, build, start) {
        var tl = gsap.timeline({ paused: true });
        build(tl);
        ScrollTrigger.create({
            trigger: trigger,
            start: start || "top 78%",
            once: true,
            onEnter: function() { tl.play(); }
        });
        return tl;
    }

    // Section headings: the heading rises out of its mask, then the intro line
    function headIn(tl, section) {
        var h2 = section.querySelector("h2");
        var intro = section.querySelector(".section-head p, .section-head-text");
        if (h2) tl.from(mask(h2), { yPercent: 110, duration: 1, ease: EASE_IN }, 0);
        if (intro) tl.from(intro, { y: 24, autoAlpha: 0, duration: 0.8, ease: EASE_IN }, 0.15);
        return tl;
    }

    // ---- Progress bar -----------------------------------------------------
    gsap.to(".scroll-progress", {
        scaleX: 1,
        ease: "none",
        scrollTrigger: { start: 0, end: "max", scrub: 0.3 }
    });

    // ---- Hero: on load -----------------------------------------------------
    var heroLines = gsap.utils.toArray(".hero-title .line, .hero-title .accent").map(mask);
    gsap.timeline({ defaults: { ease: EASE_IN } })
        .from(".hero-media img", { scale: 1.12, duration: 1.8, ease: "power2.out" }, 0)
        .from(".hero-eyebrow", { x: -24, autoAlpha: 0, duration: 0.8 }, 0.15)
        .from(heroLines, { yPercent: 110, duration: 1.1, stagger: 0.12 }, 0.2)
        .from(".hero-sub", { y: 24, autoAlpha: 0, duration: 0.8 }, 0.55)
        .from(".hero-buttons .btn", { y: 24, autoAlpha: 0, duration: 0.8, stagger: 0.08 }, 0.65)
        .from(".proof-item", { y: 32, autoAlpha: 0, duration: 0.8, stagger: 0.08 }, 0.8);

    var mm = gsap.matchMedia();

    // ---- Desktop and tablet only: parallax, pinned gallery ----------------
    mm.add("(min-width: 769px)", function() {
        if (lite) return;

        // Hero photo drifts slower than the page as you leave the hero
        heavy.push(gsap.to(".hero-media img", {
            yPercent: 10,
            ease: "none",
            scrollTrigger: { trigger: "#hero", start: "top top", end: "bottom top", scrub: true }
        }));
        heavy.push(gsap.to(".hero-content", {
            y: -60,
            autoAlpha: 0.2,
            ease: "none",
            scrollTrigger: { trigger: "#hero", start: "center top", end: "bottom top", scrub: true }
        }));

        // About photo: gentle parallax inside its frame
        heavy.push(gsap.fromTo(".about-photo img", { yPercent: -6 }, {
            yPercent: 6,
            ease: "none",
            scrollTrigger: { trigger: "#about", start: "top bottom", end: "bottom top", scrub: true }
        }));
    });

    // The authored moment: scroll down, the job photos travel sideways.
    // Runs on every device, touch screens included.
    ScrollTrigger.config({ ignoreMobileResize: true });
    var header = document.querySelector(".site-header");

    mm.add("all", function() {
        var section = document.getElementById("gallery");
        var track = document.getElementById("galleryTrack");
        section.classList.add("is-flight");

        function distance() {
            return Math.max(0, track.scrollWidth - track.clientWidth);
        }

        gsap.to(track, {
            x: function() { return -distance(); },
            ease: "none",
            scrollTrigger: {
                trigger: section,
                // On phones the section is shorter than the screen, so it
                // pins just under the header instead of at the very top
                start: function() {
                    return window.innerWidth < 769 ? "top " + header.offsetHeight + "px" : "top top";
                },
                end: function() { return "+=" + distance(); },
                scrub: 1,
                pin: true,
                anticipatePin: 1,
                invalidateOnRefresh: true
            }
        });

        return function() {
            section.classList.remove("is-flight");
            gsap.set(track, { clearProps: "transform" });
        };
    });

    // ---- Services: every card, purple one included, rises together --------
    onEnter("#services", function(tl) {
        headIn(tl, document.getElementById("services"));
        tl.from(".service-card", { y: 40, autoAlpha: 0, duration: 0.9, stagger: 0.07, ease: EASE_IN }, 0.2);
    });

    // ---- Gallery heading and first cards ----------------------------------
    onEnter("#gallery", function(tl) {
        headIn(tl, document.getElementById("gallery"));
        tl.from(".gallery-card", { y: 40, autoAlpha: 0, duration: 1, stagger: 0.08, ease: EASE_IN }, 0.2);
    });

    // ---- How it works: each circle fills left to right as you scroll ------
    var steps = document.querySelector(".steps");
    var fill = document.createElement("span");
    var stepsTrack = document.createElement("span");
    stepsTrack.className = "steps-track";
    stepsTrack.setAttribute("aria-hidden", "true");
    steps.appendChild(stepsTrack);
    fill.className = "steps-fill";
    fill.setAttribute("aria-hidden", "true");
    steps.appendChild(fill);
    var stepItems = gsap.utils.toArray(".step");
    steps.classList.add("is-scrubbed");

    onEnter("#how-it-works", function(tl) {
        headIn(tl, document.getElementById("how-it-works"));
        // Circles stay solid while they rise (a see-through circle would show
        // the line behind it); only the words fade, then the line appears
        tl.from(stepItems, { y: 36, duration: 0.9, stagger: 0.12, ease: EASE_IN, clearProps: "transform" }, 0.2)
          .from(".step h3, .step p", { autoAlpha: 0, duration: 0.8, stagger: 0.06, ease: EASE_IN }, 0.25)
          .from([stepsTrack, fill], { autoAlpha: 0, duration: 0.6, ease: "power1.out" }, 0.7);
    });

    // Where each circle sits inside .steps (circles are each step's ::before)
    // (layout positions, so the entrance animation never knocks the line out)
    function circleBoxes() {
        return stepItems.map(function(step) {
            var size = parseFloat(getComputedStyle(step, "::before").width) || 64;
            return { x: step.offsetLeft, y: step.offsetTop, size: size };
        });
    }

    function drawSteps(p) {
        var boxes = circleBoxes();
        var first = boxes[0];
        var last = boxes[boxes.length - 1];
        var vertical = last.y > first.y + first.size; // phones: steps stacked
        var start = vertical ? first.y : first.x;
        var end = vertical ? last.y + last.size : last.x + last.size;
        var front = start + p * (end - start);

        // The grey track and violet line run behind the circles, from the
        // first circle to the last, so they only show between circles
        var box = vertical
            ? { left: first.x + first.size / 2 - 1, top: start, width: 2, height: end - start }
            : { left: start, top: first.y + first.size / 2 - 1, width: end - start, height: 2 };
        [stepsTrack, fill].forEach(function(line) {
            line.style.left = box.left + "px";
            line.style.top = box.top + "px";
            line.style.width = box.width + "px";
            line.style.height = box.height + "px";
        });
        fill.style.transformOrigin = vertical ? "50% 0" : "0 50%";
        fill.style.transform = vertical ? "scaleY(" + p + ")" : "scaleX(" + p + ")";

        boxes.forEach(function(box, i) {
            var from = vertical ? box.y : box.x;
            var c = Math.min(1, Math.max(0, (front - from) / box.size));
            stepItems[i].style.setProperty("--c", (c * 100).toFixed(1) + "%");
            stepItems[i].classList.toggle("is-lit", c > 0.5);
        });
    }

    drawSteps(0);
    ScrollTrigger.create({
        trigger: steps,
        start: "top 75%",
        end: "bottom 55%",
        scrub: 0.6,
        onUpdate: function(self) { drawSteps(self.progress); },
        onRefresh: function(self) { drawSteps(self.progress); }
    });

    // ---- About: the photo is wiped into view ------------------------------
    onEnter("#about", function(tl) {
        headIn(tl, document.getElementById("about"));
        tl.from(".about-text > p", { y: 24, autoAlpha: 0, duration: 0.8, stagger: 0.1, ease: EASE_IN }, 0.2)
          .fromTo(".about-photo", { clipPath: "inset(0 0 0 100%)" }, { clipPath: "inset(0 0 0 0%)", duration: 1.3, ease: "expo.inOut" }, 0.1)
          .from(".fact-list > div", { y: 20, autoAlpha: 0, duration: 0.7, stagger: 0.06, ease: EASE_IN }, 0.45);
    });

    // ---- Reviews -----------------------------------------------------------
    onEnter("#reviews", function(tl) {
        headIn(tl, document.getElementById("reviews"));
        tl.from(".reviews-stage", { y: 40, autoAlpha: 0, duration: 1, ease: EASE_IN }, 0.3)
          .from(".reviews-dots", { y: 16, autoAlpha: 0, duration: 0.7, ease: EASE_IN }, 0.5);
    });

    // ---- Areas -------------------------------------------------------------
    onEnter("#areas", function(tl) {
        headIn(tl, document.getElementById("areas"));
        tl.from(".area-list li", { y: 14, autoAlpha: 0, duration: 0.6, stagger: 0.035, ease: EASE_IN }, 0.25)
          .from(".base-card", { y: 40, autoAlpha: 0, duration: 0.9, ease: EASE_IN }, 0.35);
    });

    // ---- FAQ ---------------------------------------------------------------
    onEnter("#faq", function(tl) {
        headIn(tl, document.getElementById("faq"));
        tl.from(".faq-item", { y: 24, autoAlpha: 0, duration: 0.7, stagger: 0.06, ease: EASE_IN }, 0.15);
    });

    // ---- Call to action: the big logo turns into place --------------------
    onEnter("#contact", function(tl) {
        tl.from(".cta-panel", { y: 60, autoAlpha: 0, duration: 1, ease: EASE_IN }, 0)
          .from(".cta-logo", { rotation: -200, scale: 0.4, autoAlpha: 0, duration: 1.4, ease: "back.out(1.4)" }, 0.2)
          .from(".cta-text > *", { y: 24, autoAlpha: 0, duration: 0.8, stagger: 0.08, ease: EASE_IN }, 0.4)
          .from(".cta-buttons .btn", { y: 20, autoAlpha: 0, duration: 0.7, stagger: 0.08, ease: EASE_IN }, 0.55);
    });

    // ---- Footer ------------------------------------------------------------
    onEnter(".site-footer", function(tl) {
        tl.from(".footer-grid > div", { y: 30, autoAlpha: 0, duration: 0.8, stagger: 0.08, ease: EASE_IN }, 0);
    }, "top 90%");

    // ---- Smooth scrolling helpers -----------------------------------------
    if (lenis) {
        // Menu and footer links glide to their section
        document.addEventListener("click", function(e) {
            var link = e.target.closest('a[href^="#"]');
            if (!link || link.hasAttribute("data-open-widget")) return;
            var id = link.getAttribute("href");
            if (id.length < 2) return;
            var target = document.querySelector(id);
            if (!target) return;
            e.preventDefault();
            lenis.scrollTo(target, { offset: id === "#hero" ? 0 : -1 });
        });

        // Pause smooth scrolling while a popup, the menu or the quote form is open
        new MutationObserver(function() {
            var locked = document.body.style.overflow === "hidden" || document.body.classList.contains("widget-open");
            if (locked) lenis.stop(); else lenis.start();
        }).observe(document.body, { attributes: true, attributeFilter: ["style", "class"] });
    }

    // If this device can't keep up, drop the scrubbed parallax and keep the rest
    SC.watchFrameRate(function() {
        heavy.forEach(function(t) {
            if (t.scrollTrigger) t.scrollTrigger.kill();
            t.progress(0).kill();
        });
        heavy = [];
    });

    // Images and fonts change heights after load: re-measure once they arrive
    window.addEventListener("load", function() { ScrollTrigger.refresh(); });
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(function() { ScrollTrigger.refresh(); });
})();
