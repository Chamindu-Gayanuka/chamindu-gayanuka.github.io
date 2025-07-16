// Initialize EmailJS
emailjs.init({
    publicKey: "s2nWft-YMyzDzUmBK",
});

// Typing Effect
const roles = ["Software Engineer.", "UI/UX Designer.", "Problem Solver.", "Creative Coder."];
const typingElement = document.querySelector('.typing');
let index = 0, charIndex = 0;

function type() {
    if (charIndex < roles[index].length) {
        typingElement.textContent += roles[index].charAt(charIndex);
        charIndex++;
        setTimeout(type, 100);
    } else {
        setTimeout(erase, 2000);
    }
}

function erase() {
    if (charIndex > 0) {
        typingElement.textContent = roles[index].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, 50);
    } else {
        index = (index + 1) % roles.length;
        setTimeout(type, 500);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    type();

    // Toggle Menu
    const menuIcon = document.getElementById('menu-icon');
    const navLinks = document.getElementById('nav-links');
    menuIcon.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Scroll and ScrollSpy
    const scrollTopBtn = document.getElementById("scrollTopBtn");

    window.addEventListener('scroll', () => {
        // Scroll Top Button Show/Hide
        if (window.scrollY > 100) {
            scrollTopBtn.style.display = "block";
        } else {
            scrollTopBtn.style.display = "none";
        }

        // Reveal on Scroll
        document.querySelectorAll('.scroll-hidden').forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100) {
                section.classList.add('scroll-show');
            }
        });

        // ScrollSpy Active Link
        const sections = document.querySelectorAll('section');
        const links = document.querySelectorAll('.nav-links li a');
        sections.forEach(sec => {
            const top = window.scrollY;
            const offset = sec.offsetTop - 150;
            const height = sec.offsetHeight;
            const id = sec.getAttribute('id');

            if (top >= offset && top < offset + height) {
                links.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === '#' + id) {
                        link.classList.add('active');
                    }
                });
            }
        });
    });

    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // EmailJS Contact Form
    const form = document.querySelector('.contact-form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const params = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            message: document.getElementById('message').value,
        };

        emailjs.send("service_4c98q07", "template_dqv7zdp", params)
            .then(() => {
                document.getElementById("form-status").textContent = "Email sent successfully!";
                form.reset();
                setTimeout(() => {
                    document.getElementById("form-status").textContent = "";
                }, 5000);
            })
            .catch(err => {
                document.getElementById("form-status").textContent = "Failed to send message.";
                console.error("EmailJS error:", err);
            });
    });
});