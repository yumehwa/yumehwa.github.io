document.addEventListener("DOMContentLoaded", () => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const detailPageGalleries = {
        "ecommerce-detail": [
            {
                title: "Launch Promotion Content",
                description: "Content design for launch events and review promotions across online sales channels.",
                images: [
                    "images/works/ecommerce-content/launch-event-01.jpg",
                    "images/works/ecommerce-content/launch-event-02.jpg",
                ],
                alts: [
                    "Pet stroller launch purchase promotion",
                    "Pet stroller launch review promotion",
                ],
            },
            {
                title: "Capsule Coffee Machine Product Detail Page",
                description: "An e-commerce product detail page that organizes key features and usage information in a clear sequence.",
                images: [
                    "images/works/detail-pages/coffee-machine/coffee-machine-001.jpg",
                    "images/works/detail-pages/coffee-machine/coffee-machine-002.jpg",
                    "images/works/detail-pages/coffee-machine/coffee-machine-003.jpg",
                    "images/works/detail-pages/coffee-machine/coffee-machine-004.jpg",
                    "images/works/detail-pages/coffee-machine/coffee-machine-005.jpg",
                    "images/works/detail-pages/coffee-machine/coffee-machine-006.jpg",
                    "images/works/detail-pages/coffee-machine/coffee-machine-007.jpg",
                ],
                alts: [
                    "Capsule coffee machine product detail page hero visual",
                    "Capsule compatibility information design",
                    "Capsule coffee machine price and feature overview",
                    "Capsule coffee machine key feature overview",
                    "Capsule coffee machine water tank and extraction feature overview",
                    "Capsule coffee machine usage and cleaning guide",
                    "Capsule coffee machine product specifications",
                ],
            },
            {
                title: "Wall Clock Product Detail Page",
                description: "An interior product detail page centered on color options and styled room imagery.",
                images: ["images/works/detail-pages/wall-clock/wall-clock-detail.jpg"],
                alts: ["Product detail page featuring a colorful wall clock in styled interior spaces"],
            },
            {
                title: "Aluminum Suitcase Product Detail Page",
                description: "An e-commerce product detail page that presents materials, construction, use cases, and detailed specifications step by step.",
                images: [
                    "images/works/detail-pages/suitcase/suitcase-001.jpg",
                    "images/works/detail-pages/suitcase/suitcase-002.jpg",
                    "images/works/detail-pages/suitcase/suitcase-003.jpg",
                    "images/works/detail-pages/suitcase/suitcase-004.jpg",
                    "images/works/detail-pages/suitcase/suitcase-005.jpg",
                    "images/works/detail-pages/suitcase/suitcase-006.jpg",
                    "images/works/detail-pages/suitcase/suitcase-007.jpg",
                    "images/works/detail-pages/suitcase/suitcase-008.jpg",
                    "images/works/detail-pages/suitcase/suitcase-009.jpg",
                    "images/works/detail-pages/suitcase/suitcase-010.jpg",
                    "images/works/detail-pages/suitcase/suitcase-011.jpg",
                    "images/works/detail-pages/suitcase/suitcase-012.jpg",
                ],
                alts: [
                    "Aluminum suitcase renewal announcement",
                    "Aluminum suitcase brand and material introduction",
                    "Aluminum suitcase main product visual",
                    "Aluminum suitcase travel scene",
                    "Aluminum suitcase size and specification guide",
                    "Aluminum suitcase customer review section",
                    "Aluminum suitcase key feature overview",
                    "Aluminum suitcase detail image collection",
                    "Aluminum suitcase comparison design",
                    "Aluminum suitcase feature checklist",
                    "Aluminum suitcase production quality overview",
                    "Aluminum suitcase premium travel visual",
                ],
            },
        ],
    };
    const progress = document.querySelector(".works-progress");
    const topButton = document.querySelector(".works-top");
    const cards = Array.from(document.querySelectorAll(".project-card"));
    const filters = Array.from(document.querySelectorAll("[data-filter]"));
    const dialog = document.querySelector(".project-dialog");
    const dialogMedia = dialog?.querySelector(".dialog-media");
    const dialogImageStack = dialog?.querySelector(".dialog-image-stack");
    const dialogTitle = dialog?.querySelector(".dialog-copy h2");
    const dialogField = dialog?.querySelector(".dialog-copy > span");
    const dialogDescription = dialog?.querySelector(".dialog-description");
    const dialogCount = dialog?.querySelector(".dialog-count");
    const dialogThumbnails = dialog?.querySelector(".dialog-thumbnails");
    const closeButton = dialog?.querySelector(".dialog-close");
    const previousButton = dialog?.querySelector("[data-dialog-prev]");
    const nextButton = dialog?.querySelector("[data-dialog-next]");
    let activeCard = null;
    let activeImages = [];
    let activeAlts = [];
    let activeDescriptions = [];
    let activeImageIndex = 0;
    let activeGalleryProjects = [];
    let activeGalleryIndex = 0;

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
        if (!dialog || !dialogMedia || !dialogImageStack || !dialogTitle || !dialogField) return;
        activeCard = card;
        activeImages = (card.dataset.images || card.dataset.image || "")
            .split("|")
            .map((item) => item.trim())
            .filter(Boolean);
        activeAlts = (card.dataset.alts || "")
            .split("|")
            .map((item) => item.trim());
        activeDescriptions = (card.dataset.descriptions || "")
            .split("|")
            .map((item) => item.trim());
        activeImageIndex = 0;
        activeGalleryProjects = detailPageGalleries[card.dataset.galleryKey] || [];
        activeGalleryIndex = 0;
        const usesScrollGallery = activeGalleryProjects.length > 0;

        dialog.classList.toggle("has-scroll-gallery", usesScrollGallery);
        dialogMedia.classList.toggle("is-scroll-gallery", usesScrollGallery);
        dialogImageStack.classList.toggle("is-scroll-gallery", usesScrollGallery);
        dialogTitle.textContent = card.dataset.title;
        dialogField.textContent = card.dataset.field;
        renderDialogThumbnails();
        if (usesScrollGallery) {
            renderDialogGallery();
        } else {
            renderDialogImage();
        }
        dialog.showModal();
    }

    function renderDialogThumbnails() {
        if (!dialogThumbnails || !activeCard) return;
        dialogThumbnails.replaceChildren();

        const thumbnailItems = activeGalleryProjects.length > 0 ? activeGalleryProjects : activeImages;

        thumbnailItems.forEach((item, index) => {
            const button = document.createElement("button");
            const image = document.createElement("img");
            const isGalleryThumbnail = activeGalleryProjects.length > 0;
            const src = isGalleryThumbnail ? item.images[0] : item;
            const alt = isGalleryThumbnail
                ? item.alts?.[0] || item.title
                : activeAlts[index] || activeCard.dataset.title;

            button.type = "button";
            button.className = "dialog-thumbnail";
            button.classList.toggle("has-label", isGalleryThumbnail);
            button.setAttribute(
                "aria-label",
                isGalleryThumbnail ? `View ${item.title}` : `${activeCard.dataset.title}, image ${index + 1}`
            );
            button.setAttribute(
                "aria-pressed",
                String(index === (isGalleryThumbnail ? activeGalleryIndex : activeImageIndex))
            );
            image.src = src;
            image.alt = alt;

            button.append(image);
            if (isGalleryThumbnail) {
                const label = document.createElement("span");
                label.textContent = item.title;
                button.append(label);
            }
            button.addEventListener("click", () => {
                if (isGalleryThumbnail) {
                    activeGalleryIndex = index;
                    renderDialogGallery();
                } else {
                    activeImageIndex = index;
                    renderDialogImage();
                }
            });

            dialogThumbnails.append(button);
        });
    }

    function renderDialogImage() {
        if (!dialogImageStack || !activeCard || activeImages.length === 0) return;
        const image = document.createElement("img");
        image.src = activeImages[activeImageIndex];
        image.alt =
            activeAlts[activeImageIndex] ||
            activeCard.querySelector("img")?.alt ||
            activeCard.dataset.title;
        dialogImageStack.replaceChildren(image);
        if (dialogDescription) {
            const description =
                activeDescriptions[activeImageIndex] || activeCard.dataset.description || "";
            dialogDescription.textContent = description;
            dialogDescription.hidden = !description;
        }
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

    function renderDialogGallery() {
        if (!dialogImageStack || !dialogMedia || !activeCard || activeGalleryProjects.length === 0) return;
        const gallery = activeGalleryProjects[activeGalleryIndex];
        const fragment = document.createDocumentFragment();

        gallery.images.forEach((src, index) => {
            const image = document.createElement("img");
            image.src = src;
            image.alt = gallery.alts?.[index] || `${gallery.title}, image ${index + 1}`;
            image.loading = index === 0 ? "eager" : "lazy";
            image.decoding = "async";
            fragment.append(image);
        });

        dialogImageStack.replaceChildren(fragment);
        dialogTitle.textContent = activeCard.dataset.title;
        dialogField.textContent = gallery.title;
        if (dialogDescription) {
            dialogDescription.textContent = gallery.description;
            dialogDescription.hidden = false;
        }
        if (dialogCount) {
            dialogCount.textContent = `${activeGalleryIndex + 1} / ${activeGalleryProjects.length} PROJECTS`;
        }
        dialogThumbnails?.querySelectorAll(".dialog-thumbnail").forEach((thumbnail, index) => {
            thumbnail.classList.toggle("is-active", index === activeGalleryIndex);
            thumbnail.setAttribute("aria-pressed", String(index === activeGalleryIndex));
        });
        dialogMedia.scrollTo({ top: 0, behavior: "auto" });
    }

    function moveProject(direction) {
        if (activeGalleryProjects.length > 0) {
            activeGalleryIndex =
                (activeGalleryIndex + direction + activeGalleryProjects.length) % activeGalleryProjects.length;
            renderDialogGallery();
            return;
        }

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
