const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const ingredientsItems = ingredients.map(el => {
  const itemEl = document.createElement('li');
  itemEl.textContent = el;
  itemEl.classList.add('item');
  return itemEl;
});

const ingredientsList = document.querySelector('ul#ingredients');

ingredientsList.append(...ingredientsItems);
