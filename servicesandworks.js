document.addEventListener("DOMContentLoaded", () => {
    const label = document.getElementById("detail-label");
    const englishLink = document.getElementById("detail-en-link");

    function updatePageType() {
        const pageType = window.location.hash === "#works" ? "works" : "services";

        if (label) {
            label.textContent = pageType.toUpperCase();
        }

        if (englishLink) {
            englishLink.href = `index.html#${pageType}`;
        }
    }

    updatePageType();
    window.addEventListener("hashchange", updatePageType);
});
