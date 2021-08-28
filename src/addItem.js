import displayItems from './displayList.js';
import attachInputEventListeners from './attachEventListeners.js';

const addItem = () => {
  const description = document.querySelector('.input');
  description.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      // Read from locaStorage
      const todos = JSON.parse(localStorage.getItem('todo') || '[]');

      // Generate a random id
      const id = Math.random().toString(36).substr(0, 5);

      // Append the new todo item to previous todo items
      todos.push({ description: description.value, completed: false, id });

      // Update localStorage
      localStorage.setItem('todo', JSON.stringify(todos));

      description.value = '';

      // Update the UI (basically re-read from localStorage and display the list)
      displayItems();

      // Then attach "input" event listeners on the input checkboxes of todo items
      attachInputEventListeners();
    }
  });
};

export default addItem;