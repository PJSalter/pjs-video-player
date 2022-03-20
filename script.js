//***************** JavaScript Here ********************//

// picking up the video element with DOM Manipulation.
const graphicalTranformClip = document.querySelector('video');

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
  

//event listener for user to click the video to play or pause
graphicalTranformClip.addEventListener('click', vidControls);

//event listener for user to play video from clicking the play icon symbol in the controls.
playMe.addEventListener('click', updatePlayIcon);

//event listener to stop video once clicked
stopMe.addEventListener('click', stopMyVideo);