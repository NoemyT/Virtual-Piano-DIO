const keysPiano = document.querySelectorAll(".pianoKeys .key");
const volumeSlider = document.querySelector(".volumeSlider input");
const keyToggle = document.querySelector(".keysCheck input");

let mapedKeys = [];

const playTune = (key) => {
    let audio = new Audio(`assests/sfx/${key}.wav`);
    audio.play();

    const clickedKey = document.querySelector(`[data-key="${key}"]`);
    clickedKey.classList.add("active");
    setTimeout(() => {
        clickedKey.classList.remove("active");
    }, 150);
};

keysPiano.forEach((key) => {
    key.addEventListener("click", () => playTune(key.dataset.key));
    mapedKeys.push(key.dataset.key);
});

document.addEventListener("keydown", (e) => {
    if (mapedKeys.includes(e.key)) {
        playTune(e.key);
    }
});

const handleVolume = (e) => {
    document.querySelectorAll('audio').forEach(audio => {
        audio.volume = e.target.value;
    });
};

const keyDisplay = (e) => {
    keysPiano.forEach(key => key.classList.toggle("hide"));
}

volumeSlider.addEventListener("input", handleVolume);

keyToggle.addEventListener("click", keyDisplay);