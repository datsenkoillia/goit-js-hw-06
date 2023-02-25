const categoriesEl = document.querySelectorAll('li.item');
console.log(`Number of categories: `, categoriesEl.length);

categoriesEl.forEach(el => {
  console.log('');
  console.log(`Category: `, el.querySelector('h2').textContent);
  console.log(`Elements: `, el.querySelectorAll('li').length);
});