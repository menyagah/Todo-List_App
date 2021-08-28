// The responsibility of this function is to  read from the localstorage and update the ui
import checkItem from './check.js';

const displayItems = () => {
    const itemsContainer = document.querySelector('.items');
    itemsContainer.innerHTML = '';
  const todoList = JSON.parse(localStorage.getItem('todo') || '[]');
  todoList.forEach(({ description, id, completed }, i) => {
    itemsContainer.innerHTML += `
    <li class="cardlist--sub"><input type="checkbox" name="" ${completed && 'checked'} class="cardlist--check" id="check-${id}">${description}</li>`;
    const inCheck = document.getElementById(`check-${todoList[i].id}`);
  inCheck.addEventListener('input', (e) => {
    checkItem(i, e, todoList);
    console.log('after', todoList);
    localStorage.setItem('todo', JSON.stringify(todoList)); 
  });
  });
  
  
};



export default displayItems;
