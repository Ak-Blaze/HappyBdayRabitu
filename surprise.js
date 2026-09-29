/* =========================================
   INTRO → MEMORIES
========================================= */

const startSurprise =
    document.getElementById("startSurprise");

const memoriesSection =
    document.getElementById("memoriesSection");

const memoryCards =
    document.querySelectorAll(".memory-card");

const memoryProgress =
    document.getElementById("memoryProgress");

const currentMemory =
    document.querySelector(".current-memory");

const memoriesMusic =
    document.getElementById("memoriesMusic");


let currentMemoryIndex = 0;
let memoryTimer = null;
let memoriesStarted = false;


/* =========================================
   MEMORY SLIDESHOW
========================================= */

function showMemory(index) {

    memoryCards.forEach((card, i) => {

        card.classList.toggle(
            "active",
            i === index
        );

    });


    const number =
        String(index + 1).padStart(2, "0");


    if (currentMemory) {

        currentMemory.textContent =
            number;

    }


    if (memoryProgress) {

        const progress =
            ((index + 1) /
            memoryCards.length) * 100;

        memoryProgress.style.width =
            `${progress}%`;

    }

}


function startMemorySlideshow() {

    clearInterval(memoryTimer);

    currentMemoryIndex = 0;

    showMemory(currentMemoryIndex);


    memoryTimer = setInterval(() => {

        currentMemoryIndex++;


        if (
            currentMemoryIndex >=
            memoryCards.length
        ) {

            currentMemoryIndex = 0;

        }


        showMemory(currentMemoryIndex);

    }, 4000);

}


function stopMemorySlideshow() {

    clearInterval(memoryTimer);

    memoryTimer = null;

}


/* =========================================
   START SURPRISE
========================================= */

startSurprise.addEventListener(
    "click",
    () => {

        memoriesStarted = true;

        startMemorySlideshow();

        memoriesSection.scrollIntoView({
            behavior: "smooth"
        });

    }
);


/* =========================================
   MEMORY SECTION MUSIC
========================================= */

const memoriesObserver =
    new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (
                    entry.isIntersecting &&
                    memoriesStarted
                ) {

                    /*
                     * Memories section entered.
                     * Start music.
                     */

                    if (
                        memoriesMusic &&
                        memoriesMusic.paused
                    ) {

                        memoriesMusic.play()
                            .catch((error) => {

                                console.log(
                                    "Music could not start:",
                                    error
                                );

                            });

                    }

                } else if (
                    !entry.isIntersecting &&
                    memoriesStarted
                ) {

                    /*
                     * Memories section left.
                     * Stop music completely.
                     */

                    if (memoriesMusic) {

                        memoriesMusic.pause();

                        memoriesMusic.currentTime = 0;

                    }


                    /*
                     * Stop slideshow.
                     */

                    stopMemorySlideshow();

                }

            });

        },
        {
            threshold: 0.25
        }
    );


memoriesObserver.observe(
    memoriesSection
);


/* =========================================
   MEMORIES → CAKE
========================================= */

const goToCake =
    document.getElementById("goToCake");

const cakeSection =
    document.getElementById("cakeSection");


goToCake.addEventListener(
    "click",
    () => {

        /*
         * Make absolutely sure
         * memories music is stopped.
         */

        if (memoriesMusic) {

            memoriesMusic.pause();

            memoriesMusic.currentTime = 0;

        }


        stopMemorySlideshow();


        cakeSection.scrollIntoView({
            behavior: "smooth"
        });

    }
);


/* =========================================
   CANDLES
========================================= */

const candles =
    document.querySelectorAll(".candle");

const candlesLeft =
    document.getElementById("candlesLeft");

const fireworks =
    document.getElementById("fireworks");

const birthdayDialog =
    document.getElementById("birthdayDialog");

let candlesBlown = 0;


candles.forEach((candle) => {

    candle.addEventListener(
        "click",
        () => {

            if (
                candle.classList.contains(
                    "blown"
                )
            ) {

                return;

            }


            candle.classList.add("blown");

            candlesBlown++;


            const remaining =
                candles.length -
                candlesBlown;


            if (remaining === 0) {

                candlesLeft.textContent =
                    "Make your wish... ✨";

                startFireworks();

            } else {

                candlesLeft.textContent =
                    `${remaining} candles left`;

            }

        }
    );

});


/* =========================================
   FIREWORKS
========================================= */

function startFireworks() {

    fireworks.classList.add("active");


    setTimeout(() => {

        birthdayDialog.classList.add(
            "active"
        );

    }, 2800);

}


/* =========================================
   BIRTHDAY DIALOG → VIDEO
========================================= */

const anotherSurprise =
    document.getElementById(
        "anotherSurprise"
    );

const videoSection =
    document.getElementById(
        "videoSection"
    );

const surpriseVideo =
    document.getElementById(
        "surpriseVideo"
    );


anotherSurprise.addEventListener(
    "click",
    async () => {

        birthdayDialog.classList.remove(
            "active"
        );


        /*
         * Start video.
         */

        if (surpriseVideo) {

            try {

                surpriseVideo.currentTime = 0;

                await surpriseVideo.play();

            } catch (error) {

                console.log(
                    "Video requires play button:",
                    error
                );

            }

        }


        setTimeout(() => {

            videoSection.scrollIntoView({
                behavior: "smooth"
            });

        }, 300);

    }
);


/* =========================================
   VIDEO → LOVE QUESTION
========================================= */

const loveQuestionButton =
    document.getElementById(
        "loveQuestionButton"
    );

const loveSection =
    document.getElementById(
        "loveSection"
    );


loveQuestionButton.addEventListener(
    "click",
    () => {

        loveSection.scrollIntoView({
            behavior: "smooth"
        });

    }
);


/* =========================================
   YES BUTTON
========================================= */

const yesButton =
    document.getElementById(
        "yesButton"
    );

const loveDialog =
    document.getElementById(
        "loveDialog"
    );


yesButton.addEventListener(
    "click",
    () => {

        loveDialog.classList.add(
            "active"
        );

    }
);


/* =========================================
   NO BUTTON — RUNS AWAY
========================================= */

const noButton =
    document.getElementById(
        "noButton"
    );


function moveNoButton() {

    const maxX =
        window.innerWidth -
        noButton.offsetWidth -
        30;

    const maxY =
        window.innerHeight -
        noButton.offsetHeight -
        30;


    const randomX =
        Math.max(
            15,
            Math.random() * maxX
        );

    const randomY =
        Math.max(
            15,
            Math.random() * maxY
        );


    noButton.style.position =
        "fixed";


    noButton.style.left =
        `${randomX}px`;


    noButton.style.top =
        `${randomY}px`;

}


/* Desktop */

noButton.addEventListener(
    "mouseenter",
    moveNoButton
);


/* Mobile */

noButton.addEventListener(
    "touchstart",
    (event) => {

        event.preventDefault();

        moveNoButton();

    }
);