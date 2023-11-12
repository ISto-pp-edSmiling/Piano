const pianoKeys = document.querySelectorAll(".piano-keys .key"),
volumeSlider = document.querySelector(".volume-slider input"),
keysCheckbox = document.querySelector(".keys-checkbox input");

let allKeys = [], 
audio = new Audio("tunes/a.wav"); // by defualt, audio src is "a" tune, however you could just leave this empty

const playTune = (key) => {
    audio.src = `tunes/${key}.wav`; // passing audio based on key pressed
    audio.play(); // playing audio

    const clickedKey = document.querySelector(`[data-key="${key}"]`);
    clickedKey.classList.add("active"); // adding active class to the clicked key element
    setTimeout(() => { // removing active class after 150ms from the clicked key element
       clickedKey.classList.remove("active") 
    }, 120);
}

pianoKeys.forEach(key => {
    allKeys.push(key.dataset.key) // adding data-key value to the allKeys array
    // calling playTune function with passing data-key value as an argument
    key.addEventListener("click", () => playTune(key.dataset.key));
});

const handleVolume = (vol) => {
    audio.volume = vol.target.value; // passing the range slider valuie as an audio volume
}

const showHideKeys = () => {
    pianoKeys.forEach(key => key.classList.toggle("hide"))
}

const pressedKey = (yuh) => {
    // if the pressed key is in allKeys array, only call the playTune function
    if (allKeys.includes(yuh.key)) playTune(yuh.key);
}

keysCheckbox.addEventListener("click", showHideKeys);
document.addEventListener("keydown", pressedKey);
volumeSlider.addEventListener("input", handleVolume);