/* ==========================================================================
   projects.js — Project data (source of truth), rendering, filtering, modal
   All data derived ONLY from Chamindu's real existing portfolio.
   ========================================================================== */

const PROJECTS = [
    {
        id: "calculator",
        title: "Simple Calculator",
        category: ["mobile"],
        categoryLabel: "Mobile App",
        status: "completed",
        image: "assets/projects/calculator.png",
        short:
            "A clean, minimal calculator built with React Native. Supports addition, subtraction, multiplication and division on Android & iOS.",
        description:
            "A cross-platform mobile calculator crafted with React Native, focusing on a minimal interface and a smooth, responsive experience across both Android and iOS devices.",
        highlights: [
            "Built once, runs natively on Android & iOS",
            "Clean, minimal UI with responsive button layout",
            "Core arithmetic: add, subtract, multiply, divide",
        ],
        tech: ["React Native", "JavaScript", "Mobile"],
        github: "https://github.com/Chamindu-Gayanuka/Simple-Calculator",
        demo: null,
    },
    {
        id: "telethon-session",
        title: "Telethon String Session Generator",
        category: ["python", "telegram", "tools"],
        categoryLabel: "Python Tool",
        status: "completed",
        image: "assets/projects/telethon.png",
        short:
            "A secure Python script to generate Telegram String Sessions using the Telethon library.",
        description:
            "A secure command-line utility that generates Telegram String Sessions through the Telethon library, letting developers authenticate their Telegram clients safely and reuse sessions across bots and scripts.",
        highlights: [
            "Generates reusable Telegram String Sessions",
            "Built on the Telethon MTProto library",
            "Security-focused authentication flow",
        ],
        tech: ["Python", "Telethon", "Telegram API"],
        github: "https://github.com/Chamindu-Gayanuka/Telethon-String-Session-Generator",
        demo: null,
    },
    {
        id: "pyrogram-session",
        title: "Pyrogram String Session Generator",
        category: ["python", "telegram", "tools"],
        categoryLabel: "Python Tool",
        status: "completed",
        image: "assets/projects/pyrogram.png",
        short:
            "A simple Python script to securely generate Telegram String Sessions using the Pyrogram library.",
        description:
            "A lightweight Python tool that securely generates Telegram String Sessions with the Pyrogram framework — ideal for spinning up authenticated Telegram clients and bots quickly and safely.",
        highlights: [
            "Fast, secure session-string generation",
            "Powered by the Pyrogram framework",
            "Simple, script-first developer workflow",
        ],
        tech: ["Python", "Pyrogram", "Telegram API"],
        github: "https://github.com/Chamindu-Gayanuka/Pyrogram-String-Session-Generator",
        demo: null,
    },
    {
        id: "rename-bot",
        title: "Digital Rename Bot",
        category: ["telegram", "automation"],
        categoryLabel: "Telegram Bot",
        status: "completed",
        image: "assets/projects/rename-bot.png",
        short:
            "A Telegram bot that renames files with custom names while preserving metadata. Supports multiple formats.",
        description:
            "A Telegram automation bot that renames uploaded files to custom names while carefully preserving their original metadata. It handles multiple file formats, streamlining file organization directly inside Telegram.",
        highlights: [
            "Custom file renaming inside Telegram",
            "Preserves original file metadata",
            "Supports multiple file formats",
        ],
        tech: ["Python", "Telegram Bot", "Automation"],
        github: "https://github.com/Chamindu-Gayanuka/Digital-Rename-Bot",
        demo: null,
    },
    {
        id: "screenshot-bot",
        title: "Screenshot Bot",
        category: ["telegram", "automation"],
        categoryLabel: "Telegram Bot",
        status: "completed",
        image: "assets/projects/screenshot-bot.png",
        short:
            "A powerful Telegram bot that extracts evenly spaced screenshots from videos.",
        description:
            "A powerful Telegram bot that automatically extracts evenly spaced screenshots from video files, giving users quick visual previews of any video without watching it end to end.",
        highlights: [
            "Extracts evenly spaced frames from videos",
            "Fully automated inside Telegram",
            "Great for quick video previews",
        ],
        tech: ["Python", "Telegram Bot", "FFmpeg", "Automation"],
        github: "https://github.com/Chamindu-Gayanuka/Screenshot-Bot",
        demo: null,
    },
    {
        id: "pptx-remover",
        title: "PPTX-Password Remover Automate",
        category: ["python", "automation", "tools"],
        categoryLabel: "Python GUI",
        status: "completed",
        image: "assets/projects/pptx-remover.png",
        short:
            "A simple Python GUI for unlocking PowerPoint files by modifying and removing passwords.",
        description:
            "A desktop GUI application built in Python that unlocks protected PowerPoint files by modifying and removing their passwords — turning a tedious manual task into a one-click automated workflow.",
        highlights: [
            "One-click PowerPoint password removal",
            "Friendly Python desktop GUI",
            "Automates a repetitive manual task",
        ],
        tech: ["Python", "GUI", "Automation"],
        github: "https://github.com/Chamindu-Gayanuka/PPTX-Password-Remover-Automate",
        demo: null,
    },
    {
        id: "subtitle-translator",
        title: "Subtitle Translator",
        category: ["python", "tools"],
        categoryLabel: "Python Desktop App",
        status: "completed",
        image: "assets/projects/subtitle-translator.png",
        short:
            "A Python CustomTkinter-based subtitle translator with a clean desktop interface.",
        description:
            "A desktop subtitle translation tool built with Python and CustomTkinter. It provides a modern, clean interface for translating subtitle files between languages, making localized content more accessible.",
        highlights: [
            "Translates subtitle files between languages",
            "Modern desktop UI built with CustomTkinter",
            "Clean, accessible user experience",
        ],
        tech: ["Python", "CustomTkinter", "Desktop"],
        github: "https://github.com/Chamindu-Gayanuka/Subtitle-Translator",
        demo: null,
    },
    {
        id: "umz-filter-bot",
        title: "UMZ Filter Bot",
        category: ["telegram", "automation"],
        categoryLabel: "Telegram Bot",
        status: "ongoing",
        image: "assets/projects/umz-filter-bot.png",
        short:
            "A Telegram auto-filter bot with ultimate features. Currently in active development.",
        description:
            "An advanced Telegram auto-filter bot packed with powerful features, currently in active development. It's designed to automatically filter and serve content within Telegram groups and channels efficiently.",
        highlights: [
            "Advanced auto-filtering for Telegram",
            "Feature-rich bot architecture",
            "Actively evolving — work in progress",
        ],
        tech: ["Python", "Telegram Bot", "Automation"],
        github: "https://github.com/Chamindu-Gayanuka/UMZ-Filter-Bot",
        demo: null,
    },
];

(function () {
    "use strict";

    const grid = document.getElementById("project-grid");
    const emptyState = document.getElementById("projects-empty");
    if (!grid) return;

    /* ---------- Render cards ---------- */
    function badgeHTML(tech) {
        return tech.map((t) => `<span class="tech-badge">${t}</span>`).join("");
    }

    function cardHTML(p) {
        const statusLabel = p.status === "ongoing" ? "Ongoing" : "Completed";
        const demoBtn = p.demo
            ? `<a class="link-icon" href="${p.demo}" target="_blank" rel="noopener" aria-label="Live demo of ${p.title}" title="Live Demo"><i class="fa-solid fa-arrow-up-right-from-square"></i></a>`
            : "";
        return `
      <article class="project-card reveal" data-category="${p.category.join(" ")}" data-id="${p.id}">
        <div class="project-thumb">
          <span class="project-status ${p.status}"><span class="d"></span>${statusLabel}</span>
          <span class="project-category-tag">${p.categoryLabel}</span>
          <img src="${p.image}" alt="Cover artwork for ${p.title}" loading="lazy" decoding="async">
        </div>
        <div class="project-body">
          <h3>${p.title}</h3>
          <p>${p.short}</p>
          <div class="project-badges">${badgeHTML(p.tech)}</div>
          <div class="project-actions">
            <a class="link-icon" href="${p.github}" target="_blank" rel="noopener" aria-label="View ${p.title} on GitHub" title="GitHub"><i class="fa-brands fa-github"></i></a>
            ${demoBtn}
            <button class="case-btn" data-open="${p.id}" aria-haspopup="dialog">
              Case Study <i class="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        </div>
      </article>`;
    }

    grid.innerHTML = PROJECTS.map(cardHTML).join("");

    /* ---------- Filtering ---------- */
    const filterBar = document.getElementById("project-filters");
    const cards = Array.from(grid.querySelectorAll(".project-card"));

    function applyFilter(filter) {
        let visible = 0;
        cards.forEach((card) => {
            const cats = card.getAttribute("data-category").split(" ");
            const match = filter === "all" || cats.includes(filter);
            card.classList.add("filtering");
            setTimeout(() => {
                card.classList.toggle("hide", !match);
                if (match) card.classList.remove("filtering");
            }, 180);
            if (match) visible++;
        });
        if (emptyState) emptyState.classList.toggle("show", visible === 0);
    }

    if (filterBar) {
        filterBar.addEventListener("click", (e) => {
            const btn = e.target.closest(".filter-btn");
            if (!btn) return;
            filterBar.querySelectorAll(".filter-btn").forEach((b) => {
                b.classList.remove("active");
                b.setAttribute("aria-pressed", "false");
            });
            btn.classList.add("active");
            btn.setAttribute("aria-pressed", "true");
            applyFilter(btn.getAttribute("data-filter"));
        });
    }

    /* ---------- Modal ---------- */
    const modal = document.getElementById("project-modal");
    const modalBody = document.getElementById("modal-body");
    let lastFocused = null;

    function modalHTML(p) {
        const statusLabel = p.status === "ongoing" ? "Ongoing" : "Completed";
        const demoBtn = p.demo
            ? `<a class="btn btn-ghost" href="${p.demo}" target="_blank" rel="noopener"><i class="fa-solid fa-arrow-up-right-from-square"></i> Live Demo</a>`
            : "";
        return `
      <div class="modal-hero">
        <img src="${p.image}" alt="Cover artwork for ${p.title}">
      </div>
      <div class="modal-content">
        <span class="modal-cat">${p.categoryLabel} · ${statusLabel}</span>
        <h2 id="modal-title">${p.title}</h2>
        <p class="modal-desc">${p.description}</p>
        <p class="modal-section-label">Highlights</p>
        <ul class="modal-highlights">
          ${p.highlights.map((h) => `<li><i class="fa-solid fa-circle-check"></i><span>${h}</span></li>`).join("")}
        </ul>
        <p class="modal-section-label">Tech Stack</p>
        <div class="modal-badges">${badgeHTML(p.tech)}</div>
        <div class="modal-actions">
          <a class="btn btn-primary" href="${p.github}" target="_blank" rel="noopener"><i class="fa-brands fa-github"></i> View on GitHub</a>
          ${demoBtn}
        </div>
      </div>`;
    }

    function openModal(id) {
        const p = PROJECTS.find((x) => x.id === id);
        if (!p || !modal || !modalBody) return;
        lastFocused = document.activeElement;
        modalBody.innerHTML = modalHTML(p);
        modal.classList.add("open");
        modal.setAttribute("aria-hidden", "false");
        document.body.style.overflow = "hidden";
        const closeBtn = modal.querySelector(".modal-close");
        if (closeBtn) closeBtn.focus();
    }

    function closeModal() {
        if (!modal) return;
        modal.classList.remove("open");
        modal.setAttribute("aria-hidden", "true");
        document.body.style.overflow = "";
        if (lastFocused) lastFocused.focus();
    }

    grid.addEventListener("click", (e) => {
        const btn = e.target.closest("[data-open]");
        if (btn) openModal(btn.getAttribute("data-open"));
    });

    if (modal) {
        modal.addEventListener("click", (e) => {
            if (e.target.closest("[data-close-modal]")) closeModal();
        });
        document.addEventListener("keydown", (e) => {
            if (e.key === "Escape" && modal.classList.contains("open")) closeModal();
        });
    }

    // Re-observe newly injected reveal cards
    if (window.__observeReveals) window.__observeReveals();
})();