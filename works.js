document.addEventListener("DOMContentLoaded", () => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const detailPageGalleries = {
        "ecommerce-detail": [
            {
                title: "벽시계 상세페이지",
                description: "제품의 컬러와 공간 연출 이미지를 중심으로 구성한 인테리어 제품 상세페이지 디자인입니다.",
                images: ["images/works/detail-pages/wall-clock/wall-clock-detail.jpg"],
                alts: ["컬러 벽시계의 공간 연출과 제품 정보를 담은 상세페이지"],
            },
            {
                title: "알루미늄 캐리어 상세페이지",
                description: "제품의 소재, 구조, 사용 장면과 세부 사양을 단계적으로 보여주는 이커머스 상세페이지 디자인입니다.",
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
                    "알루미늄 캐리어 리뉴얼 안내",
                    "알루미늄 캐리어 브랜드와 소재 소개",
                    "알루미늄 캐리어 제품 메인 비주얼",
                    "알루미늄 캐리어 여행 장면",
                    "알루미늄 캐리어 제품 규격 안내",
                    "알루미늄 캐리어 고객 후기 소개",
                    "알루미늄 캐리어 주요 기능 설명",
                    "알루미늄 캐리어 디테일 이미지 모음",
                    "알루미늄 캐리어 비교 디자인",
                    "알루미늄 캐리어 특징 체크리스트",
                    "알루미늄 캐리어 제작 품질 소개",
                    "알루미늄 캐리어 프리미엄 여행 비주얼",
                ],
            },
            {
                title: "캡슐 커피머신 상세페이지",
                description: "제품의 주요 기능과 사용 정보를 순서에 맞춰 정리한 이커머스 상세페이지 디자인입니다.",
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
                    "캡슐 커피머신 상세페이지 메인 비주얼",
                    "캡슐 커피 호환 정보 디자인",
                    "캡슐 커피머신 가격과 특징 소개",
                    "캡슐 커피머신 주요 기능 소개",
                    "캡슐 커피머신 물탱크와 추출 기능 소개",
                    "캡슐 커피머신 사용 방법과 청소 안내",
                    "캡슐 커피머신 제품 사양 안내",
                ],
            },
            {
                title: "런칭 프로모션 콘텐츠",
                description: "온라인 판매 채널의 런칭 이벤트와 리뷰 프로모션을 위한 콘텐츠 디자인입니다.",
                images: [
                    "images/works/ecommerce-content/launch-event-01.jpg",
                    "images/works/ecommerce-content/launch-event-02.jpg",
                ],
                alts: [
                    "반려동물 유모차 런칭 기념 구매 이벤트 콘텐츠",
                    "반려동물 유모차 런칭 기념 리뷰 이벤트 콘텐츠",
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
                isGalleryThumbnail ? `${item.title} 보기` : `${activeCard.dataset.title} 이미지 ${index + 1}`
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
            image.alt = gallery.alts?.[index] || `${gallery.title} 이미지 ${index + 1}`;
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
