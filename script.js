// Portfolio filter
const pills = document.querySelectorAll(".pill");
const tiles = document.querySelectorAll(".tile");

pills.forEach((p) => {
    p.addEventListener("click", () => {
        pills.forEach((x) => x.classList.remove("is-active"));
        p.classList.add("is-active");
        const f = p.dataset.filter;
        tiles.forEach((t) => {
            const cat = t.dataset.cat;
            t.style.display = f === "all" || f === cat ? "block" : "none";
        });
    });
});

// Testimonials slider
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
let idx = 0;

function show(i) {
    slides.forEach((s) => s.classList.remove("is-active"));
    dots.forEach((d) => d.classList.remove("is-active"));
    slides[i].classList.add("is-active");
    if (dots[i]) dots[i].classList.add("is-active");
}
show(idx);

document.querySelector(".next").addEventListener("click", () => {
    idx = (idx + 1) % slides.length;
    show(idx);
});
document.querySelector(".prev").addEventListener("click", () => {
    idx = (idx - 1 + slides.length) % slides.length;
    show(idx);
});

dots.forEach((d, i) => {
    d.addEventListener("click", () => {
        idx = i;
        show(idx);
    });
});

// Contact form char counter
const textarea = document.querySelector("textarea");
const counter = document.getElementById("charCount");
textarea.addEventListener("input", () => {
    counter.textContent = textarea.value.length;
});
