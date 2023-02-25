const form = document.querySelector('.login-form');

function onFormSubmit(event) {
  event.preventDefault();

  const formElements = event.currentTarget.elements;
  const email = formElements.email.value;
  const password = formElements.password.value;

  function sendForm() {
    if (email === '' || password === '') {
      alert('Please fill all fields');
      return;
    }
    const formData = {
      email,
      password,
    };
    console.log(formData);
    event.target.reset();
  }

  sendForm();
}

form.addEventListener('submit', onFormSubmit);
