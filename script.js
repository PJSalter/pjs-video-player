//***************** JavaScript Here ********************//

// picking up the video element with DOM Manipulation.
const graphicalTranformClip = document.querySelector('video');

// creating function to play and pause video.
const vidControls = () => {
    graphicalTranformClip.paused ? graphicalTranformClip.play() : graphicalTranformClip.pause();
}

//event listener for user to click the video to play or pause
graphicalTranformClip.addEventListener('click', vidControls);