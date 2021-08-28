import displayItems from './displayList.js';
import attachInputEventListeners from './attachEventListeners.js';

const clearAllBtn = () => {
  const clearAllChecked = document.querySelector('.delete_text');
  clearAllChecked.addEventListener('click', () => {
    const todoList = JSON.parse(localStorage.getItem('todo') || '[]');
    localStorage.setItem('todo', JSON.stringify(todoList.filter((todo) => todo.completed === false)));
    displayItems();
    attachInputEventListeners();
  });
};

export default clearAllBtn;