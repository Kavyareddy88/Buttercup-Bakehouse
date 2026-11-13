document.addEventListener("DOMContentLoaded", () => {

    const articles = document.querySelectorAll(".blog-detail-article");
    const sidebarLinks = document.querySelectorAll(".blog-sidebar-link");

    if (!articles.length || !sidebarLinks.length) return;

    const setActiveLink = (articleId) => {
        sidebarLinks.forEach(link => {
            link.classList.toggle(
                "active",
                link.getAttribute("href") === `#${articleId}`
            );
        });
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setActiveLink(entry.target.id);
            }
        });
    }, {
        rootMargin: "-20% 0px -65% 0px",
        threshold: 0
    });

    articles.forEach(article => observer.observe(article));

    sidebarLinks.forEach(link => {
        link.addEventListener("click", () => {
            const targetId = link.getAttribute("href").substring(1);
            setActiveLink(targetId);
        });
    });

});