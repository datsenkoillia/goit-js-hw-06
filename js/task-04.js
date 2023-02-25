let counterValue = 0;

const incrementBtn = document.querySelector('[data-action=increment]');
const decrementBtn = document.querySelector('[data-action=decrement]');
const valueEl = document.querySelector('#value');

const onIncrement = () => {
  counterValue += 1;
  valueEl.textContent = counterValue;
};

const onDecrement = () => {
  counterValue -= 1;
  valueEl.textContent = counterValue;
};

incrementBtn.addEventListener('click', onIncrement);

decrementBtn.addEventListener('click', onDecrement);
