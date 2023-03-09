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
