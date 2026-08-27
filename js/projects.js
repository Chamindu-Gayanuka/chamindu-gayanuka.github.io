/* ==========================================================================
   projects.js — Project data (source of truth), rendering, filtering, modal
   Two project types:
     - type "dev"  : software / full-stack projects (GitHub + optional demo)
     - type "uiux" : UI/UX design case studies (Figma prototype + case study)
   Links marked `null` are pending and render as a disabled "coming soon"
   state (never a broken link). Existing GitHub URLs are preserved exactly.
   ========================================================================== */

const PROJECTS = [
    /* ------------------ Full-Stack & Software Development ------------------ */
    {
        id: "rename-bot",
        type: "dev",
        title: "Digital Rename Bot",
        category: ["telegram", "automation", "python"],
        categoryLabel: "Telegram Bot",
        status: "completed",
        image: "assets/projects/rename-bot.png",
        short:
            "A Telegram bot that renames files with custom names while preserving metadata. Supports multiple formats.",
        description:
            "A Telegram automation bot that renames uploaded files to custom names while carefully preserving their original metadata. Built with Pyrogram and FFmpeg and deployed on Heroku, it handles multiple file formats directly inside Telegram.",
        highlights: [
            "Custom file renaming inside Telegram",
            "Preserves original file metadata",
            "Deployed on Heroku with FFmpeg processing",
        ],
        tech: ["Python", "Pyrogram", "FFmpeg", "Heroku"],
        github: "https://github.com/Chamindu-Gayanuka/Digital-Rename-Bot",
        demo: null,
    },
    {
        id: "ousl-credit-calculator",
        type: "dev",
        title: "OUSL BSE Credit Calculator",
        category: ["web", "tools"],
        categoryLabel: "Web App",
        status: "completed",
        image: "assets/projects/ousl-credit-calculator.png",
        short:
            "A web-based credit calculator for the OUSL BSE degree programme, built with vanilla HTML, CSS and JavaScript.",
        description:
            "A lightweight web tool that helps Open University of Sri Lanka BSE students calculate and track their course credits. Built with pure HTML, CSS and JavaScript for a fast, install-free experience in the browser.",
        highlights: [
            "Credit calculation for the BSE programme",
            "Runs entirely in the browser — no install",
            "Clean, responsive interface",
        ],
        tech: ["HTML", "CSS", "JavaScript"],
        github: "https://github.com/Chamindu-Gayanuka/OUSL-Credit-Calculator",
        demo: "https://ousl-credit-calculator.vercel.app/",
    },
    {
        id: "ape-kade-credit-book",
        type: "dev",
        title: "Ape Kade Credit Book",
        category: ["web", "fullstack"],
        categoryLabel: "Full-Stack (MERN)",
        status: "completed",
        image: "assets/projects/ape-kade-credit-book.png",
        short:
            "A full-stack credit bookkeeping app built on the MERN stack for tracking shop credit records.",
        description:
            "A full-stack MERN application for managing shop credit books — recording customer credit, payments and outstanding balances. Built with MongoDB, Express.js, React and Node.js for a complete client-to-server workflow.",
        highlights: [
            "Complete MERN full-stack architecture",
            "Track customer credit, payments & balances",
            "React front-end with a Node/Express API",
        ],
        tech: ["MongoDB", "Express.js", "React", "Node.js"],
        github: null,
        demo: "https://ape-kade-credit-book.vercel.app/",
    },
    {
        id: "calculator",
        type: "dev",
        title: "Simple Calculator",
        category: ["mobile"],
        categoryLabel: "Mobile App",
        status: "completed",
        image: "assets/projects/calculator.png",
        short:
            "A clean, minimal calculator built with React Native and TypeScript. Supports the core arithmetic operations on Android & iOS.",
        description:
            "A cross-platform mobile calculator crafted with React Native and TypeScript, focusing on a minimal interface and a smooth, responsive experience across both Android and iOS devices.",
        highlights: [
            "Built once, runs natively on Android & iOS",
            "Type-safe codebase with TypeScript",
            "Clean, minimal, responsive UI",
        ],
        tech: ["React Native", "TypeScript"],
        github: "https://github.com/Chamindu-Gayanuka/Simple-Calculator",
        demo: null,
    },
    {
        id: "subtitle-translator",
        type: "dev",
        title: "Subtitle Translator",
        category: ["python", "tools"],
        categoryLabel: "Python Desktop App",
        status: "completed",
        image: "assets/projects/subtitle-translator.png",
        short:
            "A Python Tkinter-based subtitle translator with a clean desktop interface.",
        description:
            "A desktop subtitle translation tool built with Python and Tkinter. It provides a clean interface for translating subtitle files between languages, making localized content more accessible.",
        highlights: [
            "Translates subtitle files between languages",
            "Desktop UI built with Tkinter",
            "Clean, accessible user experience",
        ],
        tech: ["Python", "Tkinter"],
        github: "https://github.com/Chamindu-Gayanuka/Subtitle-Translator",
        demo: null,
    },
    {
        id: "pptx-remover",
        type: "dev",
        title: "PPTX-Password Remover Automate",
        category: ["python", "automation", "tools"],
        categoryLabel: "Python GUI",
        status: "completed",
        image: "assets/projects/pptx-remover.png",
        short:
            "A Python Tkinter GUI for unlocking PowerPoint files by modifying and removing passwords.",
        description:
            "A desktop GUI application built in Python and Tkinter that unlocks protected PowerPoint files by modifying and removing their passwords — turning a tedious manual task into a one-click automated workflow.",
        highlights: [
            "One-click PowerPoint password removal",
            "Friendly Python Tkinter desktop GUI",
            "Automates a repetitive manual task",
        ],
        tech: ["Python", "Tkinter"],
        github: "https://github.com/Chamindu-Gayanuka/PPTX-Password-Remover-Automate",
        demo: null,
    },
    {
        id: "screenshot-bot",
        type: "dev",
        title: "Telegram Screenshot Bot",
        category: ["telegram", "automation", "python"],
        categoryLabel: "Telegram Bot",
        status: "completed",
        image: "assets/projects/screenshot-bot.png",
        short:
            "A powerful Telegram bot that extracts evenly spaced screenshots from videos.",
        description:
            "A powerful Telegram bot that automatically extracts evenly spaced screenshots from video files, giving users quick visual previews of any video. Built with the Telegram Bot API and FFmpeg, with MongoDB for data storage.",
        highlights: [
            "Extracts evenly spaced frames from videos",
            "FFmpeg processing with MongoDB storage",
            "Fully automated inside Telegram",
        ],
        tech: ["Python", "FFmpeg", "MongoDB", "Telegram Bot API"],
        github: "https://github.com/Chamindu-Gayanuka/Screenshot-Bot",
        demo: null,
    },
    {
        id: "fifo-page-replacement",
        type: "dev",
        title: "FIFO Page Replacement Simulator",
        category: ["python", "tools"],
        categoryLabel: "Python Desktop App",
        status: "completed",
        image: "assets/projects/fifo-page-replacement.png",
        short:
            "A desktop simulator that visualizes the FIFO page-replacement algorithm, built with Python and CustomTkinter.",
        description:
            "An educational desktop tool that simulates and visualizes the First-In-First-Out (FIFO) page-replacement algorithm used in operating systems. Built with Python and CustomTkinter for a clean, interactive learning experience.",
        highlights: [
            "Visualizes FIFO page replacement step by step",
            "Interactive desktop GUI with CustomTkinter",
            "Great for learning OS memory management",
        ],
        tech: ["Python", "CustomTkinter"],
        github: "https://github.com/Chamindu-Gayanuka/Page-Replacement-Algorithm",
        demo: null,
    },
    {
        id: "telethon-session",
        type: "dev",
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
        tech: ["Python", "Telethon"],
        github: "https://github.com/Chamindu-Gayanuka/Telethon-String-Session-Generator",
        demo: null,
    },
    {
        id: "pyrogram-session",
        type: "dev",
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
        tech: ["Python", "Pyrogram"],
        github: "https://github.com/Chamindu-Gayanuka/Pyrogram-String-Session-Generator",
        demo: null,
    },

    /* ------------------------- UI/UX Design & Prototyping ------------------------- */
    {
        id: "eduway",
        type: "uiux",
        title: "EduWay",
        category: ["uiux"],
        categoryLabel: "UI/UX Case Study",
        subtitle: "English Learning Platform",
        status: "completed",
        image: "assets/projects/uiux-eduway.png",
        short:
            "An English learning platform designed to make structured language practice engaging and accessible.",
        description:
            "EduWay is a UI/UX case study for an English learning platform. The design focuses on turning structured lessons, vocabulary practice and speaking exercises into an approachable, motivating experience for learners at different levels.",
        tech: ["Figma", "UI/UX", "Prototyping"],
        figma: "https://www.figma.com/proto/mT9d6ihGxru3j0Fgce9NOT/EduWay?node-id=8-14&p=f&t=czLteEeZqJllJyrP-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1",
        caseStudy: {
            research:
                "Explored the needs and pain points of English learners to shape the feature set, mapping motivations and common drop-off points into personas.",
            journey:
                "Mapped the learner journey from onboarding and placement through daily lessons, practice and progress review.",
            ia:
                "Structured the content into clear learning paths, lessons and practice modules so learners always know what comes next.",
            wireframes:
                "Low-fidelity wireframes established the core screens — home, lesson, practice and progress — before visual styling.",
            prototyping:
                "Built an interactive Figma prototype to validate navigation and lesson flow end to end.",
            usability:
                "Refined layouts and interactions based on usability feedback, simplifying navigation and clarifying calls to action.",
            visual:
                "A friendly, modern visual language with clear hierarchy, encouraging progress cues and accessible contrast.",
        },
    },
    {
        id: "edumate",
        type: "uiux",
        title: "EduMate",
        category: ["uiux"],
        categoryLabel: "UI/UX Case Study",
        subtitle: "Student Management System",
        status: "completed",
        image: "assets/projects/uiux-edumate.png",
        short:
            "A student management system designed to streamline records, attendance and academic tracking.",
        description:
            "EduMate is a UI/UX case study for a student management system. The design brings student records, attendance, and academic tracking into a single, clear dashboard for administrators and educators.",
        tech: ["Figma", "UI/UX", "Prototyping"],
        figma: "https://www.figma.com/proto/DamSF48uLbdhqJedIlF1XE/Design-Project?node-id=124-132&p=f&t=hqD5qtp8gqAsUjAd-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=124%3A132",
        caseStudy: {
            research:
                "Identified the daily tasks of administrators and educators, translating recurring workflows into personas and requirements.",
            journey:
                "Mapped journeys for managing students, recording attendance and reviewing academic performance.",
            ia:
                "Organised the system into logical modules — students, attendance, results and reports — for fast access.",
            wireframes:
                "Wireframed the dashboard and record views to prioritise the most frequent actions.",
            prototyping:
                "Created a clickable Figma prototype linking the dashboard, records and data-entry flows.",
            usability:
                "Iterated on table density, forms and navigation based on usability feedback to reduce friction.",
            visual:
                "A clean, data-friendly interface with strong hierarchy, readable tables and calm accent colours.",
        },
    },
    {
        id: "busbuddy",
        type: "uiux",
        title: "BusBuddy",
        category: ["uiux"],
        categoryLabel: "UI/UX Case Study",
        subtitle: "Real-Time Bus Tracking",
        status: "completed",
        image: "assets/projects/uiux-busbuddy.png",
        short:
            "A real-time bus tracking app designed to make commuting predictable and stress-free.",
        description:
            "BusBuddy is a UI/UX case study for a real-time bus tracking app. The design helps commuters find routes, track buses live on a map and plan trips with reliable arrival estimates.",
        tech: ["Figma", "UI/UX", "Prototyping"],
        figma: "https://www.figma.com/proto/lqy1l3wBTjc4tC0nO1Enop/BusBuddy?node-id=13-53&p=f&t=pBZIGAUHkBlhPzxZ-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=13%3A79&show-proto-sidebar=1",
        caseStudy: {
            research:
                "Studied commuter frustrations around uncertain wait times, capturing key needs into personas.",
            journey:
                "Mapped the trip journey from searching a route to boarding, tracking and arrival.",
            ia:
                "Prioritised map, routes, stops and ETAs so the most useful information is always one tap away.",
            wireframes:
                "Wireframes explored the map-first layout and route/stop detail screens.",
            prototyping:
                "Prototyped the live-tracking and route-search flows in Figma for realistic testing.",
            usability:
                "Tuned map interactions and information density from usability feedback for quick glanceability.",
            visual:
                "A confident, map-centric visual style with clear route colours and legible status cards.",
        },
    },
    {
        id: "carepill",
        type: "uiux",
        title: "CarePill",
        category: ["uiux"],
        categoryLabel: "UI/UX Case Study",
        subtitle: "Caregiving & Medication Reminder",
        status: "completed",
        image: "assets/projects/uiux-carepill.png",
        short:
            "A caregiving and medication reminder app designed to keep patients and caregivers in sync.",
        description:
            "CarePill is a UI/UX case study for a caregiving and medication reminder app. The design helps patients and their caregivers manage schedules, track doses and stay coordinated with gentle, timely reminders.",
        tech: ["Figma", "UI/UX", "Prototyping"],
        figma: "https://www.figma.com/proto/2IYMQNHDBiUn95zvh2oHgu/CarePill?node-id=18-197&p=f&t=yGTcJzYKpS66ws2w-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1",
        caseStudy: {
            research:
                "Explored the needs of patients and caregivers around adherence and coordination, shaping distinct personas.",
            journey:
                "Mapped journeys for setting up medications, receiving reminders and sharing status with a caregiver.",
            ia:
                "Structured schedules, reminders and caregiver views so critical actions are immediate and clear.",
            wireframes:
                "Wireframed the schedule timeline, reminder cards and caregiver dashboard.",
            prototyping:
                "Prototyped reminder and dose-tracking flows in Figma to validate the daily routine.",
            usability:
                "Simplified interactions and increased clarity based on usability feedback, mindful of accessibility.",
            visual:
                "A warm, reassuring visual language with high legibility and calm, caring accents.",
        },
    },
    {
        id: "adalanka",
        type: "uiux",
        title: "AdaLanka",
        category: ["uiux"],
        categoryLabel: "UI/UX Case Study",
        subtitle: "News Platform",
        status: "completed",
        image: "assets/projects/uiux-adalanka.png",
        short:
            "A news platform designed for fast, readable and well-organised access to the latest stories.",
        description:
            "AdaLanka is a UI/UX case study for a news platform. The design focuses on readability, clear categorisation and a fast path to the stories that matter, across web and mobile.",
        tech: ["Figma", "UI/UX", "Prototyping"],
        figma: "https://www.figma.com/proto/HnrehUeq7t9a443qLRXkOO/adaLanka?node-id=58-284&t=vSf5r9FmzDO9EogU-1&scaling=scale-down-width&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=58%3A284&show-proto-sidebar=1",
        caseStudy: {
            research:
                "Looked at how readers scan and consume news, distilling behaviours into personas and content priorities.",
            journey:
                "Mapped journeys from headline discovery to reading, categories and saved stories.",
            ia:
                "Organised content into clear categories and a scannable feed with a strong featured hierarchy.",
            wireframes:
                "Wireframed the home feed, category views and article reading experience.",
            prototyping:
                "Built a Figma prototype connecting the feed, categories and article screens.",
            usability:
                "Refined typography, spacing and navigation from usability feedback for comfortable reading.",
            visual:
                "An editorial, readable visual system with clear typographic hierarchy and restrained accents.",
        },
    },
];

(function () {
    "use strict";

    const grid = document.getElementById("project-grid");
    const emptyState = document.getElementById("projects-empty");
    if (!grid) return;

    /* ---------- Helpers ---------- */
    function badgeHTML(tech) {
        return tech.map((t) => `<span class="tech-badge">${t}</span>`).join("");
    }

    function primaryLinkHTML(p) {
        // Card icon-links row (before the Case Study button)
        if (p.type === "uiux") {
            if (p.figma) {
                return `<a class="link-icon" href="${p.figma}" target="_blank" rel="noopener" aria-label="Open ${p.title} Figma prototype" title="Figma Prototype"><i class="fa-brands fa-figma"></i></a>`;
            }
            return `<span class="link-icon disabled" aria-disabled="true" title="Prototype link coming soon"><i class="fa-brands fa-figma"></i></span>`;
        }
        // dev
        let html = "";
        if (p.github) {
            html += `<a class="link-icon" href="${p.github}" target="_blank" rel="noopener" aria-label="View ${p.title} on GitHub" title="GitHub"><i class="fa-brands fa-github"></i></a>`;
        } else if (p.linkPending) {
            html += `<span class="link-icon disabled" aria-disabled="true" title="Repository link coming soon"><i class="fa-brands fa-github"></i></span>`;
        }
        if (p.demo) {
            html += `<a class="link-icon" href="${p.demo}" target="_blank" rel="noopener" aria-label="Live demo of ${p.title}" title="Live Demo"><i class="fa-solid fa-arrow-up-right-from-square"></i></a>`;
        }
        return html;
    }

    function cardHTML(p) {
        const statusLabel = p.status === "ongoing" ? "Ongoing" : "Completed";
        const caseLabel = p.type === "uiux" ? "Case Study" : "Case Study";
        const titleLine = p.subtitle
            ? `<h3>${p.title}</h3><span class="project-subtitle">${p.subtitle}</span>`
            : `<h3>${p.title}</h3>`;
        return `
      <article class="project-card reveal" data-category="${p.category.join(" ")}" data-id="${p.id}">
        <div class="project-thumb">
          <span class="project-status ${p.status}"><span class="d"></span>${statusLabel}</span>
          <span class="project-category-tag">${p.categoryLabel}</span>
          <img src="${p.image}" alt="Cover artwork for ${p.title}" loading="lazy" decoding="async">
        </div>
        <div class="project-body">
          ${titleLine}
          <p>${p.short}</p>
          <div class="project-badges">${badgeHTML(p.tech)}</div>
          <div class="project-actions">
            ${primaryLinkHTML(p)}
            <button class="case-btn" data-open="${p.id}" aria-haspopup="dialog">
              ${caseLabel} <i class="fa-solid fa-arrow-right"></i>
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

    function devModalHTML(p) {
        const statusLabel = p.status === "ongoing" ? "Ongoing" : "Completed";
        // Live demo button: primary if there's no GitHub repo, otherwise a ghost secondary.
        const demoBtn = p.demo
            ? `<a class="btn ${p.github ? "btn-ghost" : "btn-primary"}" href="${p.demo}" target="_blank" rel="noopener"><i class="fa-solid fa-arrow-up-right-from-square"></i> Live Demo</a>`
            : "";
        let githubBtn = "";
        if (p.github) {
            githubBtn = `<a class="btn btn-primary" href="${p.github}" target="_blank" rel="noopener"><i class="fa-brands fa-github"></i> View on GitHub</a>`;
        } else if (p.linkPending) {
            githubBtn = `<span class="btn btn-ghost is-disabled" aria-disabled="true"><i class="fa-brands fa-github"></i> Repository coming soon</span>`;
        }
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
          ${githubBtn}
          ${demoBtn}
        </div>
      </div>`;
    }

    function uiuxModalHTML(p) {
        const cs = p.caseStudy || {};
        const steps = [
            ["fa-magnifying-glass-chart", "User Research & Personas", cs.research],
            ["fa-route", "User Journeys", cs.journey],
            ["fa-sitemap", "Information Architecture", cs.ia],
            ["fa-pen-ruler", "Wireframes", cs.wireframes],
            ["fa-vector-square", "Prototyping", cs.prototyping],
            ["fa-comments", "Usability Feedback", cs.usability],
            ["fa-palette", "Visual Design", cs.visual],
        ].filter((s) => s[2]);
        const figmaBtn = p.figma
            ? `<a class="btn btn-primary" href="${p.figma}" target="_blank" rel="noopener"><i class="fa-brands fa-figma"></i> View Figma Prototype</a>`
            : `<span class="btn btn-ghost is-disabled" aria-disabled="true"><i class="fa-brands fa-figma"></i> Prototype coming soon</span>`;
        return `
      <div class="modal-hero">
        <img src="${p.image}" alt="UI/UX design mockup for ${p.title}">
      </div>
      <div class="modal-content">
        <span class="modal-cat">${p.categoryLabel}${p.subtitle ? " · " + p.subtitle : ""}</span>
        <h2 id="modal-title">${p.title}</h2>
        <p class="modal-desc">${p.description}</p>
        <p class="modal-section-label">Design Process</p>
        <div class="casestudy-steps">
          ${steps
            .map(
                (s) => `
            <div class="cs-step">
              <div class="cs-icon"><i class="fa-solid ${s[0]}"></i></div>
              <div class="cs-text"><h4>${s[1]}</h4><p>${s[2]}</p></div>
            </div>`
            )
            .join("")}
        </div>
        <p class="modal-section-label">Tools</p>
        <div class="modal-badges">${badgeHTML(p.tech)}</div>
        <div class="modal-actions">
          ${figmaBtn}
        </div>
      </div>`;
    }

    function openModal(id) {
        const p = PROJECTS.find((x) => x.id === id);
        if (!p || !modal || !modalBody) return;
        lastFocused = document.activeElement;
        modalBody.innerHTML = p.type === "uiux" ? uiuxModalHTML(p) : devModalHTML(p);
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