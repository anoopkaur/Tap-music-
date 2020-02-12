// once it loads a function will run.
// after content loads code will run
window.addEventListener("load", () => {
  //access sounds from the index.html
  const sounds = document.querySelectorAll(".sound");

  // stores the pads to be clicked on for the music
  const pads = document.querySelectorAll(".pads div");
  const visual = document.querySelector(".visual");
  const colors = [
    "#ffdef2",
    "#f2e2ff",
    "#feffa3",
    "#ddfffc",
    "#aafbdc",
    "#baf6ff"
  ];

  console.log(sounds[0]);

  // Here is where the sound goes
  // code - loops through each individual pad and adds event listner
  pads.forEach((pad, index) => {
    pad.addEventListener("click", function() {
      // sound is reset on click so it can play again - doesn't have to wait for the track to finish
      sounds[index].currentTime = 0;
      //each of the sounds can play - taken by the index
      sounds[index].play();

      // this calls the function for pads which in turn calls the createBubbles function
      createBubbles(index);
    });
  });

  // Bubble making function
  const createBubbles = index => {
    const bubble = document.createElement("div");
    visual.appendChild(bubble);
    // selects the color of thr
    bubble.style.backgroundColor = colors[index];
    bubble.style.animation = "jump 1s ease";
    bubble.addEventListener("animationend", function() {
      visual.removeChild(this);
    });
  };
});
