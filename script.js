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

pianoKeys.forEach(eachk => {  // forEach is an iterator which looks for every instance of ".piano-keys .key".
    allKeys.push(eachk.dataset.key) // adding each data-key value to the allKeys array
    // calling playTune function with passing data-key value as an argument when a key is pressed but not when typed
    // look at pressedKey for when a keyboard button ias pressed
    eachk.addEventListener("click", () => playTune(eachk.dataset.key));
});

const handleVolume = (vol) => {
    audio.volume = vol.target.value; 
    // passing the range slider value as an audio volume
}

const showHideKeys = () => {
    pianoKeys.forEach(key => key.classList.toggle("hide"))
}

const pressedKey = (k) => {
    // if the pressed key is in allKeys array, call the playTune function
    // this pressedkey thing is only for keyboard use :)
    if (allKeys.includes(k.key)) playTune(k.key);
}

keysCheckbox.addEventListener("click", showHideKeys);
document.addEventListener("keydown", pressedKey);
volumeSlider.addEventListener("input", handleVolume);