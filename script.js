 /* =========================================================
    PRAHARAM '26
    PHASE 2 — JAVASCRIPT
 ========================================================= */


/* =========================================================
   COUNTDOWN
========================================================= */

// PRAHARAM '26
// Event Date: 21 August 2026
// Timezone: India Standard Time (GMT+0530)

const eventDate = new Date(
    "August 21, 2026 00:00:00 GMT+0530"
).getTime();


const daysElement =
    document.getElementById("days");

const hoursElement =
    document.getElementById("hours");

const minutesElement =
    document.getElementById("minutes");

const secondsElement =
    document.getElementById("seconds");


function updateCountdown() {

    const now =
        new Date().getTime();

    const difference =
        eventDate - now;


    /* -----------------------------------------
       EVENT HAS STARTED
    ----------------------------------------- */

    if (difference <= 0) {

        daysElement.textContent = "00";
        hoursElement.textContent = "00";
        minutesElement.textContent = "00";
        secondsElement.textContent = "00";

        return;
    }


    /* -----------------------------------------
       CALCULATE TIME
    ----------------------------------------- */

    const days =
        Math.floor(
            difference /
            (1000 * 60 * 60 * 24)
        );


    const hours =
        Math.floor(
            (difference %
                (1000 * 60 * 60 * 24)) /
            (1000 * 60)
            / 60
        );


    const minutes =
        Math.floor(
            (difference %
                (1000 * 60 * 60)) /
            (1000 * 60)
        );


    const seconds =
        Math.floor(
            (difference %
                (1000 * 60)) /
            1000
        );


    /* -----------------------------------------
       DISPLAY
    ----------------------------------------- */

    daysElement.textContent =
        String(days).padStart(2, "0");


    hoursElement.textContent =
        String(hours).padStart(2, "0");


    minutesElement.textContent =
        String(minutes).padStart(2, "0");


    secondsElement.textContent =
        String(seconds).padStart(2, "0");

}


/* First update */

updateCountdown();


/* Update every second */

const countdownInterval =
    setInterval(
        updateCountdown,
        1000
    );


/* =========================================================
   GOOGLE FORM
========================================================= */

// PRAHARAM '26 Registration & Contribution Form

const googleFormURL =
    "https://docs.google.com/forms/d/e/1FAIpQLScDgaDlLFS5DSDYPwH6lDhesfFRS_N2kTVexyQbdPYu4I6fNw/viewform?usp=dialog";


const registerButton =
    document.getElementById("registerButton");


if (registerButton) {

    registerButton.href = googleFormURL;

}
/* =========================================================
   NAVBAR SCROLL EFFECT
========================================================= */

const navbar =
    document.querySelector(
        ".navbar"
    );


function updateNavbar() {

    if (!navbar) {
        return;
    }


    if (window.scrollY > 50) {

        navbar.style.background =
            "rgba(5, 5, 5, 0.96)";

        navbar.style.boxShadow =
            "0 10px 35px rgba(0, 0, 0, 0.25)";

    } else {

        navbar.style.background =
            "rgba(5, 5, 5, 0.68)";

        navbar.style.boxShadow =
            "none";
    }

}


window.addEventListener(
    "scroll",
    updateNavbar
);


/* Initial navbar state */

updateNavbar();


/* =========================================================
   SCROLL REVEAL ANIMATION
========================================================= */

const revealElements =
    document.querySelectorAll(
        ".intro, .section-heading, .event-card, .fund-content, .fund-card, .timeline-item, .register-box"
    );


/* Add initial state */

revealElements.forEach(
    function(element) {

        element.style.opacity = "0";

        element.style.transform =
            "translateY(30px)";

        element.style.transition =
            "opacity 0.8s ease, transform 0.8s ease";

    }
);


/* Observer */

const revealObserver =
    new IntersectionObserver(
        function(entries, observer) {

            entries.forEach(
                function(entry) {

                    if (!entry.isIntersecting) {
                        return;
                    }


                    entry.target.style.opacity =
                        "1";

                    entry.target.style.transform =
                        "translateY(0)";


                    observer.unobserve(
                        entry.target
                    );

                }
            );

        },
        {
            threshold: 0.12
        }
    );


revealElements.forEach(
    function(element) {

        revealObserver.observe(
            element
        );

    }
);


/* =========================================================
   EVENT CARD STAGGER
========================================================= */

const eventCards =
    document.querySelectorAll(
        ".event-card"
    );


eventCards.forEach(
    function(card, index) {

        card.style.transitionDelay =
            `${index * 80}ms`;

    }
);


/* =========================================================
   FUND CARD STAGGER
========================================================= */

const fundCards =
    document.querySelectorAll(
        ".fund-card"
    );


fundCards.forEach(
    function(card, index) {

        card.style.transitionDelay =
            `${index * 100}ms`;

    }
);


/* =========================================================
   SMOOTH ANCHOR NAVIGATION
========================================================= */

const navigationLinks =
    document.querySelectorAll(
        'a[href^="#"]'
    );


navigationLinks.forEach(
    function(link) {

        link.addEventListener(
            "click",
            function(event) {

                const targetId =
                    link.getAttribute("href");


                if (
                    !targetId ||
                    targetId === "#"
                ) {
                    return;
                }


                const target =
                    document.querySelector(
                        targetId
                    );


                if (!target) {
                    return;
                }


                event.preventDefault();


                const navbarHeight =
                    navbar
                        ? navbar.offsetHeight
                        : 0;


                const targetPosition =
                    target.getBoundingClientRect().top +
                    window.scrollY -
                    navbarHeight;


                window.scrollTo({

                    top: targetPosition,

                    behavior: "smooth"

                });

            }
        );

    }
);


/* =========================================================
   REDUCED MOTION SUPPORT
========================================================= */

const prefersReducedMotion =
    window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    );


if (
    prefersReducedMotion.matches
) {

    document.documentElement.style
        .scrollBehavior = "auto";

}


/* =========================================================
   PAGE LOADED
========================================================= */

window.addEventListener(
    "load",
    function() {

        document.body.classList.add(
            "page-loaded"
        );

    }
);
