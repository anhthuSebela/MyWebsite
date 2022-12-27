const header = document.getElementById('header');
let text = 'This is my header text';
let i = 0;

setInterval(function() {
  header.innerHTML += text[i];
  i++;
  if (i >= text.length) {
    clearInterval();
  }
}, 100);