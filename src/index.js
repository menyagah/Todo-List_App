import './main.css';
import addItem from './addItem.js';
import displayItems from './displayList.js';
import attachInputEventListeners from './attachEventListeners.js';
import clearAllBtn from './deleteItem.js';

const card = document.querySelector('.cardlist_main');

card.innerHTML = `<li class="cardlist--sub main">Today's To Do</li>
<li ><input type="text" class="cardlist--sub  input" placeholder="Add to your list..."></li>`;

card.innerHTML += '<li ><ul class="items"></ul></li>';

// Initial rendering of todo items after reading from locaStorage
displayItems();

card.innerHTML += '<li class="cardlist--sub delete"><a href="#" class="delete_text">clear all completed</a></li>';

addItem();

// Then attach "input" event listeners on the input checkboxes of todo items
attachInputEventListeners();
clearAllBtn();