const header = document.querySelector("#header");
const intro = document.querySelector("#intro");
let introH = window.getComputedStyle(intro).getPropertyValue("height").match(/\d+/);
let scrollOffset = window.scrollY;

// Fixed Header
checkScroll(scrollOffset);

window.addEventListener("scroll", () => {
    checkScroll(scrollY);
})

function checkScroll(scrollOffset) {
    if (scrollOffset >= introH) {
        header.classList.add("fixed");
    } else {
        header.classList.remove("fixed");
    }
}

// Navigation link active class
const nav = document.querySelector("#nav");
const navAnchors = nav.querySelectorAll("a[href^='#']");
navAnchors.forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        navAnchors.forEach(anchor => anchor.classList.remove("active"));
        this.classList.add("active");
    });
});

// Menu nav toggle
const navToggle = document.querySelector("#nav-toggle");
navToggle.addEventListener("click", function (e) {
    e.preventDefault();

    this.classList.toggle("active");
    nav.classList.toggle("active");
});

// Collapse
const collapseElem = document.querySelectorAll("[data-collapse]");
const accordionContent = document.querySelectorAll(".accordion__content");
console.log(accordionContent[0].scrollHeight);
collapseElem.forEach(elem => {
    elem.addEventListener("click", function (e) {
        e.preventDefault();

        collapseElem.forEach(elem => {
            const blockId = elem.dataset.collapse;
            const block = document.querySelector(blockId);
            block.classList.remove("active");
        });

        const blockId = this.dataset.collapse;
        const block = document.querySelector(blockId);
        block.classList.toggle("active");

        const content = block.querySelector(".accordion__content");
        const contentH = content.scrollHeight;
        console.log(contentH);

        // if (block.classList.contains("active")) {
        //     content.style.maxHeight = `${contentH}px`;
        // } else {
        //     content.removeAttribute("style");
        // }
    });
});


