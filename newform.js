// Put DOM elements into variables
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();
  console.log(nameInput.value);
  localStorage.setItem(nameInput.value , emailInput.value);
  console.log(localStorage.getItem(nameInput.value));
}