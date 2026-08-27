/* ==========================================================================
   navigation.js — Navbar scroll state, mobile menu, scrollspy, scroll-to-top
   ========================================================================== */

(function () {
    "use strict";

    const navbar = document.getElementById("navbar");
    const toggle = document.getElementById("menu-toggle");
    const navLinks = document.getElementById("nav-links");
    const navCta = document.getElementById("nav-cta");
    const backdrop = document.getElementById("nav-backdrop");
    const links = Array.from(document.querySelectorAll(".nav-links a"));
    const scrollTopBtn = document.getElementById("scrollTopBtn");

    /* ---------- Mobile menu ---------- */
    function setMenu(open) {
        if (!toggle) return;
        toggle.classList.toggle("open", open);
        toggle.setAttribute("aria-expanded", String(open));
        if (navLinks) navLinks.classList.toggle("open", open);
        if (navCta) navCta.classList.toggle("open", open);
        if (backdrop) backdrop.classList.toggle("show", open);
        document.body.style.overflow = open ? "hidden" : "";
    }

    if (toggle) {
        toggle.addEventListener("click", () =>
            setMenu(!toggle.classList.contains("open"))
        );
    }
    if (backdrop) backdrop.addEventListener("click", () => setMenu(false));
    links.forEach((l) => l.addEventListener("click", () => setMenu(false)));
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") setMenu(false);
    });
    window.addEventListener("resize", () => {
        if (window.innerWidth > 860) setMenu(false);
    });

    /* ---------- Navbar scrolled state + scroll-to-top ---------- */
    function onScroll() {
        const y = window.scrollY;
        if (navbar) navbar.classList.toggle("scrolled", y > 30);
        if (scrollTopBtn) scrollTopBtn.classList.toggle("show", y > 400);
    }

    window.addEventListener("scroll", onScroll, {passive: true});
    onScroll();

    if (scrollTopBtn) {
        scrollTopBtn.addEventListener("click", () =>
            window.scrollTo({top: 0, behavior: "smooth"})
        );
    }

    /* ---------- Scrollspy via IntersectionObserver ---------- */
    const sections = Array.from(document.querySelectorAll("section[id]"));
    const byId = {};
    links.forEach((l) => {
        const href = l.getAttribute("href");
        if (href && href.startsWith("#")) byId[href.slice(1)] = l;
    });

    if ("IntersectionObserver" in window && sections.length) {
        const spy = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const id = entry.target.getAttribute("id");
                        links.forEach((l) => l.classList.remove("active"));
                        if (byId[id]) byId[id].classList.add("active");
                    }
                });
            },
            {rootMargin: "-45% 0px -50% 0px", threshold: 0}
        );
        sections.forEach((s) => spy.observe(s));
    }
})();