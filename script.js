//welcoming page
var h1 = document.getElementById('line');
var texts = [
  'I am a Full-Stack Web Developer from Gaza',
  'Take a look at my website',
  'And let me know what i can do for you!',
];
h1.textContent = texts[0];
var count = 0;
setInterval(function () {
  if (count !== 2) {
    h1.textContent = texts[count];
    count++;
  } else {
    h1.textContent = texts[count];
    count = 0;
  }
}, 2500);
