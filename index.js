// =========================
// MOBILE MENU TOGGLE
// =========================

function toggleMenu() {

    const menu = document.getElementById("navMenu");
    const openIcon = document.getElementById("openIcon");
    const closeIcon = document.getElementById("closeIcon");

    menu.classList.toggle("show");

    if (menu.classList.contains("show")) {
        openIcon.style.display = "none";
        closeIcon.style.display = "inline";
    } else {
        openIcon.style.display = "inline";
        closeIcon.style.display = "none";
    }
}


// =========================
// ACTIVE NAV LINK + CLOSE MENU
// =========================

const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(link => {

    link.addEventListener("click", function () {

        navLinks.forEach(item => item.classList.remove("active"));

        this.classList.add("active");

        // close mobile menu
        const menu = document.getElementById("navMenu");
        const openIcon = document.getElementById("openIcon");
        const closeIcon = document.getElementById("closeIcon");

        menu.classList.remove("show");
        openIcon.style.display = "inline";
        closeIcon.style.display = "none";
    });

});


// =========================
// SCROLL ACTIVE SECTION (SCROLL SPY)
// =========================

const sections = document.querySelectorAll("section");

let lastActive = "";

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 200;

        if (window.pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    if (current === lastActive) return;
    lastActive = current;

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});


// =========================
// CONTACT FORM
// =========================

const form = document.querySelector(".contact-form");

if (form) {

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        const inputs = form.querySelectorAll("input, textarea");

        let valid = true;

        inputs.forEach(input => {
            if (!input.value.trim()) {
                valid = false;
            }
        });

        if (!valid) {
            alert("❌ Please fill all fields");
            return;
        }

        alert("✅ Message Sent Successfully!");
        form.reset();

    });

}


// =========================
// SCROLL ANIMATION (INTERSECTION OBSERVER)
// =========================

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {
                entry.target.classList.add("show-animation");
            }

        });

    },
    {
        threshold: 0.2
    }
);


// ITEMS TO ANIMATE
const timelineItems = document.querySelectorAll(".timeline-item");
const valueCards = document.querySelectorAll(".value-card");
const aboutSection = document.querySelector(".about");

timelineItems.forEach(item => observer.observe(item));
valueCards.forEach(card => observer.observe(card));

if (aboutSection) {
    observer.observe(aboutSection);
}


// =========================
// HERO FLOAT / PARALLAX EFFECT
// =========================

const heroImage = document.querySelector(".hero-img");

if (heroImage) {

    window.addEventListener("mousemove", (e) => {

        const x = (window.innerWidth / 2 - e.pageX) / 40;
        const y = (window.innerHeight / 2 - e.pageY) / 40;

        heroImage.style.transform = `translate(${x}px, ${y}px)`;

    });

}


// =========================
// PAGE LOAD ANIMATION
// =========================

window.addEventListener("load", () => {
    document.body.classList.add("loaded");
});


// =========================
// AUTO YEAR UPDATE
// =========================

const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}