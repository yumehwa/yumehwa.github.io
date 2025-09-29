// Internationalization (i18n)
const translations = {
    en: {
        // Navigation
        "nav.home": "Home",
        "nav.about": "About",
        "nav.contact": "Contact",

        // Hero Section
        "hero.title":
            'Transform Your Vision<br class="md-hide" />Into <span class="accent">Stunning Design</span>',
        "hero.desc":
            "We're a creative design studio that brings brands to life through innovative design solutions, strategic thinking, and exceptional craftsmanship.",
        "hero.start": "Start Your Project",
        "hero.view": "View Our Work",

        // Services Section
        "services.title": "Our Creative Services",
        "services.desc":
            "We offer comprehensive design solutions to help your brand stand out. From concept to completion, we're your creative partners.",
        "services.brand": "Brand Identity",
        "services.brand.desc":
            "Create memorable brand identities that capture your essence and connect with your audience through strategic design thinking.",
        "services.web": "Web Design",
        "services.web.desc":
            "Design beautiful, responsive websites that deliver exceptional user experiences and drive business results.",
        "services.graphic": "Graphic Design",
        "services.graphic.desc":
            "From marketing materials to digital graphics, we create compelling designs that communicate your message effectively.",
        "services.package": "Package Design",
        "services.package.desc":
            "Creative packaging solutions that protect your products while creating memorable unboxing experiences.",
        "services.print": "Print Design",
        "services.print.desc":
            "Professional print design services for business cards, brochures, packaging, and all your marketing materials.",
        "services.consulting": "Creative Consulting",
        "services.consulting.desc":
            "Strategic creative guidance to help you make informed design decisions and achieve your goals.",

        // Portfolio Section
        "portfolio.title": "Our Creative Portfolio",
        "portfolio.desc":
            "Explore our latest projects and see how we've helped brands transform their vision into stunning visual experiences.",
        "portfolio.all": "All",
        "portfolio.branding": "Branding",
        "portfolio.web": "Web Design",
        "portfolio.print": "Print",
        "portfolio.viewAll": "View All Projects",

        // About Section
        "about.title": "Crafting Exceptional Design Experiences",
        "about.desc1":
            "We're a passionate team of designers, strategists, and creative thinkers dedicated to bringing your brand's story to life through innovative design solutions.",
        "about.desc2":
            "Our approach combines strategic thinking with creative excellence, ensuring every project not only looks stunning but also achieves your business objectives.",
        "about.work": "Work With Us",
        "about.learn": "Learn More",

        // Testimonials Section
        "testimonials.title": "What Our Clients Say",
        "testimonials.desc":
            "Don't just take our word for it. Here's what our clients have to say about working with us.",
        "testimonial1.quote":
            "The team transformed our brand completely. Their strategic approach and creative excellence exceeded all expectations.",
        "testimonial1.name": "David Thompson",
        "testimonial1.title": "CEO, TechVision Inc.",
        "testimonial2.quote":
            "Our new brand identity significantly improved our market presence. The process was collaborative and inspiring.",
        "testimonial2.name": "Emily Carter",
        "testimonial2.title": "Marketing Lead, Finedge",
        "testimonial3.quote":
            "From web to print, everything felt cohesive and premium. We loved the attention to detail.",
        "testimonial3.name": "Hiro Tanaka",
        "testimonial3.title": "Founder, Bento Lab",

        // Contact Section
        "contact.title": "Let's Create Something Amazing Together",
        "contact.desc":
            "Ready to transform your brand? Get in touch and let's discuss how we can bring your vision to life.",
        "contact.location": "Seoul, Republic of Korea",
        "contact.email": "yumehwa.studio@gmail.com",
        "contact.hours": "Mon–Fri: 10:00–18:00 /",
        "contact.form.name": "Full Name *",
        "contact.form.namePlaceholder": "Your full name",
        "contact.form.email": "Email Address *",
        "contact.form.emailPlaceholder": "your@email.com",
        "contact.form.company": "Company Name",
        "contact.form.companyPlaceholder": "Your company name",
        "contact.form.service": "Service Interested In",
        "contact.form.details": "Project Details *",
        "contact.form.detailsPlaceholder":
            "Tell us about your project, goals, and timeline...",
        "contact.form.submit": "Send Message",
        "contact.form.charCount": "characters",

        // Footer
        "footer.desc":
            "We're a creative design studio passionate about bringing your vision to life through innovative design solutions and strategic thinking.",
        "footer.services": "Services",
        "footer.contact": "Contact",
        "footer.copyright": "© 2025 Yumehwa Studio. All rights reserved.",
    },
    ko: {
        // Navigation
        "nav.home": "홈",
        "nav.about": "소개",
        "nav.contact": "문의",

        // Hero Section
        "hero.title":
            '당신의 비전을<br class="md-hide" /> <span class="accent">멋진 디자인</span>으로 변환하세요',
        "hero.desc":
            "혁신적인 디자인 솔루션, 전략적 사고, 그리고 탁월한 기술력으로 브랜드를 생생하게 만드는 크리에이티브 디자인 스튜디오입니다.",
        "hero.start": "프로젝트 시작하기",
        "hero.view": "작품 보기",

        // Services Section
        "services.title": "우리의 크리에이티브 서비스",
        "services.desc":
            "브랜드가 돋보일 수 있도록 포괄적인 디자인 솔루션을 제공합니다. 컨셉부터 완성까지, 우리는 당신의 크리에이티브 파트너입니다.",
        "services.brand": "브랜드 아이덴티티",
        "services.brand.desc":
            "전략적 디자인 사고를 통해 브랜드의 본질을 포착하고 고객과 연결되는 기억에 남는 브랜드 아이덴티티를 만듭니다.",
        "services.web": "웹 디자인",
        "services.web.desc":
            "탁월한 사용자 경험을 제공하고 비즈니스 성과를 이끄는 아름답고 반응형 웹사이트를 디자인합니다.",
        "services.graphic": "그래픽 디자인",
        "services.graphic.desc":
            "마케팅 자료부터 디지털 그래픽까지, 메시지를 효과적으로 전달하는 매력적인 디자인을 만듭니다.",
        "services.package": "패키지 디자인",
        "services.package.desc":
            "제품을 보호하면서도 기억에 남는 언박싱 경험을 만드는 창의적인 패키징 솔루션을 제공합니다.",
        "services.print": "인쇄 디자인",
        "services.print.desc":
            "명함, 브로셔, 패키징, 그리고 모든 마케팅 자료를 위한 전문적인 인쇄 디자인 서비스를 제공합니다.",
        "services.consulting": "크리에이티브 컨설팅",
        "services.consulting.desc":
            "정보에 입각한 디자인 결정을 내리고 목표를 달성할 수 있도록 도와주는 전략적 크리에이티브 가이드를 제공합니다.",

        // Portfolio Section
        "portfolio.title": "우리의 크리에이티브 포트폴리오",
        "portfolio.desc":
            "최신 프로젝트를 탐색하고 브랜드가 비전을 멋진 시각적 경험으로 변환한 방법을 확인해보세요.",
        "portfolio.all": "전체",
        "portfolio.branding": "브랜딩",
        "portfolio.web": "웹 디자인",
        "portfolio.print": "인쇄",
        "portfolio.viewAll": "모든 프로젝트 보기",

        // About Section
        "about.title": "탁월한 디자인 경험 제작",
        "about.desc1":
            "혁신적인 디자인 솔루션을 통해 브랜드의 스토리를 생생하게 만드는 데 전념하는 디자이너, 전략가, 크리에이티브 사고가들의 열정적인 팀입니다.",
        "about.desc2":
            "우리의 접근 방식은 전략적 사고와 크리에이티브 우수성을 결합하여 모든 프로젝트가 단순히 멋져 보일 뿐만 아니라 비즈니스 목표를 달성하도록 보장합니다.",
        "about.work": "함께 일하기",
        "about.learn": "더 알아보기",

        // Testimonials Section
        "testimonials.title": "고객 후기",
        "testimonials.desc":
            "우리 말만 믿지 마세요. 고객들이 우리와 함께 일한 경험에 대해 말하는 내용을 들어보세요.",
        "testimonial1.quote":
            "팀이 우리 브랜드를 완전히 변화시켰습니다. 그들의 전략적 접근 방식과 크리에이티브 우수성은 모든 기대를 뛰어넘었습니다.",
        "testimonial1.name": "데이비드 톰슨",
        "testimonial1.title": "CEO, TechVision Inc.",
        "testimonial2.quote":
            "새로운 브랜드 아이덴티티가 우리의 시장 입지를 크게 개선했습니다. 과정이 협력적이고 영감을 주었습니다.",
        "testimonial2.name": "에밀리 카터",
        "testimonial2.title": "마케팅 리드, Finedge",
        "testimonial3.quote":
            "웹부터 인쇄까지, 모든 것이 일관되고 프리미엄하게 느껴졌습니다. 세부사항에 대한 관심을 좋아했습니다.",
        "testimonial3.name": "히로 타나카",
        "testimonial3.title": "창립자, Bento Lab",

        // Contact Section
        "contact.title": "함께 놀라운 것을 만들어봅시다",
        "contact.desc":
            "브랜드를 변화시킬 준비가 되셨나요? 연락주시면 비전을 현실로 만드는 방법에 대해 논의해보겠습니다.",
        "contact.location": "대한민국 서울",
        "contact.email": "yumehwa.studio@gmail.com",
        "contact.hours": "월-금: 10:00-18:00 /",
        "contact.form.name": "성명 *",
        "contact.form.namePlaceholder": "성명을 입력하세요",
        "contact.form.email": "이메일 주소 *",
        "contact.form.emailPlaceholder": "your@email.com",
        "contact.form.company": "회사명",
        "contact.form.companyPlaceholder": "회사명을 입력하세요",
        "contact.form.service": "관심 서비스",
        "contact.form.details": "프로젝트 세부사항 *",
        "contact.form.detailsPlaceholder":
            "프로젝트, 목표, 일정에 대해 알려주세요...",
        "contact.form.submit": "메시지 보내기",
        "contact.form.charCount": "글자",

        // Footer
        "footer.desc":
            "혁신적인 디자인 솔루션과 전략적 사고를 통해 당신의 비전을 생생하게 만드는 데 열정적인 크리에이티브 디자인 스튜디오입니다.",
        "footer.services": "서비스",
        "footer.contact": "연락처",
        "footer.copyright": "© 2025 유메화 스튜디오. 모든 권리 보유.",
    },
};

let currentLanguage = "en";

function translatePage(lang) {
    currentLanguage = lang;
    const elements = document.querySelectorAll("[data-key]");

    elements.forEach((element) => {
        const key = element.getAttribute("data-key");
        const translation = translations[lang][key];

        if (translation) {
            if (element.tagName === "INPUT" || element.tagName === "TEXTAREA") {
                element.placeholder = translation;
            } else {
                element.innerHTML = translation;
            }
        }
    });
}

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

// Language dropdown
const langToggle = document.querySelector(".lang-toggle");
const langMenu = document.querySelector(".lang-menu");
const langOptions = document.querySelectorAll(".lang-option");

langToggle.addEventListener("click", (e) => {
    e.stopPropagation();
    const isExpanded = langToggle.getAttribute("aria-expanded") === "true";
    langToggle.setAttribute("aria-expanded", !isExpanded);

    if (!isExpanded) {
        langMenu.style.opacity = "1";
        langMenu.style.visibility = "visible";
        langMenu.style.transform = "translateY(0)";
    } else {
        langMenu.style.opacity = "0";
        langMenu.style.visibility = "hidden";
        langMenu.style.transform = "translateY(-8px)";
    }
});

// Close dropdown when clicking outside
document.addEventListener("click", (e) => {
    if (!langToggle.contains(e.target) && !langMenu.contains(e.target)) {
        langToggle.setAttribute("aria-expanded", "false");
        langMenu.style.opacity = "0";
        langMenu.style.visibility = "hidden";
        langMenu.style.transform = "translateY(-8px)";
    }
});

// Language selection
langOptions.forEach((option) => {
    option.addEventListener("click", (e) => {
        e.preventDefault();

        // Remove active class from all options
        langOptions.forEach((opt) => opt.classList.remove("active"));

        // Add active class to selected option
        option.classList.add("active");

        // Update toggle button text
        const selectedLang = option.textContent.trim();
        // Find the text node between the two icons
        const textNode = langToggle.childNodes[2]; // The text node between icons
        if (textNode && textNode.nodeType === Node.TEXT_NODE) {
            textNode.textContent = selectedLang;
        }

        // Close dropdown
        langToggle.setAttribute("aria-expanded", "false");
        langMenu.style.opacity = "0";
        langMenu.style.visibility = "hidden";
        langMenu.style.transform = "translateY(-8px)";

        // Translate page based on selected language
        const langCode = selectedLang === "한국어" ? "ko" : "en";
        translatePage(langCode);
    });
});

// Floating Top Button
const topBtn = document.getElementById("topBtn");

// Show/hide button based on scroll position
window.addEventListener("scroll", () => {
    if (window.pageYOffset > 300) {
        topBtn.classList.add("show");
    } else {
        topBtn.classList.remove("show");
    }
});

// Scroll to top when button is clicked
topBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
});
