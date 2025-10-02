// 한글 페이지 전용 JavaScript

document.addEventListener("DOMContentLoaded", function () {
    // 스크롤 진행 표시기
    const scrollProgress = document.querySelector(".scroll-progress");

    // 스크롤 애니메이션을 위한 Intersection Observer
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("animate");
            }
        });
    }, observerOptions);

    // 애니메이션할 요소들 관찰 시작
    const animateElements = document.querySelectorAll(
        ".scroll-animate, .about-title, .about-content, .korean-card, .works-title"
    );
    animateElements.forEach((el, index) => {
        // 각 요소에 지연 시간 추가
        el.style.transitionDelay = `${index * 0.1}s`;
        observer.observe(el);
    });

    // About 섹션 특별 애니메이션
    const aboutTitle = document.querySelector(".about-title");
    const aboutContent = document.querySelector(".about-content");

    if (aboutTitle && aboutContent) {
        const aboutObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        aboutTitle.classList.add("animate");
                        setTimeout(() => {
                            aboutContent.classList.add("animate");
                        }, 300);
                    }
                });
            },
            { threshold: 0.3 }
        );

        aboutObserver.observe(aboutTitle);
    }

    // 스크롤 진행률 업데이트
    function updateScrollProgress() {
        const scrollTop = window.pageYOffset;
        const docHeight = document.body.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        scrollProgress.style.width = scrollPercent + "%";
    }

    // 스크롤 이벤트 리스너
    let ticking = false;
    function onScroll() {
        if (!ticking) {
            requestAnimationFrame(() => {
                updateScrollProgress();
                updateParallax();
                ticking = false;
            });
            ticking = true;
        }
    }

    // 패럴랙스 효과
    function updateParallax() {
        const scrolled = window.pageYOffset;
        const scrollTextLines = document.querySelectorAll(".scroll-text-line");

        scrollTextLines.forEach((line, index) => {
            const speed = 0.5 + index * 0.1;
            const yPos = -(scrolled * speed);
            line.style.transform = `translateX(0) translateY(${yPos}px)`;
        });
    }

    // 마우스 움직임 효과
    document.addEventListener("mousemove", (e) => {
        const mouseX = e.clientX / window.innerWidth;
        const mouseY = e.clientY / window.innerHeight;

        // 카드들에 마우스 움직임 반영
        const cards = document.querySelectorAll(".korean-card");
        cards.forEach((card, index) => {
            const speed = (index + 1) * 0.02;
            const x = (mouseX - 0.5) * speed * 20;
            const y = (mouseY - 0.5) * speed * 20;

            if (card.classList.contains("animate")) {
                card.style.transform = `translateY(0) translateX(${x}px) translateY(${y}px)`;
            }
        });
    });

    window.addEventListener("scroll", onScroll);

    // 부드러운 스크롤 (기본 script.js의 기능)
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
    smoothScrollLinks.forEach((link) => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href");
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                });
            }
        });
    });

    // 상단으로 이동 버튼
    const topBtn = document.getElementById("topBtn");
    if (topBtn) {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 300) {
                topBtn.style.opacity = "1";
                topBtn.style.visibility = "visible";
            } else {
                topBtn.style.opacity = "0";
                topBtn.style.visibility = "hidden";
            }
        });

        topBtn.addEventListener("click", () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        });
    }

    // 카드 호버 효과 (CSS로 처리됨)
    const cards = document.querySelectorAll(".korean-card");
    cards.forEach((card, index) => {
        // 카드에 지연 애니메이션 적용
        card.style.transitionDelay = `${index * 0.1}s`;
    });

    // 버튼 클릭 효과
    const buttons = document.querySelectorAll(".korean-btn");
    buttons.forEach((button) => {
        button.addEventListener("click", function (e) {
            // 리플 효과 생성
            const ripple = document.createElement("span");
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;

            ripple.style.width = ripple.style.height = size + "px";
            ripple.style.left = x + "px";
            ripple.style.top = y + "px";
            ripple.classList.add("ripple");

            this.appendChild(ripple);

            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });

    // 언어 버튼 전환 효과
    const langButtons = document.querySelectorAll(".lang-btn");
    langButtons.forEach((button) => {
        button.addEventListener("click", function (e) {
            e.preventDefault();

            // 모든 버튼에서 active 클래스 제거
            langButtons.forEach((btn) => btn.classList.remove("active"));

            // 클릭된 버튼에 active 클래스 추가
            this.classList.add("active");

            // 전환 애니메이션
            this.style.transform = "scale(0.95)";
            setTimeout(() => {
                this.style.transform = "scale(1)";
            }, 150);
        });
    });

    // 네비게이션 스크롤 효과
    const nav = document.querySelector(".korean-nav");
    if (nav) {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 50) {
                nav.style.background = "rgba(243, 243, 230, 0.98)";
                nav.style.boxShadow = "0 2px 20px rgba(28, 3, 3, 0.1)";
            } else {
                nav.style.background = "rgba(243, 243, 230, 0.95)";
                nav.style.boxShadow = "none";
            }
        });
    }

    // 텍스트 타이핑 효과 (선택사항)
    const heroText = document.querySelector(".hero-main-text");
    if (heroText) {
        const text = heroText.textContent;
        heroText.textContent = "";

        let i = 0;
        const typeWriter = () => {
            if (i < text.length) {
                heroText.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        };

        setTimeout(typeWriter, 500);
    }
});

// CSS 애니메이션을 위한 스타일 추가
const style = document.createElement("style");
style.textContent = `
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.6);
        transform: scale(0);
        animation: ripple-animation 0.6s linear;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    
    .korean-card {
        transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    }
    
    .lang-btn {
        transition: all 0.2s ease;
    }
`;
document.head.appendChild(style);
