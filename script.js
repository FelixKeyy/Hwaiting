const yesBtn = document.getElementById('yes');
const noBtn = document.getElementById('no');
const song = document.getElementById('song');
const images = document.querySelectorAll('.fade');
const message = document.getElementById('message');
const buttons = document.getElementById('buttons');
const slideshow = document.getElementById('slideshow');
const caption = document.getElementById('caption');

let yesSize = 1;
let currentImg = 0;
let currentMsg = 0;

// Texts that appear during the slideshow
const messages = [
  "See? You’re still capable of smiling 🌸",
  "Even on the hard days, you’re not alone 💫",
  "I’m proud of you, even on the days when you feel small 🫶",
  "You’re loved, more than you realize 💖",
  "Whenever you forget, just come back here 🌷"
];

// When she clicks "No"
noBtn.addEventListener('click', () => {
  yesSize += 0.2;
  yesBtn.style.transform = `scale(${yesSize})`;

  // Optional: small comforting messages
  const replies = [
    "Teken tombol yang sebelahnya !!",
    "Salah teken kocak!!!",
    "Press yang sebelahnyaaaa",
    "Press SEBELAHHHHH"
  ];
  const randomReply = replies[Math.floor(Math.random() * replies.length)];
  message.textContent = randomReply;
});

// When she clicks "Yes"
yesBtn.addEventListener('click', () => {
  buttons.style.display = 'none';
  message.style.opacity = 0;

  setTimeout(() => {
    song.play();
    slideshow.style.display = 'block';
    showImage();
  }, 1000);
});

// Function to fade images & captions
function showImage() {
  images.forEach((img, i) => (img.style.opacity = i === currentImg ? 1 : 0));
  caption.style.opacity = 0;

  setTimeout(() => {
    caption.textContent = messages[currentMsg];
    caption.style.opacity = 1;
  }, 800);

  currentImg = (currentImg + 1) % images.length;
  currentMsg = (currentMsg + 1) % messages.length;

  setTimeout(showImage, 4000);
}
