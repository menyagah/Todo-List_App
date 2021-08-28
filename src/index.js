import checkItem from './check.js';
import './main.css';
import todoItem from './addRemove.js';
import displayItems from './displayList.js';

const card = document.querySelector('.cardlist_main');
  card.innerHTML = `<li class="cardlist--sub main">Today's To Do</li>
<li ><input type="text" class="cardlist--sub  input" placeholder="Add to your list..."></li>`;

card.innerHTML += `<li ><ul class="items"></ul></li>`
displayItems();
card.innerHTML += '<li class="cardlist--sub delete"><a href="#" class="delete_text">clear all completed</a></li>';

todoItem();
const todoList = JSON.parse(localStorage.getItem('todo') || '[]');
console.log('before', todoList);
for (let i = 0; i < todoList.length; i += 1) {
  const inCheck = document.getElementById(`check-${todoList[i].id}`);
  inCheck.addEventListener('input', (e) => {
    checkItem(i, e, todoList);
    console.log('after', todoList);
    localStorage.setItem('todo', JSON.stringify(todoList)); 
  });
}
