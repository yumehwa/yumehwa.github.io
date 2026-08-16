document.addEventListener("DOMContentLoaded", () => {
    const progress = document.querySelector(".service-progress");
    const topButton = document.querySelector(".service-top");
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const reveals = document.querySelectorAll(".reveal");
    const chapters = Array.from(document.querySelectorAll(".service-chapter"));
    const serviceLinks = Array.from(document.querySelectorAll("[data-service-link]"));
    const visuals = Array.from(document.querySelectorAll("[data-service-visual]"));
    const catalogRailNav = document.querySelector(".catalog-rail nav");

    const revealObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;
                entry.target.classList.add("is-visible");
                revealObserver.unobserve(entry.target);
            });
        },
        { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );

    reveals.forEach((element) => {
        if (reduceMotion.matches) {
            element.classList.add("is-visible");
            return;
        }
        revealObserver.observe(element);
    });

    function setActiveService(serviceName) {
        let activeRailLink = null;

        serviceLinks.forEach((link) => {
            const isActive = link.dataset.serviceLink === serviceName;
            link.classList.toggle("is-active", isActive);

            if (isActive && link.closest(".catalog-rail")) {
                activeRailLink = link;
            }
        });

        visuals.forEach((visual) => {
            visual.classList.toggle("is-active", visual.dataset.serviceVisual === serviceName);
        });

        if (catalogRailNav && activeRailLink && window.innerWidth <= 720) {
            const targetLeft =
                activeRailLink.offsetLeft -
                (catalogRailNav.clientWidth - activeRailLink.offsetWidth) / 2;

            catalogRailNav.scrollTo({
                left: Math.max(0, targetLeft),
                behavior: reduceMotion.matches ? "auto" : "smooth",
            });
        }
    }

    const chapterObserver = new IntersectionObserver(
        (entries) => {
            const visibleEntry = entries
                .filter((entry) => entry.isIntersecting)
                .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

            if (visibleEntry) {
                setActiveService(visibleEntry.target.dataset.service);
            }
        },
        { threshold: [0.25, 0.45, 0.65], rootMargin: "-18% 0px -38% 0px" }
    );

    chapters.forEach((chapter) => chapterObserver.observe(chapter));

    document.querySelectorAll("[data-glare]").forEach((card) => {
        card.addEventListener("pointermove", (event) => {
            const rect = card.getBoundingClientRect();
            const x = ((event.clientX - rect.left) / rect.width) * 100;
            const y = ((event.clientY - rect.top) / rect.height) * 100;
            card.style.setProperty("--glare-x", `${x.toFixed(1)}%`);
            card.style.setProperty("--glare-y", `${y.toFixed(1)}%`);
        });

        card.addEventListener("pointerleave", () => {
            card.style.setProperty("--glare-x", "50%");
            card.style.setProperty("--glare-y", "50%");
        });
    });

    function updatePageState() {
        const scrollable = document.documentElement.scrollHeight - window.innerHeight;
        const scrollRatio = scrollable > 0 ? window.scrollY / scrollable : 0;

        if (progress) {
            progress.style.width = `${Math.min(100, scrollRatio * 100)}%`;
        }

        if (topButton) {
            topButton.classList.toggle("is-visible", window.scrollY > window.innerHeight * 0.7);
        }
    }

    window.addEventListener("scroll", updatePageState, { passive: true });
    updatePageState();

    if (topButton) {
        topButton.addEventListener("click", () => {
            window.scrollTo({ top: 0, behavior: reduceMotion.matches ? "auto" : "smooth" });
        });
    }
});
