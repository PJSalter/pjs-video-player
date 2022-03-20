//***************** JavaScript Here ********************//

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