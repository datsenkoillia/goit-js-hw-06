const input = document.querySelector('input#font-size-control');
const text = document.querySelector('span#text');

function changeFontSize() {
  text.style.fontSize = input.value + 'px';
}

input.addEventListener('change', changeFontSize);
