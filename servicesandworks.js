document.addEventListener("DOMContentLoaded", () => {
    const koreanLink = document.getElementById("detail-kr-link");
    const englishLink = document.getElementById("detail-en-link");

    function updatePageType() {
        const pageType = window.location.hash === "#works" ? "works" : "services";

        if (koreanLink) {
            koreanLink.href = `servicesandworks.html#${pageType}`;
        }

        if (englishLink) {
            englishLink.href = `index.html#${pageType}`;
        }
    }

    updatePageType();
    window.addEventListener("hashchange", updatePageType);
});
