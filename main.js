import './style.css';

//'https://randomuser.me/api/'

const img = document.getElementById('img');
console.log(img);

getRandomPerson();
async function getRandomPerson() {
  const data = await fetch('https://randomuser.me/api/');
  const person = await data.json();
  img.src = person.results[0].picture.large;
}

//authentication

const nameInput = document.getElementById('name-input');
const passwordInput = document.getElementById('password-input');
console.log(nameInput);
console.log(passwordInput);

let name = '';
let password = '';
//handle name
function nameChangeHandler(e) {
  name = e.target.value;
}

nameInput.addEventListener('input', nameChangeHandler);

//handle password

function passwordChangedHandler(e) {
  password = e.target.value;
}

passwordInput.addEventListener('input', passwordChangedHandler);

const submitButton = document.getElementById('submit-button');
console.log(submitButton);

const slider = document.querySelector('.slider');
const text = document.querySelector('.signin-text');

function buttonHandler() {
  if (password == 'butter' && name == 'butter') {
    console.log('Your GOOD ');
    text.innerHTML = 'Now Signed In';
    slider.style.opacity = 1;
  } else {
    console.log('Get outtttta here!');
    text.innerHTML = 'Sign In info not correct';
  }
}

submitButton.addEventListener('click', buttonHandler);

//update slider

function gameLoop() {
  window.requestAnimationFrame(gameLoop);
}

gameLoop();
