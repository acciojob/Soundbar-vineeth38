//your JS code here. If required.
const buttons = document.querySelectorAll('.btn');

// Function to play the corresponding sound
function playSound(soundFile) {
  const sound = new Audio(soundFile);
  sound.play();
}

// Event listener for button clicks
buttons.forEach(button => {
  button.addEventListener('click', function() {
    const buttonInnerHTML = this.innerHTML;
    switch (buttonInnerHTML) {
      case 'applause':
        playSound('https://www.computerhope.com/jargon/m/example.mp3');
        break;
      case 'boo':
        playSound('https://www.computerhope.com/jargon/m/example.mp3');
        break;
      case 'gasp':
        playSound('https://www.computerhope.com/jargon/m/example.mp3');
        break;
      case 'toda':
        playSound('https://www.computerhope.com/jargon/m/example.mp3');
        break;
      case 'victory':
        playSound('https://www.computerhope.com/jargon/m/example.mp3');
        break;
      case 'wrong':
        playSound('https://www.computerhope.com/jargon/m/example.mp3');
        break;
      case 'stop':
        pauseSound('https://www.computerhope.com/jargon/m/example.mp3');
        break;
      default:
        console.log('Invalid button');
    }
  });
});
