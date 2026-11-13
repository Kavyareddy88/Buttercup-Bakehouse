document.addEventListener("DOMContentLoaded", () => {
    const categoryButtons = document.querySelectorAll(".category-btn");
    const productCards = document.querySelectorAll(".product-card");

    categoryButtons.forEach(button => {
        button.addEventListener("click", () => {
            const category = button.dataset.category;

            categoryButtons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");

            productCards.forEach(card => {
                const matches =
                    category === "all" ||
                    card.dataset.category === category;

                card.classList.toggle("hidden", !matches);
            });
        });
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const categoryButtons = document.querySelectorAll(".category-btn");
    const productCards = document.querySelectorAll(".product-card");

    categoryButtons.forEach(button => {
        button.addEventListener("click", () => {
            const category = button.dataset.category;

            categoryButtons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");

            productCards.forEach(card => {
                const matches =
                    category === "all" ||
                    card.dataset.category === category;

                card.classList.toggle("hidden", !matches);
            });
        });
    });
});
// =====================================
// PRODUCTS PAGE DARK MODE
// =====================================

document.addEventListener("DOMContentLoaded", () => {

    const themeToggle = document.querySelector(".theme-toggle");

    if (themeToggle) {
        themeToggle.addEventListener("click", () => {
            document.body.classList.toggle("dark-mode");
        });
    }

});