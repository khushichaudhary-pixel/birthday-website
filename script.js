/* =========================================================
   BIRTHDAY WEBSITE JAVASCRIPT
   ========================================================= */


/* =========================================================
   PAGE NAVIGATION
   ========================================================= */

function showPage(pageNumber) {

    // Find all pages
    const pages = document.querySelectorAll(".page");


    // Remove active state from every page
    pages.forEach(function(page) {

        page.classList.remove("active");

    });


    // Find the requested page
    const selectedPage =
        document.getElementById("page" + pageNumber);


    // Show it
    if (selectedPage) {

        selectedPage.classList.add("active");

    }


    // Always start the new page from the top
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* =========================================================
   BIRTHDAY CAKE — BLOW CANDLES
   ========================================================= */

function blowCandles() {

    const candles =
        document.querySelector(".candles");

    const message =
        document.getElementById("wishMessage");


    // Make sure the elements exist
    if (!candles || !message) {
        return;
    }


    // Turn off flames
    candles.classList.add("blown");


    // Show birthday message
    message.classList.add("show");


    // Create some confetti
    createConfetti();

}


/* =========================================================
   SIMPLE CONFETTI
   Lightweight — no external library needed.
   ========================================================= */

function createConfetti() {

    const amount = 50;


    for (let i = 0; i < amount; i++) {

        const piece =
            document.createElement("div");


        piece.style.position = "fixed";

        piece.style.width = "7px";

        piece.style.height = "7px";

        piece.style.background =
            i % 2 === 0
                ? "#e7a4b8"
                : "#b85c78";

        piece.style.left =
            Math.random() * 100 + "vw";

        piece.style.top = "-10px";

        piece.style.zIndex = "2000";

        piece.style.borderRadius = "2px";

        piece.style.pointerEvents = "none";


        const duration =
            2 + Math.random() * 3;


        piece.style.animation =
            `confettiFall ${duration}s linear forwards`;


        document.body.appendChild(piece);


        // Remove it after animation
        setTimeout(function() {

            piece.remove();

        }, duration * 1000);

    }

}


/* =========================================================
   CONFETTI ANIMATION
   ========================================================= */

const confettiStyle =
document.createElement("style");


confettiStyle.innerHTML = `

@keyframes confettiFall {

    0% {

        transform:
            translateY(0)
            rotate(0deg);

        opacity: 1;

    }

    100% {

        transform:
            translateY(110vh)
            rotate(720deg);

        opacity: 0;

    }

}

`;


document.head.appendChild(confettiStyle);


/* =========================================================
   OPTIONAL MUSIC
   =========================================================

   If you uncommented the audio element in HTML,
   you can use this section.

*/


/*

document.addEventListener("click", function() {

    const music =
        document.getElementById("birthdayMusic");

    if (!music) return;

    music.volume = 0.25;

    music.play().catch(function() {

        // Browser may block autoplay.
        // User interaction is required.

    });

}, { once: true });

*/


/* =========================================================
   PREVENT BROKEN IMAGE ICONS
   =========================================================

   If you forget a photo, this replaces it with
   a soft pink placeholder.

*/

document.querySelectorAll(".polaroid img").forEach(function(img) {

    img.addEventListener("error", function() {

        this.style.background = "#fcecef";

        this.style.objectFit = "none";

        this.alt = "Add your photo here ♡";

    });

});