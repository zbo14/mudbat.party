document.body.addEventListener('click', handleClick);
document.body.addEventListener('touchstart', handleTouch);
const peent = document.querySelector('.peent') as HTMLParagraphElement;
const audioElement = document.querySelector('audio') as HTMLAudioElement;

const audioContext = new AudioContext();
const track = audioContext.createMediaElementSource(audioElement);
track.connect(audioContext.destination);

function handleClick(event: MouseEvent) {
  handlePeent(event.clientX, event.clientY);
}

function handleTouch(event: TouchEvent) {
  handlePeent(event.touches[0].clientX, event.touches[0].clientY);
}

function handlePeent(x: number, y: number) {
  if (audioContext.state === 'suspended') {
    audioContext.resume();
  }

  const rect = peent.getBoundingClientRect();

  audioElement.currentTime = 0;
  peent.style.top = y - rect.height / 2 + 'px';
  peent.style.left = x - rect.width / 2 + 'px';

  if (peent.style.visibility !== 'visible') {
    peent.style.visibility = 'visible';
  }

  audioElement.play();
}
