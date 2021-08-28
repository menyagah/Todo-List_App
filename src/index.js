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

for (let i = 0; i < todoItem().length; i += 1) {
  const inCheck = document.querySelector(`#check-${todoItem()[i].id}`);
  inCheck.addEventListener('input', (e) => {
    checkItem(i, e, todoItem());
    localStorage.setItem('todo', JSON.stringify(todoItem()));
  });
}
