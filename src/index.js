import { checkbox } from './app.js'
import './main.css';

const todoList = [{
  description: 'wash the dishes',
  completed: false,
  id: 1,
},
{
  description: 'complete the dishes',
  completed: false,
  id: 2,
},
{
  description: 'complete To Do list project',
  completed: false,
  id: 3,
},
];

const card = document.querySelector('.cardlist_main');
card.innerHTML += `<li class="cardlist--sub main">Today's To Do</li>
<li ><input type="text" class="cardlist--sub  input" placeholder="Add to your list..."></li>`;


todoList.forEach(({ description}) => {
  const inputElement = document.createElement('input');
  inputElement.setAttribute("type","name")
  card.innerHTML += `
    <li class="cardlist--sub"><input type="checkbox" name="" class="cardlist--check" id="check">${description}</li>`;
});

card.innerHTML += '<li class="cardlist--sub delete"><a href="#" class="delete_text">clear all completed</a></li>';

const checkBox = document.getElementById('#check');
checkBox.addEventListener('click', () => {
  if (checkBox.checked) {
      console.log('checkbox works');
  }
});