document.addEventListener("DOMContentLoaded", () => {
    const scrollProgress = document.querySelector(".scroll-progress");
    const revealTargets = document.querySelectorAll(".reveal");
    const hero = document.querySelector(".ko-hero");
    const languageLinks = document.querySelectorAll("[data-language-page]");
    let heroIntroCanReplay = false;
    let heroIntroTimer;

    languageLinks.forEach((link) => {
        link.addEventListener("click", (event) => {
            const targetPage = link.dataset.languagePage;
            if (!targetPage) return;

            event.preventDefault();
            const targetHash = window.location.hash || "#hero";
            window.location.href = `${targetPage}${targetHash}`;
        });
    });

    function playHeroIntro() {
        if (!hero || reduceMotion.matches) return;

        clearTimeout(heroIntroTimer);
        hero.classList.remove("play-hero-intro");
        void hero.offsetWidth;
        hero.classList.add("play-hero-intro");

        heroIntroTimer = window.setTimeout(() => {
            hero.classList.remove("play-hero-intro");
        }, 2100);
    }

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;
                entry.target.classList.add("animate");
                observer.unobserve(entry.target);
            });
        },
        { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );

    revealTargets.forEach((target) => observer.observe(target));

    function updateScrollProgress() {
        if (!scrollProgress) return;
        const docHeight = document.body.scrollHeight - window.innerHeight;
        const scrollPercent = docHeight > 0 ? (window.scrollY / docHeight) * 100 : 0;
        scrollProgress.style.width = `${scrollPercent}%`;
    }

    const floatVisuals = document.querySelectorAll(".ko-float-visual");
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const stackedLayout = window.matchMedia(
        "(max-width: 767px), (min-width: 768px) and (max-width: 1180px) and (orientation: portrait), (max-height: 520px) and (max-width: 950px)"
    );
    const touchInterface = window.matchMedia("(hover: none), (pointer: coarse)");
    const pageSections = Array.from(document.querySelectorAll("main > section[id]"));
    const initialHash = window.location.hash;
    let sectionSnapTimer;
    let sectionSnapActive = false;
    let sectionHashLocked = Boolean(initialHash);

    function updateFloatVisuals() {
        if (!floatVisuals.length || reduceMotion.matches) return;

        floatVisuals.forEach((visual) => {
            const rect = visual.getBoundingClientRect();
            const visualCenter = rect.top + rect.height / 2;
            const viewportCenter = window.innerHeight / 2;
            const distance = (visualCenter - viewportCenter) / window.innerHeight;
            const strength = Number(visual.dataset.float || 0.1);
            const offset = Math.max(-1, Math.min(1, distance)) * strength * -90;
            visual.style.setProperty("--float-y", `${offset.toFixed(2)}px`);
        });
    }

    function snapToSection(section) {
        if (!section) return;

        sectionSnapActive = true;
        scrollToSectionStart(section, "smooth");
        window.history.replaceState(null, "", `#${section.id}`);
        window.setTimeout(() => {
            sectionSnapActive = false;
        }, 720);
    }

    function scrollToSectionStart(section, behavior = "smooth") {
        if (!section) return;

        const sectionTop = section.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({ top: Math.round(sectionTop), behavior });
    }

    function getNearestSectionIndex() {
        if (pageSections.length === 0) return -1;

        return pageSections
            .map((section, index) => ({
                index,
                distance: Math.abs(section.getBoundingClientRect().top),
            }))
            .sort((a, b) => a.distance - b.distance)[0].index;
    }

    function scheduleSectionSnap() {
        if (reduceMotion.matches || stackedLayout.matches || sectionSnapActive || pageSections.length === 0) return;

        window.clearTimeout(sectionSnapTimer);
        sectionSnapTimer = window.setTimeout(() => {
            const index = getNearestSectionIndex();
            if (index < 0) return;

            const distance = Math.abs(pageSections[index].getBoundingClientRect().top);
            if (distance < 2 || distance > window.innerHeight * 0.42) return;

            snapToSection(pageSections[index]);
        }, 150);
    }

    function updateSectionHash() {
        if (sectionHashLocked) return;
        if (pageSections.length === 0) return;

        const current = pageSections.find((section) => Math.abs(section.getBoundingClientRect().top) < 4);
        if (!current || window.location.hash === `#${current.id}`) return;

        window.history.replaceState(null, "", `#${current.id}`);
    }

    let ticking = false;
    window.addEventListener("scroll", () => {
        if (ticking) return;
        requestAnimationFrame(() => {
            updateScrollProgress();
            updateFloatVisuals();
            scheduleSectionSnap();
            updateSectionHash();

            if (window.scrollY > 180) {
                heroIntroCanReplay = true;
            }

            if (heroIntroCanReplay && window.scrollY <= 8) {
                heroIntroCanReplay = false;
                playHeroIntro();
            }

            ticking = false;
        });
        ticking = true;
    });

    updateScrollProgress();
    updateFloatVisuals();

    document.querySelectorAll('a[href^="#"]').forEach((link) => {
        link.addEventListener("click", (event) => {
            const targetId = link.getAttribute("href");
            if (!targetId || targetId === "#") return;

            const target = document.querySelector(targetId);
            if (!target) return;

            event.preventDefault();
            scrollToSectionStart(target, "smooth");
            window.history.pushState(null, "", targetId);

            if (targetId === "#hero") {
                window.setTimeout(playHeroIntro, 520);
            }

        });
    });

    const topBtn = document.getElementById("topBtn");
    if (topBtn) {
        window.addEventListener("scroll", () => {
            topBtn.classList.toggle("show", window.scrollY > 300);
        });

        topBtn.addEventListener("click", () => {
            window.scrollTo({ top: 0, behavior: "smooth" });
            window.setTimeout(playHeroIntro, 520);
        });
    }

    const inquiryToggle = document.querySelector(".ko-inquiry-toggle");
    const inquiryForm = document.getElementById("ko-inquiry-form");
    const contactCard = document.querySelector(".ko-contact-card");
    const aboutSection = document.querySelector(".ko-philosophy");
    const aboutStrip = document.querySelector(".ko-about-image-strip");
    const aboutHighlight = document.querySelector(".ko-about-spread .about-highlight");
    const servicesSection = document.querySelector(".ko-services");
    const worksSection = document.querySelector(".ko-works-showcase");
    const contactSection = document.querySelector(".ko-contact");

    if (inquiryToggle && inquiryForm && contactCard) {
        inquiryToggle.addEventListener("click", (event) => {
            event.preventDefault();
            contactCard.classList.add("form-open");
        });
    }

    document.querySelectorAll(".ko-hero-column").forEach((column) => {
        column.addEventListener("mouseenter", () => {
            column.classList.add("is-hovered");
        });

        column.addEventListener("mouseleave", () => {
            column.classList.remove("is-hovered");
        });
    });

    document.querySelectorAll(".ko-services .korean-card").forEach((card) => {
        card.addEventListener("mouseenter", () => {
            card.classList.add("is-card-hovered");
        });

        card.addEventListener("mouseleave", () => {
            card.classList.remove("is-card-hovered");
        });
    });

    function setupTouchActivation(selector, className, options = {}) {
        const targets = Array.from(document.querySelectorAll(selector));
        if (!targets.length || reduceMotion.matches || !touchInterface.matches) return;

        targets.forEach((target) => {
            if (!target.matches("a, button, input, select, textarea")) {
                target.setAttribute("tabindex", "0");
            }

            target.addEventListener("focus", () => target.classList.add(className));
            target.addEventListener("blur", () => target.classList.remove(className));
        });

        const touchObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const layoutAllowsActivation = !options.stackedOnly || stackedLayout.matches;
                    entry.target.classList.toggle(
                        className,
                        entry.isIntersecting && layoutAllowsActivation
                    );
                });
            },
            {
                threshold: options.threshold || 0.32,
                rootMargin: options.rootMargin || "-30% 0px -30% 0px",
            }
        );

        targets.forEach((target) => touchObserver.observe(target));

        if (options.stackedOnly) {
            stackedLayout.addEventListener("change", (event) => {
                if (event.matches) return;
                targets.forEach((target) => target.classList.remove(className));
            });
        }
    }

    setupTouchActivation(".ko-hero-column", "is-hovered", { stackedOnly: true, threshold: 0.4 });
    setupTouchActivation(".ko-services .korean-card", "is-card-hovered", { threshold: 0.24 });
    setupTouchActivation(".ko-premium-card", "is-touch-active", { threshold: 0.38 });
    setupTouchActivation(".ko-work-fields span", "is-touch-active", { threshold: 0.46 });

    let aboutStripWasVisible = false;
    let aboutImageReplayTimer;
    let aboutHighlightReplayTimer;
    let servicesLightTimer;

    function replayAboutMotion() {
        if (reduceMotion.matches) return;

        if (aboutSection) {
            aboutSection.classList.remove("about-motion-on");
            void aboutSection.offsetWidth;
            aboutSection.classList.add("about-motion-on");
        }

        if (aboutStrip) {
            window.clearTimeout(aboutImageReplayTimer);
            aboutStrip.classList.remove("about-image-in");
            aboutStrip.classList.add("about-image-reset");
            void aboutStrip.offsetWidth;

            aboutImageReplayTimer = window.setTimeout(() => {
                aboutStrip.classList.remove("about-image-reset");
                void aboutStrip.offsetWidth;
                window.requestAnimationFrame(() => {
                    aboutStrip.classList.add("about-image-in");
                });
            }, 34);
        }

        if (aboutHighlight) {
            window.clearTimeout(aboutHighlightReplayTimer);
            aboutHighlight.classList.remove("about-highlight-in");
            aboutHighlight.classList.add("about-highlight-reset");
            void aboutHighlight.offsetWidth;

            aboutHighlightReplayTimer = window.setTimeout(() => {
                aboutHighlight.classList.remove("about-highlight-reset");
                void aboutHighlight.offsetWidth;
                window.requestAnimationFrame(() => {
                    aboutHighlight.classList.add("about-highlight-in");
                });
            }, 120);
        }
    }

    function replayServicesMotion() {
        if (!servicesSection || reduceMotion.matches) return;

        window.clearTimeout(servicesLightTimer);
        servicesSection.classList.add("services-transition-reset");
        servicesSection.classList.remove("services-motion-on");
        servicesSection.classList.remove("services-light-on");
        void servicesSection.offsetWidth;
        servicesSection.classList.remove("services-transition-reset");
        void servicesSection.offsetWidth;
        servicesSection.classList.add("services-motion-on");
        servicesLightTimer = window.setTimeout(() => {
            servicesSection.classList.add("services-light-on");
        }, 1800);
    }

    function replaySectionMotion(section, className) {
        if (!section || reduceMotion.matches) return;

        section.classList.remove(className);
        void section.offsetWidth;
        section.classList.add(className);
    }

    function updateAboutStrip() {
        if (!aboutStrip) return;
        const rect = aboutStrip.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight * 0.86 && rect.bottom > 0;

        if (isVisible && !aboutStripWasVisible) {
            replayAboutMotion();
        }

        aboutStripWasVisible = isVisible;
    }

    window.addEventListener("scroll", updateAboutStrip);
    updateAboutStrip();

    let servicesWasVisible = false;

    function updateServicesMotion() {
        if (!servicesSection) return;
        const rect = servicesSection.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight * 0.48 && rect.bottom > window.innerHeight * 0.28;

        if (isVisible && !servicesWasVisible) {
            replayServicesMotion();
        }

        servicesWasVisible = isVisible;
    }

    window.addEventListener("scroll", updateServicesMotion);
    updateServicesMotion();

    let worksWasVisible = false;
    let contactWasVisible = false;

    function updateTextSectionMotion() {
        if (worksSection) {
            const worksRect = worksSection.getBoundingClientRect();
            const worksVisible = worksRect.top < window.innerHeight * 0.55 && worksRect.bottom > window.innerHeight * 0.24;

            if (worksVisible && !worksWasVisible) {
                replaySectionMotion(worksSection, "works-motion-on");
            }

            worksWasVisible = worksVisible;
        }

        if (contactSection) {
            const contactRect = contactSection.getBoundingClientRect();
            const contactVisible = contactRect.top < window.innerHeight * 0.55 && contactRect.bottom > window.innerHeight * 0.24;

            if (contactVisible && !contactWasVisible) {
                replaySectionMotion(contactSection, "contact-motion-on");
            }

            contactWasVisible = contactVisible;
        }
    }

    window.addEventListener("scroll", updateTextSectionMotion);
    updateTextSectionMotion();

    if (initialHash) {
        window.setTimeout(() => {
            const target = document.querySelector(initialHash);
            if (target) {
                scrollToSectionStart(target, "auto");
            }

            if (initialHash === "#services") {
                replayServicesMotion();
            }

            if (initialHash === "#works") {
                replaySectionMotion(worksSection, "works-motion-on");
            }

            if (initialHash === "#contact") {
                replaySectionMotion(contactSection, "contact-motion-on");
            }

            sectionHashLocked = false;
            updateSectionHash();
        }, 120);
    } else {
        sectionHashLocked = false;
    }

    window.setTimeout(playHeroIntro, 120);
});
