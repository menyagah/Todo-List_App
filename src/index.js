import { greeting } from './app';

import "./main.css";


const todoList =  [{
    description:"wash the dishes",
    completed: false,
    id:1
},
{
    description:"complete the dishes",
    completed: false,
    id:2
},
{
    description:"complete To Do list project",
    completed: false,
    id:3
}
];

const card = document.querySelector('.cardlist_main');
const liTop = document.createElement('li');
liTop.innerHTML = `<li class="cardlist--sub main">Today's To Do</li>
<li ><input type="text" class="cardlist--sub  input" placeholder="Add to your list..."></li>`
card.appendChild(liTop)
todoList.forEach(({description, completed, id}) => {
    const li = document.createElement('li')
    li.innerHTML = `
    <li class="cardlist--sub"><input type="checkbox" name="" class="cardlist--check" id="">${description}</li>`
    card.appendChild(li)
});