//your JS code here. If required.
function playSound(soundName) {
  var audio = new Audio('sounds/' + soundName + '.mp3');
  audio.play();
}

function stopSound() {
  var audioElements = document.getElementsByTagName('audio');
  for (var i = 0; i < audioElements.length; i++) {
    audioElements[i].pause();
    audioElements[i].currentTime = 0;
  }
}

