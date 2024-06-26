var audio = document.getElementById("GalaxyCollapse");
var percentDisplay = document.getElementById("percentage");
var mphDisplay = document.getElementById("mphSpeed");
var slider = document.getElementById("myRange");
var msSpeed = 21.74224;
var playbackSpeed = 1;
var sliderNumber = 0;

function start() {
    audio.currentTime = 0;
    audio.play();
    audio.loop = true;
    audio.preservesPitch = false;
    updateUI();
}


function updateUI() {
    percentDisplay.innerHTML = (100*playbackSpeed).toFixed(1);
    mphDisplay.innerHTML = (Math.pow(1.3, -1*sliderNumber)*48.636*playbackSpeed).toFixed(1);
}


slider.oninput = function () {
    sliderNumber = this.value;
    playbackSpeed = Math.pow(1.3, sliderNumber) * 2.236936/48.636 * msSpeed;
    audio.playbackRate = playbackSpeed;
    updateUI();
}



var geoID = navigator.geolocation.watchPosition(success, error, options);
var options;
options = {
    enableHighAccuracy: true,
    timeout: 500,
    maximumAge: 0,
};
function success(position) {
    // Get speed here
    msSpeed = position.coords.speed;
    if(msSpeed === null) {
        console.log(">:(");
        msSpeed = 21.74224;
    } else {
        playbackSpeed = Math.pow(1.3, sliderNumber) * 2.236936/48.636 * msSpeed;
        audio.playbackRate = playbackSpeed;
        updateUI();
    }
}
function error() {
    console.log(":(");
}