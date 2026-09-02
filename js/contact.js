(function () {
    "use strict";

    // Initialize EmailJS (same public key as original portfolio)
    if (typeof emailjs !== "undefined") {
        try {
            emailjs.init({publicKey: "s2nWft-YMyzDzUmBK"});
        } catch (err) {
            /* EmailJS init failed silently — form will report on submit */
        }
    }

    const form = document.querySelector(".contact-form");
    if (!form) return;

    const statusEl = document.getElementById("form-status");
    const submitBtn = form.querySelector(".btnSubmit");
    const btnLabel = submitBtn ? submitBtn.innerHTML : "";

    function setStatus(msg, type) {
        if (!statusEl) return;
        statusEl.textContent = msg;
        statusEl.className = type || "";
    }

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        if (typeof emailjs === "undefined") {
            setStatus(
                "Email service is unavailable right now. Please email me directly.",
                "error"
            );
            return;
        }

        // Get current date/time in Sri Lanka
        const currentTime = new Date().toLocaleString("en-LK", {
            timeZone: "Asia/Colombo",
            dateStyle: "medium",
            timeStyle: "short"
        });

        const params = {
            name: document.getElementById("name").value.trim(),
            email: document.getElementById("email").value.trim(),
            message: document.getElementById("message").value.trim(),
            time: currentTime
        };

        if (submitBtn) {
            submitBtn.classList.add("loading");
            submitBtn.innerHTML =
                '<i class="fa-solid fa-spinner fa-spin"></i> Sending...';
        }

        setStatus("Sending your message...", "");

        emailjs
            .send(
                "service_4c98q07",
                "template_dqv7zdp",
                params
            )
            .then(() => {
                setStatus(
                    "Message sent successfully! I'll get back to you soon.",
                    "success"
                );

                form.reset();

                setTimeout(() => setStatus("", ""), 6000);
            })
            .catch((err) => {
                setStatus(
                    "Failed to send message. Please try again or email me directly.",
                    "error"
                );

                console.error("EmailJS error:", err);
            })
            .finally(() => {
                if (submitBtn) {
                    submitBtn.classList.remove("loading");
                    submitBtn.innerHTML = btnLabel;
                }
            });
    });
})();