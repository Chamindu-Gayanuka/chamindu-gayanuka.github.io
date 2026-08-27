/* ==========================================================================
   animations.js — Typing effect + scroll reveal (IntersectionObserver)
   Respects prefers-reduced-motion.
   ========================================================================== */

(function () {
    "use strict";

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    /* ---------- Typing effect ---------- */
    const typingEl = document.querySelector(".typing");
    if (typingEl) {
        const roles = [
            "Software Engineer",
            "Developer",
            "UI/UX Designer",
            "Problem Solver",
            "Creative Coder",
        ];
        if (reduce) {
            typingEl.textContent = roles[0];
        } else {
            let ri = 0,
                ci = 0,
                deleting = false;

            function tick() {
                const word = roles[ri];
                if (!deleting) {
                    typingEl.textContent = word.slice(0, ci + 1);
                    ci++;
                    if (ci === word.length) {
                        deleting = true;
                        return setTimeout(tick, 1800);
                    }
                    return setTimeout(tick, 90);
                } else {
                    typingEl.textContent = word.slice(0, ci - 1);
                    ci--;
                    if (ci === 0) {
                        deleting = false;
                        ri = (ri + 1) % roles.length;
                        return setTimeout(tick, 400);
                    }
                    return setTimeout(tick, 45);
                }
            }

            tick();
        }
    }

    /* ---------- Scroll reveal ---------- */
    let observer = null;

    function observeReveals() {
        const els = document.querySelectorAll(".reveal:not(.in):not(.observed)");
        if (reduce) {
            els.forEach((el) => el.classList.add("in", "observed"));
            return;
        }
        if (!("IntersectionObserver" in window)) {
            els.forEach((el) => el.classList.add("in", "observed"));
            return;
        }
        if (!observer) {
            observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            entry.target.classList.add("in");
                            observer.unobserve(entry.target);
                        }
                    });
                },
                {rootMargin: "0px 0px -8% 0px", threshold: 0.08}
            );
        }
        els.forEach((el) => {
            el.classList.add("observed");
            observer.observe(el);
        });
    }

    // Expose so dynamically injected content (projects/gallery) can re-register
    window.__observeReveals = observeReveals;

    document.addEventListener("DOMContentLoaded", observeReveals);
    // Run immediately too (script loaded at end of body)
    observeReveals();
})();