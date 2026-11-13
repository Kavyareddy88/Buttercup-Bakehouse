
document.addEventListener("DOMContentLoaded", () => {

    const modal = document.getElementById("blogModal");
    const headline = document.getElementById("randomArticleHeadline");
    const closeBtn = document.getElementById("blogModalClose");
    const okayBtn = document.getElementById("blogModalOkay");

    const randomHeadlines = [
        "A little sweetness goes a long way.",
        "The secret ingredient is always a little love.",
        "Good things take time, just like perfect pastry.",
        "Every crumb has a story to tell.",
        "Freshly baked happiness, one bite at a time.",
        "Some moments are simply made for cake.",
        "The beautiful art of baking from scratch.",
        "A warm oven and a happy heart."
    ];

    // OPEN ARTICLE POPUP
    document.querySelectorAll(".article-trigger").forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();

            const randomIndex = Math.floor(
                Math.random() * randomHeadlines.length
            );

            headline.textContent = randomHeadlines[randomIndex];
            modal.classList.add("active");
            document.body.style.overflow = "hidden";
        });
    });

    // CLOSE POPUP
    function closeModal() {
        modal.classList.remove("active");
        document.body.style.overflow = "";
    }

    closeBtn.addEventListener("click", closeModal);
    okayBtn.addEventListener("click", closeModal);

    // CLOSE WHEN CLICKING OUTSIDE
    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    // CLOSE WITH ESCAPE
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && modal.classList.contains("active")) {
            closeModal();
        }
    });

});

