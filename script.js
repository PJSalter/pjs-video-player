//***************** JavaScript Here ********************//

// picking up the video element with DOM Manipulation.
const graphicalTranformClip = document.querySelector('video');

// picking up the stop button icon from the controls
const stopMe = document.getElementById('stop-me');

// creating function to play and pause video.
const vidControls = () => {
    graphicalTranformClip.paused ? graphicalTranformClip.play() : graphicalTranformClip.pause();
}

// function for allow video to stop once user clicks on stop icon.
const stopMyVideo = () => graphicalTranformClip.pause();
  

//event listener for user to click the video to play or pause
graphicalTranformClip.addEventListener('click', vidControls);

//event listener to stop video once clicked
stopMe.addEventListener('click', stopMyVideo);