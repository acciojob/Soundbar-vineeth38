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
		case 1 : 'applause':
        playSound('https://www.computerhope.com/jargon/m/example.mp3');
        break;
		case 2 : 'boo':
        playSound('https://www.computerhope.com/jargon/m/example.mp3');
        break;
      case 3 :'gasp':
        playSound('https://www.computerhope.com/jargon/m/example.mp3');
        break;
      case 4 :'toda':
        playSound('https://www.computerhope.com/jargon/m/example.mp3');
        break;
      case 5 :'victory':
        playSound('https://www.computerhope.com/jargon/m/example.mp3');
        break;
		case 6: 'wrong':
        playSound('https://www.computerhope.com/jargon/m/example.mp3');
        break;
		case 7: 'stop':
        pauseSound('https://www.computerhope.com/jargon/m/example.mp3');
        break;
      default:
        console.log('Invalid button');
    }
  });
});
