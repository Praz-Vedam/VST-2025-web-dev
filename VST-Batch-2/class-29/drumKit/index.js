let numberOfButtons = document.querySelectorAll(".drum").length;

for (let i = 0; i < numberOfButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    //play sound
    let buttonInnerHtml = this.innerHTML;

    playSound(buttonInnerHtml);
    //button animation

    buttonAnimation(buttonInnerHtml);
  });
}

document.addEventListener("keypress", function (event) {
  //play sound
  playSound(event.key);

  //button animation
  buttonAnimation(event.key);
});

function playSound(key) {
  switch (key) {
    case "w": //audio play
      let tom1 = new Audio("./sounds/tom-1.mp3");
      tom1.play();
      break;
    case "a": //audio play
      let tom2 = new Audio("./sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s": //audio play
      let tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d": //audio play
      let tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    case "j": //audio play
      let snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "k": //audio play
      let crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "l": //audio play
      let kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;
    default:
      console.log(key);
  }
}

function buttonAnimation(currentKey) {
  let activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
}
