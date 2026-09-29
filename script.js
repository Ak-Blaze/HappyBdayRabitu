const continueFromVideo =
    document.getElementById("continueFromVideo");

const enterButton =
    document.getElementById("enterButton");

const story =
    document.getElementById("story");

const continueBtn =
    document.getElementById("continueBtn");

const continueFromCall =
    document.getElementById("continueFromCall");

const nextSection =
    document.getElementById("nextSection");

const playCall =
    document.getElementById("playCall");

const firstCallAudio =
    document.getElementById("firstCallAudio");

const playIcon =
    document.getElementById("playIcon");

const callStatus =
    document.getElementById("callStatus");

const tapText =
    document.getElementById("tapText");

const soundWaves =
    document.getElementById("soundWaves");


/* =========================
   ENTER UNIVERSE
========================= */

enterButton.addEventListener("click", () => {

    story.scrollIntoView({
        behavior: "smooth"
    });

});


/* =========================
   CONTINUE FROM INSTAGRAM
========================= */

continueBtn.addEventListener("click", () => {

    nextSection.scrollIntoView({
        behavior: "smooth"
    });

});


/* =========================
   PLAY FIRST CALL
========================= */

playCall.addEventListener("click", async () => {

    if (firstCallAudio.paused) {

        try {

            await firstCallAudio.play();

            playIcon.textContent = "Ⅱ";

            callStatus.textContent =
                "connected...";

            tapText.textContent =
                "listen to the memory";

            soundWaves.classList.add("active");

        } catch (error) {

            console.log(
                "Audio could not be played:",
                error
            );

        }

    } else {

        firstCallAudio.pause();

        playIcon.textContent = "▶";

        callStatus.textContent =
            "The first voice call";

        tapText.textContent =
            "press play to continue";

        soundWaves.classList.remove("active");

    }

});


/* =========================
   WHEN AUDIO ENDS
========================= */

firstCallAudio.addEventListener(
    "ended",
    () => {

        playIcon.textContent = "▶";

        callStatus.textContent =
            "The first voice call";

        tapText.textContent =
            "memory replay available";

        soundWaves.classList.remove("active");

    }
);


/* =========================
   CONTINUE
========================= */

continueFromCall.addEventListener(
    "click",
    () => {

        nextSection.scrollIntoView({
            behavior: "smooth"
        });

    }
);


continueFromVideo.addEventListener(
    "click",
    () => {

        window.scrollBy({
            top: window.innerHeight * 0.8,
            behavior: "smooth"
        });

    }
);

const continueFromWhy =
    document.getElementById("continueFromWhy");


continueFromWhy.addEventListener(
    "click",
    () => {

        window.scrollBy({
            top: window.innerHeight * 0.8,
            behavior: "smooth"
        });

    }
);

const continueFromSurvived =
    document.getElementById("continueFromSurvived");

continueFromSurvived.addEventListener("click", () => {
    document.getElementById("distanceSection").scrollIntoView({
        behavior: "smooth"
    });
});


const continueFromDistance =
    document.getElementById("continueFromDistance");

continueFromDistance.addEventListener("click", () => {
    document.getElementById("letterSection").scrollIntoView({
        behavior: "smooth"
    });
});

const continueFromLetter =
    document.getElementById("continueFromLetter");

continueFromLetter.addEventListener("click", () => {
    document.getElementById("birthdaySection").scrollIntoView({
        behavior: "smooth"
    });
});

const surpriseButton =
    document.getElementById("surpriseButton");

if (surpriseButton) {
    surpriseButton.addEventListener("click", () => {
        window.location.href = "surprise.html";
    });
}