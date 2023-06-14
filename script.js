//your JS code here. If required.
var audio;

function playAudio(filename) {
  stopAudio(); // Stop any currently playing audio

  audio = new Audio('sounds/' + filename);
  audio.play();
}

function stopAudio() {
  if (audio) {
    audio.pause();
    audio.currentTime = 0;
  }
}
