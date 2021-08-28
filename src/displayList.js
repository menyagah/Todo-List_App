// The responsibility of this function is to read from the localStorage and update the UI
const displayItems = () => {
  // Get list container
  const itemsContainer = document.querySelector('.items');
  // Remove all <li> from this container
  itemsContainer.innerHTML = '';

  // Get and parse data from locaStorage
  const todoList = JSON.parse(localStorage.getItem('todo') || '[]');

  todoList.reverse().forEach(({ description, id, completed }) => {
    // Add each todo item one by one to the list container
    itemsContainer.innerHTML += `
    <li class="cardlist--sub">
      <input type="checkbox" name="" ${completed && 'checked'} class="cardlist--check" id="check-${id}">
      ${description}
      <button id="deleteBtn-${id}">DELETE</button>
    </li>`;
  });
};

export default displayItems;
