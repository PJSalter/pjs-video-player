//***************** JavaScript Here ********************//

// main features focused on:
// click on video click screen to play and stop video as an option to the user.
// user will be able to play video by clicking on the play icon within the controls.
// user will be able to stop the video by clicking on the stop video icon from the controls.
// created a timer within the right hand side of the controls, user will be able to see the time duration that has been played by video in minutes and seconds.

// picking up the video element with DOM Manipulation.
const graphicalTranformClip = document.querySelector('video');

const timer = document.getElementById('limitOfVid');

// picking up the play icon
const playMe = document.getElementById('play-me');

// picking up the stop button icon from the controls
const stopMe = document.getElementById('stop-me');

// creating function to play and pause video.
const vidControls = () => {
    graphicalTranformClip.paused ? graphicalTranformClip.play() : graphicalTranformClip.pause();
}

// updating my play icon functioning.
const updatePlayIcon = () => graphicalTranformClip.play();

// function for allow video to stop once user clicks on stop icon.
const stopMyVideo = () => graphicalTranformClip.pause();

// function of a clock timer for showing the time duration of how much video the user has watched.
const updateControlTimer = () => {
// showing the minutes on display.
let mins = Math.floor(graphicalTranformClip.currentTime / 60);
if (mins < 10) {
  mins = '0' + String(mins);
}

//showing the seconds on display.
let secs = Math.floor(graphicalTranformClip.currentTime % 60);
if (secs < 10) {
  secs = '0' + String(secs);
}

timer.innerHTML = `${mins}:${secs}`;
}
  

//event listener for user to click the video to play or pause
graphicalTranformClip.addEventListener('click', vidControls);

graphicalTranformClip.addEventListener('timeupdate', updateControlTimer);

//event listener for user to play video from clicking the play icon symbol in the controls.
playMe.addEventListener('click', updatePlayIcon);

//event listener to stop video once clicked
stopMe.addEventListener('click', stopMyVideo);