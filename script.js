/* =========================
   PRELOADER
========================= */

window.addEventListener("load", () => {

    const preloader = document.getElementById("preloader");

    setTimeout(() => {

        preloader.style.opacity = "0";

        setTimeout(() => {
            preloader.style.display = "none";
        }, 500);

    }, 700);

});


/* =========================
   MOBILE MENU
========================= */

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

    const icon = menuBtn.querySelector("i");

    if (navLinks.classList.contains("active")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");
    } else {
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
    }

});


/* Close mobile menu */

document.querySelectorAll(".nav-link").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

        const icon = menuBtn.querySelector("i");

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    });

});


/* =========================
   TYPING ANIMATION
========================= */

const typingElement = document.getElementById("typing");

const words = [
    "Full Stack Developer",
    "Python Developer",
    "Django Developer",
    "Web Developer"
];

let wordIndex = 0;
let characterIndex = 0;
let deleting = false;

function typeEffect() {

    const currentWord = words[wordIndex];

    if (!deleting) {

        typingElement.textContent =
            currentWord.substring(0, characterIndex + 1);

        characterIndex++;

        if (characterIndex === currentWord.length) {

            deleting = true;

            setTimeout(typeEffect, 1500);

            return;
        }

    } else {

        typingElement.textContent =
            currentWord.substring(0, characterIndex - 1);

        characterIndex--;

        if (characterIndex === 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex === words.length) {
                wordIndex = 0;
            }

        }

    }

    setTimeout(
        typeEffect,
        deleting ? 50 : 100
    );
}

typeEffect();


/* =========================
   ACTIVE NAVIGATION
========================= */

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            current = section.getAttribute("id");

        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") === "#" + current
        ) {
            link.classList.add("active");
        }

    });

});


/* =========================
   SKILL PROGRESS
========================= */

const progressBars =
    document.querySelectorAll(".progress-bar");

const skillsSection =
    document.querySelector("#skills");

let skillsAnimated = false;

window.addEventListener("scroll", () => {

    const sectionPosition =
        skillsSection.getBoundingClientRect().top;

    if (
        sectionPosition < window.innerHeight - 100 &&
        !skillsAnimated
    ) {

        progressBars.forEach(bar => {

            const width =
                bar.getAttribute("data-width");

            bar.style.width = width;

        });

        skillsAnimated = true;

    }

});


/* =========================
   SCROLL TOP
========================= */

const scrollTop =
    document.getElementById("scrollTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        scrollTop.classList.add("show");

    } else {

        scrollTop.classList.remove("show");

    }

});

scrollTop.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


/* =========================
   CONTACT FORM
========================= */

const contactForm =
    document.getElementById("contactForm");

contactForm.addEventListener("submit", (event) => {

    event.preventDefault();

    const name =
        document.getElementById("name").value;

    alert(
        `Thank you ${name}! Your message has been received.`
    );

    contactForm.reset();

});