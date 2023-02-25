const input = document.querySelector('input#validation-input');

function validate(event) {
  if (event.currentTarget.value.trim().length === Number(input.getAttribute('data-length'))) {
    input.classList.add('valid');
  } else {
    input.classList.add('invalid');
  }
}

function unvalidate() {
  input.classList.remove('valid');
  input.classList.remove('invalid');
}

input.addEventListener('blur', validate);
input.addEventListener('focus', unvalidate);
