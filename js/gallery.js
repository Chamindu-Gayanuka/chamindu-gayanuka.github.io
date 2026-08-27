/* ==========================================================================
   gallery.js — Masonry gallery rendering, filters, lightbox
   Real generated visuals + clearly-marked placeholders for certificates/events.
   ========================================================================== */

const GALLERY_ITEMS = [
    {
        src: "assets/gallery/uiux-dashboard.png",
        category: "uiux",
        categoryLabel: "UI/UX Design",
        title: "Dark Analytics Dashboard Concept",
    },
    {
        src: "assets/gallery/uiux-mobile.png",
        category: "uiux",
        categoryLabel: "UI/UX Design",
        title: "Mobile App UI Exploration",
    },
    {
        src: "assets/projects/calculator.png",
        category: "screenshots",
        categoryLabel: "Project Screenshot",
        title: "Simple Calculator — Cover",
    },
    {
        src: "assets/projects/subtitle-translator.png",
        category: "screenshots",
        categoryLabel: "Project Screenshot",
        title: "Subtitle Translator — Cover",
    },
    {
        src: "assets/projects/umz-filter-bot.png",
        category: "screenshots",
        categoryLabel: "Project Screenshot",
        title: "UMZ Filter Bot — Cover",
    },
    {
        src: "assets/projects/screenshot-bot.png",
        category: "dev",
        categoryLabel: "Development",
        title: "Screenshot Bot — Concept Art",
    },
    {
        src: "assets/projects/pptx-remover.png",
        category: "dev",
        categoryLabel: "Development",
        title: "PPTX Remover — Concept Art",
    },
    {
        src: "assets/projects/telethon.png",
        category: "dev",
        categoryLabel: "Development",
        title: "Session Generator — Concept Art",
    },
];

// Placeholder tiles (no real files yet) — user will replace with real assets.
const GALLERY_PLACEHOLDERS = [
    {
        category: "certificates",
        icon: "fa-award",
        title: "Certificate",
        note: "Add your certificates to assets/certificates/",
    },
    {
        category: "certificates",
        icon: "fa-certificate",
        title: "Achievement",
        note: "Drop an image into the gallery data to display it here",
    },
    {
        category: "events",
        icon: "fa-calendar-star",
        title: "Event Photo",
        note: "Add event photos to assets/gallery/",
    },
];

(function () {
    "use strict";

    const masonry = document.getElementById("gallery-masonry");
    if (!masonry) return;

    function itemHTML(item, index) {
        return `
      <figure class="gallery-item reveal" data-category="${item.category}" data-index="${index}" tabindex="0" role="button" aria-label="Open ${item.title} in lightbox">
        <img src="${item.src}" alt="${item.title}" loading="lazy" decoding="async">
        <figcaption class="gallery-overlay">
          <span class="g-zoom"><i class="fa-solid fa-expand"></i></span>
          <span class="g-cat">${item.categoryLabel}</span>
          <span class="g-title">${item.title}</span>
        </figcaption>
      </figure>`;
    }

    function placeholderHTML(ph) {
        return `
      <div class="gallery-item placeholder reveal" data-category="${ph.category}">
        <div class="gallery-ph">
          <i class="fa-solid ${ph.icon}"></i>
          <span class="ph-title">${ph.title}</span>
          <span class="ph-note">${ph.note}</span>
        </div>
      </div>`;
    }

    masonry.innerHTML =
        GALLERY_ITEMS.map(itemHTML).join("") +
        GALLERY_PLACEHOLDERS.map(placeholderHTML).join("");

    /* ---------- Filters ---------- */
    const filterBar = document.getElementById("gallery-filters");
    const items = Array.from(masonry.querySelectorAll(".gallery-item"));

    if (filterBar) {
        filterBar.addEventListener("click", (e) => {
            const btn = e.target.closest(".filter-btn");
            if (!btn) return;
            const filter = btn.getAttribute("data-filter");
            filterBar.querySelectorAll(".filter-btn").forEach((b) => {
                b.classList.remove("active");
                b.setAttribute("aria-pressed", "false");
            });
            btn.classList.add("active");
            btn.setAttribute("aria-pressed", "true");
            items.forEach((it) => {
                const match = filter === "all" || it.getAttribute("data-category") === filter;
                it.classList.toggle("hide", !match);
            });
        });
    }

    /* ---------- Lightbox ---------- */
    const lb = document.getElementById("lightbox");
    const lbImg = document.getElementById("lightbox-img");
    const lbCat = document.getElementById("lightbox-cat");
    const lbTitle = document.getElementById("lightbox-title");
    const lbCounter = document.getElementById("lightbox-counter");
    let currentIndex = 0;
    let lastFocused = null;

    function show(index) {
        if (index < 0) index = GALLERY_ITEMS.length - 1;
        if (index >= GALLERY_ITEMS.length) index = 0;
        currentIndex = index;
        const item = GALLERY_ITEMS[index];
        lbImg.src = item.src;
        lbImg.alt = item.title;
        lbCat.textContent = item.categoryLabel;
        lbTitle.textContent = item.title;
        lbCounter.textContent = `${index + 1} / ${GALLERY_ITEMS.length}`;
    }

    function openLightbox(index) {
        if (!lb) return;
        lastFocused = document.activeElement;
        show(index);
        lb.classList.add("open");
        lb.setAttribute("aria-hidden", "false");
        document.body.style.overflow = "hidden";
        const closeBtn = lb.querySelector(".lb-close");
        if (closeBtn) closeBtn.focus();
    }

    function closeLightbox() {
        if (!lb) return;
        lb.classList.remove("open");
        lb.setAttribute("aria-hidden", "true");
        document.body.style.overflow = "";
        if (document.fullscreenElement) document.exitFullscreen().catch(() => {
        });
        if (lastFocused) lastFocused.focus();
    }

    // Open only real (non-placeholder) items; map DOM index to GALLERY_ITEMS index
    masonry.addEventListener("click", (e) => {
        const fig = e.target.closest(".gallery-item:not(.placeholder)");
        if (!fig) return;
        openLightbox(parseInt(fig.getAttribute("data-index"), 10));
    });
    masonry.addEventListener("keydown", (e) => {
        const fig = e.target.closest(".gallery-item:not(.placeholder)");
        if (!fig) return;
        if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            openLightbox(parseInt(fig.getAttribute("data-index"), 10));
        }
    });

    if (lb) {
        lb.addEventListener("click", (e) => {
            if (e.target.closest("[data-lb-close]")) return closeLightbox();
            if (e.target.closest("[data-lb-prev]")) return show(currentIndex - 1);
            if (e.target.closest("[data-lb-next]")) return show(currentIndex + 1);
            if (e.target.closest("[data-lb-fullscreen]")) {
                const fig = document.getElementById("lightbox-figure");
                if (!document.fullscreenElement) {
                    (fig.requestFullscreen || fig.webkitRequestFullscreen || function () {
                    }).call(fig);
                } else {
                    document.exitFullscreen().catch(() => {
                    });
                }
                return;
            }
        });

        document.addEventListener("keydown", (e) => {
            if (!lb.classList.contains("open")) return;
            if (e.key === "Escape") closeLightbox();
            else if (e.key === "ArrowLeft") show(currentIndex - 1);
            else if (e.key === "ArrowRight") show(currentIndex + 1);
        });
    }

    if (window.__observeReveals) window.__observeReveals();
})();