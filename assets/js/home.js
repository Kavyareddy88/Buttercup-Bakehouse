/* Home page interactions are initialized by main.js. */

/* =========================================
   HOME 2 HERO INTERACTIONS
========================================= */

const h2Hero = document.querySelector(".h2-hero");
const h2HeroBackground = document.querySelector(
    ".h2-hero-background"
);

const h2MotionPreference = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
);

if (
    h2Hero &&
    h2HeroBackground &&
    window.matchMedia("(min-width: 901px)").matches &&
    !h2MotionPreference.matches
) {
    h2Hero.addEventListener("mousemove", (event) => {
        const bounds = h2Hero.getBoundingClientRect();

        const x =
            (event.clientX - bounds.left) / bounds.width - 0.5;

        const y =
            (event.clientY - bounds.top) / bounds.height - 0.5;

        h2HeroBackground.style.transform =
            `scale(1.08) translate(${x * -9}px, ${y * -7}px)`;
    });

    h2Hero.addEventListener("mouseleave", () => {
        h2HeroBackground.style.transform = "scale(1.08)";
    });
}

/* =====================================
   HOME 2 — ABOUT STATISTICS COUNTER
===================================== */

document.addEventListener("DOMContentLoaded", () => {

    const statsSection = document.querySelector("[data-about-stats]");

    if (!statsSection) return;

    const counters = statsSection.querySelectorAll(".h2-about-counter");

    let hasCounted = false;

    function animateCounter(counter) {

        const target = Number(counter.dataset.count);
        const suffix = counter.dataset.suffix || "";
        const duration = 1800;
        const startTime = performance.now();

        function updateCounter(currentTime) {

            const elapsed = currentTime - startTime;

            const progress = Math.min(elapsed / duration, 1);

            // Smooth ease-out animation
            const easedProgress = 1 - Math.pow(1 - progress, 4);

            const currentNumber = Math.floor(
                easedProgress * target
            );

            counter.textContent = currentNumber + suffix;

            if (progress < 1) {

                requestAnimationFrame(updateCounter);

            } else {

                counter.textContent = target + suffix;

            }

        }

        requestAnimationFrame(updateCounter);

    }


    function showStatistics() {

        if (hasCounted) return;

        hasCounted = true;

        statsSection.classList.add("is-visible");

        const reduceMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;

        counters.forEach(counter => {

            const target = counter.dataset.count;
            const suffix = counter.dataset.suffix || "";

            if (reduceMotion) {

                counter.textContent = target + suffix;

            } else {

                animateCounter(counter);

            }

        });

    }


    // Detect when statistics enter the screen
    if ("IntersectionObserver" in window) {

        const observer = new IntersectionObserver(

            entries => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        showStatistics();

                        observer.unobserve(statsSection);

                    }

                });

            },

            {
                threshold: 0.3
            }

        );

        observer.observe(statsSection);

    } else {

        showStatistics();

    }

});

/* =========================================
   HOME 2 — PROCESS SECTION REVEAL
========================================= */

document.addEventListener("DOMContentLoaded", () => {

    const processSection = document.querySelector(".h2-process");

    if (!processSection) return;

    const animatedItems = processSection.querySelectorAll(
        ".h2-process-gallery-item, .h2-process-step"
    );

    const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reduceMotion || !("IntersectionObserver" in window)) {
        animatedItems.forEach(item => {
            item.classList.add("is-visible");
        });

        return;
    }

    const processObserver = new IntersectionObserver(
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
            rootMargin: "0px 0px -35px 0px"
        }
    );

    animatedItems.forEach(item => {
        processObserver.observe(item);
    });

});

/* =========================================
   BUTTERCUP — HOME 2 JOURNAL ANIMATIONS
========================================= */

document.addEventListener("DOMContentLoaded", () => {

    const journal = document.querySelector(".h2-journal");

    if (!journal) return;

    const animatedElements = journal.querySelectorAll(
        ".h2-journal-heading, " +
        ".h2-journal-featured, " +
        ".h2-journal-more-heading, " +
        ".h2-journal-card, " +
        ".h2-journal-footer, " +
        ".h2-journal-signature"
    );

    const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    ).matches;

    if (
        reduceMotion ||
        !("IntersectionObserver" in window)
    ) {
        animatedElements.forEach(element => {
            element.classList.add("is-visible");
        });

        return;
    }

    journal.classList.add("h2-journal-js");

    const journalObserver = new IntersectionObserver(
        (entries, observer) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("is-visible");

                    observer.unobserve(entry.target);
                }

            });

        },
        {
            threshold: 0.12,
            rootMargin: "0px 0px -35px 0px"
        }
    );

    animatedElements.forEach(element => {
        journalObserver.observe(element);
    });

});
