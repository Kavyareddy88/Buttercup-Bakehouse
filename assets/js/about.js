
/* =========================================
   BUTTERCUP TIMELINE — SCROLL ANIMATION
========================================= */

document.addEventListener("DOMContentLoaded", () => {

    const timelineItems = document.querySelectorAll(
        ".buttercup-timeline-item"
    );

    if (!timelineItems.length) return;

    // Fallback for browsers without IntersectionObserver
    if (!("IntersectionObserver" in window)) {
        timelineItems.forEach(item => {
            item.classList.add("is-visible");
        });
        return;
    }

    const timelineObserver = new IntersectionObserver(
        (entries, observer) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("is-visible");

                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.15,
            rootMargin: "0px 0px -40px 0px"
        }
    );

    timelineItems.forEach(item => {
        timelineObserver.observe(item);
    });

});

/* =========================================
   BUTTERCUP — WHY CHOOSE US ANIMATION
========================================= */

document.addEventListener("DOMContentLoaded", () => {
    const whyItems = document.querySelectorAll(".bc-why-reveal");

    if (!whyItems.length) return;

    if ("IntersectionObserver" in window) {
        const whyObserver = new IntersectionObserver(
            (entries, observer) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("bc-why-visible");
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.15,
                rootMargin: "0px 0px -35px 0px"
            }
        );

        whyItems.forEach((item) => {
            whyObserver.observe(item);
        });
    } else {
        whyItems.forEach((item) => {
            item.classList.add("bc-why-visible");
        });
    }
});

/* =========================================
   ABOUT PAGE — PASSION SECTION REVEAL
========================================= */

document.addEventListener("DOMContentLoaded", () => {
    const passionItems = document.querySelectorAll(".passion-reveal");

    if (!passionItems.length) return;

    if (!("IntersectionObserver" in window)) {
        passionItems.forEach((item) => {
            item.classList.add("passion-visible");
        });
        return;
    }

    const passionObserver = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("passion-visible");
                    observer.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.12,
            rootMargin: "0px 0px -30px 0px"
        }
    );

    passionItems.forEach((item) => {
        passionObserver.observe(item);
    });
});
