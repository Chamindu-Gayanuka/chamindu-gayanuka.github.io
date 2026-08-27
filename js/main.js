/* ==========================================================================
   main.js — Entry point / small global helpers
   Module load order (in index.html):
     animations.js -> navigation.js -> projects.js -> gallery.js -> contact.js -> main.js
   Each module is an IIFE and self-guards on missing elements.
   ========================================================================== */

(function () {
    "use strict";

    // Update footer year automatically
    const yearEl = document.getElementById("footer-year");
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    // Smooth-scroll for in-page anchors (respects reduced motion via CSS)
    document.querySelectorAll('a[href^="#"]').forEach((a) => {
        a.addEventListener("click", (e) => {
            const id = a.getAttribute("href");
            if (id.length <= 1) return;
            const target = document.querySelector(id);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({behavior: "smooth", block: "start"});
                history.replaceState(null, "", id);
            }
        });
    });

    // Final safety net: reveal anything still hidden after full load
    window.addEventListener("load", () => {
        if (window.__observeReveals) window.__observeReveals();
    });
})();