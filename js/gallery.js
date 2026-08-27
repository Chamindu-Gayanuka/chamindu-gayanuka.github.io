/* ==========================================================================
   gallery.js - Masonry gallery rendering, filters, lightbox
   Real achievements, certificates and event visuals + design/dev showcase.
   ========================================================================== */

const GALLERY_ITEMS = [
    /* ------------------------- Achievements ------------------------- */
    {
        src: "assets/certificates/achievement-codesignal-cs-fundamentals.png",
        category: "achievements",
        categoryLabel: "Achievement",
        title: "CodeSignal - Computer Science Fundamentals",
    },
    {
        src: "assets/certificates/achievement-php-programming-for-beginners.png",
        category: "achievements",
        categoryLabel: "Achievement",
        title: "CodeSignal - PHP Programming for Beginners",
    },

    /* ------------------------- Certificates ------------------------- */
    {
        src: "assets/certificates/certificate-frontend-aws.jpg",
        category: "certificates",
        categoryLabel: "Certificate",
        title: "Front-End Web Development (React & JavaScript) - AWS Community Builders",
    },
    {
        src: "assets/certificates/certificate-frontend-gdsc.jpg",
        category: "certificates",
        categoryLabel: "Certificate",
        title: "Front-End Web Development (React & JavaScript) - Google Developer Student Clubs",
    },
    {
        src: "assets/certificates/certificate-frontend-microsoft.jpg",
        category: "certificates",
        categoryLabel: "Certificate",
        title: "Front-End Web Development (React & JavaScript) - Microsoft Learn Student Ambassadors",
    },
    {
        src: "assets/certificates/certificate-frontend-devtown.jpg",
        category: "certificates",
        categoryLabel: "Certificate",
        title: "Front-End Web Development (React & JavaScript) - DevTown Bootcamp",
    },
    {
        src: "assets/certificates/certificate-backend-aws.jpg",
        category: "certificates",
        categoryLabel: "Certificate",
        title: "Back-End Web Development (Node.js & Express) - AWS Community Builders",
    },
    {
        src: "assets/certificates/certificate-backend-gdsc.jpg",
        category: "certificates",
        categoryLabel: "Certificate",
        title: "Back-End Web Development (Node.js & Express) - Google Developer Student Clubs",
    },
    {
        src: "assets/certificates/certificate-backend-microsoft.jpg",
        category: "certificates",
        categoryLabel: "Certificate",
        title: "Back-End Web Development (Node.js & Express) - Microsoft Learn Student Ambassadors",
    },
    {
        src: "assets/certificates/certificate-backend-devtown.jpg",
        category: "certificates",
        categoryLabel: "Certificate",
        title: "Back-End Web Development (Node.js & Express) - DevTown Bootcamp",
    },
    {
        src: "assets/certificates/certificate-devtown-community.jpg",
        category: "certificates",
        categoryLabel: "Certificate",
        title: "DevTown - Certificate of Appreciation (Community)",
    },
    {
        src: "assets/certificates/certificate-php-basics.png",
        category: "certificates",
        categoryLabel: "Certificate",
        title: "Introduction to PHP Basics - CodeSignal",
    },
    {
        src: "assets/certificates/certificate-php-conditionals.png",
        category: "certificates",
        categoryLabel: "Certificate",
        title: "Navigating Decisions with PHP Conditionals - CodeSignal",
    },
    {
        src: "assets/certificates/certificate-php-loops.png",
        category: "certificates",
        categoryLabel: "Certificate",
        title: "Iterating with Loops in PHP - CodeSignal",
    },
    {
        src: "assets/certificates/certificate-php-functions.png",
        category: "certificates",
        categoryLabel: "Certificate",
        title: "Efficient Programming with PHP Functions - CodeSignal",
    },
    {
        src: "assets/certificates/certificate-udemy-build-your-personal-website-using-chatgpt.png",
        category: "certificates",
        categoryLabel: "Certificate",
        title: "Build Your Personal Website Using ChatGPT - Udemy",
    },
    {
        src: "assets/certificates/certificate-udemy-windows-command-line-basics.png",
        category: "certificates",
        categoryLabel: "Certificate",
        title: "Windows Command Line Basics - Udemy",
    },
    {
        src: "assets/certificates/certificate-udemy-2024-r-programming-bootcamp-for-absolute-beginners.png",
        category: "certificates",
        categoryLabel: "Certificate",
        title: "2024 R Programming Bootcamp for Absolute Beginners - Udemy",
    },
    {
        src: "assets/certificates/certificate-udemy-sql-the-complete-introduction-to-sql-programming.png",
        category: "certificates",
        categoryLabel: "Certificate",
        title: "SQL - The Complete Introduction to SQL Programming - Udemy",
    },
    {
        src: "assets/certificates/certificate-udemy-web-development-wizardry-html-css-course-for-beginners.png",
        category: "certificates",
        categoryLabel: "Certificate",
        title: "Web Development Wizardry: HTML & CSS Course for Beginners - Udemy",
    },
    {
        src: "assets/certificates/certificate-udemy-javascript-practicals-crash-course.png",
        category: "certificates",
        categoryLabel: "Certificate",
        title: "Javascript Practicals Crash Course - Udemy",
    },
    {
        src: "assets/certificates/certificate-udemy-python-crash-course.png",
        category: "certificates",
        categoryLabel: "Certificate",
        title: "Python Crash Course - Udemy",
    },
    {
        src: "assets/certificates/certificate-sololearn-introduction-to-java.png",
        category: "certificates",
        categoryLabel: "Certificate",
        title: "Introduction to Java - SoloLearn",
    },
    {
        src: "assets/certificates/certificate-sololearn-introduction-to-c.png",
        category: "certificates",
        categoryLabel: "Certificate",
        title: "Introduction to C - SoloLearn",
    },
    {
        src: "assets/certificates/certificate-sololearn-introduction-to-python.png",
        category: "certificates",
        categoryLabel: "Certificate",
        title: "Introduction to Python - SoloLearn",
    },
    {
        src: "assets/certificates/certificate-sololearn-introduction-to-sql.png",
        category: "certificates",
        categoryLabel: "Certificate",
        title: "Introduction to SQL - SoloLearn",
    },

    /* ------------------------- Events ------------------------- */
    {
        src: "assets/gallery/event-jira-workshop.jpg",
        category: "events",
        categoryLabel: "Event",
        title: "Jira Workshop",
    },

    /* ------------------------- UI/UX Design ------------------------- */
    {
        src: "assets/projects/uiux-eduway.png",
        category: "uiux",
        categoryLabel: "UI/UX Design",
        title: "EduWay - English Learning Platform",
    },
    {
        src: "assets/projects/uiux-edumate.png",
        category: "uiux",
        categoryLabel: "UI/UX Design",
        title: "EduMate - Student Management System",
    },
    {
        src: "assets/projects/uiux-busbuddy.png",
        category: "uiux",
        categoryLabel: "UI/UX Design",
        title: "BusBuddy - Real-Time Bus Tracking",
    },
    {
        src: "assets/projects/uiux-carepill.png",
        category: "uiux",
        categoryLabel: "UI/UX Design",
        title: "CarePill - Caregiving & Medication Reminder",
    },
    {
        src: "assets/projects/uiux-adalanka.png",
        category: "uiux",
        categoryLabel: "UI/UX Design",
        title: "AdaLanka - News Platform",
    },

    /* ------------------------- Project Screenshots ------------------------- */
    {
        src: "assets/projects/calculator.png",
        category: "screenshots",
        categoryLabel: "Project Screenshot",
        title: "Simple Calculator - Cover",
    },
    {
        src: "assets/projects/subtitle-translator.png",
        category: "screenshots",
        categoryLabel: "Project Screenshot",
        title: "Subtitle Translator - Cover",
    },
    {
        src: "assets/projects/ape-kade-credit-book.png",
        category: "screenshots",
        categoryLabel: "Project Screenshot",
        title: "Ape Kade Credit Book - Cover",
    },
    {
        src: "assets/projects/ape-kade-credit-book-2.png",
        category: "screenshots",
        categoryLabel: "Project Screenshot",
        title: "Ape Kade Credit Book",
    },
    {
        src: "assets/projects/ape-kade-credit-book-3.png",
        category: "screenshots",
        categoryLabel: "Project Screenshot",
        title: "Ape Kade Credit Book",
    },

    /* ------------------------- Development ------------------------- */
    {
        src: "assets/projects/fifo-page-replacement.png",
        category: "dev",
        categoryLabel: "Development",
        title: "FIFO Page Replacement Simulator - Concept Art",
    },
    {
        src: "assets/projects/fifo-page-replacement-2.png",
        category: "dev",
        categoryLabel: "Development",
        title: "FIFO Page Replacement Simulator",
    },
    {
        src: "assets/projects/screenshot-bot.png",
        category: "dev",
        categoryLabel: "Development",
        title: "Telegram Screenshot Bot - Concept Art",
    },
    {
        src: "assets/projects/pptx-remover.png",
        category: "dev",
        categoryLabel: "Development",
        title: "PPTX Remover - Concept Art",
    },
    {
        src: "assets/projects/ousl-credit-calculator.png",
        category: "dev",
        categoryLabel: "Development",
        title: "OUSL BSE Credit Calculator - Concept Art",
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

    masonry.innerHTML = GALLERY_ITEMS.map(itemHTML).join("");

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

    masonry.addEventListener("click", (e) => {
        const fig = e.target.closest(".gallery-item");
        if (!fig) return;
        openLightbox(parseInt(fig.getAttribute("data-index"), 10));
    });
    masonry.addEventListener("keydown", (e) => {
        const fig = e.target.closest(".gallery-item");
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