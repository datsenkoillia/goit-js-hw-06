function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const valueInput = document.querySelector('input');

const createBtn = document.querySelector('[data-create]');

const destroyBtn = document.querySelector('[data-destroy]');

const divEl = document.querySelector('#boxes');

function buildBoxes() {
  let amount = Number(valueInput.value);
  const boxesArray = [];
  for (let i = 0; i < amount; i += 1) {
    const divItem = document.createElement('div');
    divItem.classList.add('div-items');
    divItem.style.backgroundColor = getRandomHexColor();
    divItem.style.width = 30 + i * 10 + 'px';
    divItem.style.height = 30 + i * 10 + 'px';

    boxesArray.push(divItem);
  }

  divEl.append(...boxesArray);
}

function destroyBoxes() {
  const divItems = document.querySelectorAll('.div-items');
  divItems.forEach(item => item.remove())

}

createBtn.addEventListener('click', buildBoxes);

destroyBtn.addEventListener('click', destroyBoxes);
