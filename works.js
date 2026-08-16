document.addEventListener("DOMContentLoaded", () => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const progress = document.querySelector(".works-progress");
    const topButton = document.querySelector(".works-top");
    const cards = Array.from(document.querySelectorAll(".project-card"));
    const filters = Array.from(document.querySelectorAll("[data-filter]"));
    const dialog = document.querySelector(".project-dialog");
    const dialogImage = dialog?.querySelector(".dialog-media img");
    const dialogTitle = dialog?.querySelector(".dialog-copy h2");
    const dialogField = dialog?.querySelector(".dialog-copy > span");
    const dialogCount = dialog?.querySelector(".dialog-count");
    const dialogThumbnails = dialog?.querySelector(".dialog-thumbnails");
    const closeButton = dialog?.querySelector(".dialog-close");
    const previousButton = dialog?.querySelector("[data-dialog-prev]");
    const nextButton = dialog?.querySelector("[data-dialog-next]");
    let activeCard = null;
    let activeImages = [];
    let activeAlts = [];
    let activeImageIndex = 0;

    const revealObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;
                entry.target.classList.add("is-visible");
                revealObserver.unobserve(entry.target);
            });
        },
        { threshold: 0.1, rootMargin: "0px 0px -7% 0px" }
    );

    document.querySelectorAll(".reveal").forEach((element) => {
        if (reduceMotion.matches) {
            element.classList.add("is-visible");
        } else {
            revealObserver.observe(element);
        }
    });

    cards.forEach((card) => {
        card.addEventListener("pointermove", (event) => {
            const rect = card.getBoundingClientRect();
            const x = ((event.clientX - rect.left) / rect.width) * 100;
            const y = ((event.clientY - rect.top) / rect.height) * 100;
            card.style.setProperty("--glow-x", `${x.toFixed(1)}%`);
            card.style.setProperty("--glow-y", `${y.toFixed(1)}%`);
        });

        card.addEventListener("pointerleave", () => {
            card.style.setProperty("--glow-x", "50%");
            card.style.setProperty("--glow-y", "50%");
        });

        card.addEventListener("click", () => openProject(card));
    });

    filters.forEach((filter) => {
        filter.addEventListener("click", () => {
            const selected = filter.dataset.filter;

            filters.forEach((item) => {
                const isActive = item === filter;
                item.classList.toggle("is-active", isActive);
                item.setAttribute("aria-pressed", String(isActive));
            });

            cards.forEach((card) => {
                const categories = card.dataset.category.split(" ");
                card.hidden = selected !== "all" && !categories.includes(selected);
            });
        });
    });

    function visibleCards() {
        return cards.filter((card) => !card.hidden);
    }

    function openProject(card) {
        if (!dialog || !dialogImage || !dialogTitle || !dialogField) return;
        activeCard = card;
        activeImages = (card.dataset.images || card.dataset.image || "")
            .split("|")
            .map((item) => item.trim())
            .filter(Boolean);
        activeAlts = (card.dataset.alts || "")
            .split("|")
            .map((item) => item.trim());
        activeImageIndex = 0;
        dialogTitle.textContent = card.dataset.title;
        dialogField.textContent = card.dataset.field;
        renderDialogThumbnails();
        renderDialogImage();
        dialog.showModal();
    }

    function renderDialogThumbnails() {
        if (!dialogThumbnails || !activeCard) return;
        dialogThumbnails.replaceChildren();

        activeImages.forEach((src, index) => {
            const button = document.createElement("button");
            const image = document.createElement("img");

            button.type = "button";
            button.className = "dialog-thumbnail";
            button.setAttribute("aria-label", `${activeCard.dataset.title} 이미지 ${index + 1}`);
            button.setAttribute("aria-pressed", String(index === activeImageIndex));
            image.src = src;
            image.alt = activeAlts[index] || activeCard.dataset.title;

            button.append(image);
            button.addEventListener("click", () => {
                activeImageIndex = index;
                renderDialogImage();
            });

            dialogThumbnails.append(button);
        });
    }

    function renderDialogImage() {
        if (!dialogImage || !activeCard || activeImages.length === 0) return;
        dialogImage.src = activeImages[activeImageIndex];
        dialogImage.alt =
            activeAlts[activeImageIndex] ||
            activeCard.querySelector("img")?.alt ||
            activeCard.dataset.title;
        if (dialogCount) {
            dialogCount.textContent =
                activeImages.length > 1
                    ? `${activeImageIndex + 1} / ${activeImages.length}`
                    : "";
        }
        dialogThumbnails?.querySelectorAll(".dialog-thumbnail").forEach((thumbnail, index) => {
            thumbnail.classList.toggle("is-active", index === activeImageIndex);
            thumbnail.setAttribute("aria-pressed", String(index === activeImageIndex));
        });
    }

    function moveProject(direction) {
        if (activeImages.length > 1) {
            activeImageIndex = (activeImageIndex + direction + activeImages.length) % activeImages.length;
            renderDialogImage();
            return;
        }

        const available = visibleCards();
        const currentIndex = available.indexOf(activeCard);
        const nextIndex = (currentIndex + direction + available.length) % available.length;
        openProject(available[nextIndex]);
    }

    closeButton?.addEventListener("click", () => dialog.close());
    previousButton?.addEventListener("click", () => moveProject(-1));
    nextButton?.addEventListener("click", () => moveProject(1));
    dialog?.addEventListener("click", (event) => {
        if (event.target === dialog) dialog.close();
    });

    function updatePageState() {
        const scrollable = document.documentElement.scrollHeight - window.innerHeight;
        const ratio = scrollable > 0 ? window.scrollY / scrollable : 0;

        if (progress) progress.style.width = `${Math.min(100, ratio * 100)}%`;
        if (topButton) {
            topButton.classList.toggle("is-visible", window.scrollY > window.innerHeight * 0.75);
        }
    }

    window.addEventListener("scroll", updatePageState, { passive: true });
    updatePageState();

    topButton?.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: reduceMotion.matches ? "auto" : "smooth" });
    });
});
