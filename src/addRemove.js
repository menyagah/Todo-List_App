import displayItems from './displayList';

const todoItem = () => {
  const description = document.querySelector('.input');
  description.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      const todos = JSON.parse(localStorage.getItem('todo') || '[]');
      const id = Math.random().toString(36).substr(0, 5);
      todos.push({ description: description.value, completed: false, id });
      localStorage.setItem('todo', JSON.stringify(todos));
      description.value = '';
      displayItems();
    }
  });
};

export default todoItem;