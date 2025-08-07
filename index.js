const drumButtons = document.querySelectorAll(".drum");

const drumSounds = {
  "w": "sounds/tom-1.mp3",
  "a": "sounds/tom-2.mp3",
  "s": "sounds/tom-3.mp3",
  "d": "sounds/tom-4.mp3",
  "j": "sounds/snare.mp3",
  "k": "sounds/crash.mp3",
  "l": "sounds/kick-bass.mp3"
};

for (let i = 0; i < drumButtons.length; i++) {
  drumButtons[i].addEventListener("click", function () {
    const buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
}

document.addEventListener("keydown", function (event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});

function makeSound(key) {
  const soundPath = drumSounds[key];
  if (soundPath) {
    const audio = new Audio(soundPath);
    audio.play();
  } else {
    console.log(`No sound mapped for key: ${key}`);
  }
}

function buttonAnimation(currentKey) {
  const activeButton = document.querySelector("." + currentKey);
  if (activeButton) {
    activeButton.classList.add("pressed");
    setTimeout(function () {
      activeButton.classList.remove("pressed");
    }, 100);
  }
}