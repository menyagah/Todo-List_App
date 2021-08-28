// The responsibility of this function is to  read from the localstorage and update the ui

const displayItems = () => {
    const itemsContainer = document.querySelector('.items');
    itemsContainer.innerHTML = ''
  const todoList = JSON.parse(localStorage.getItem('todo') || '[]');
  todoList.forEach(({ description, id, completed }) => {
    itemsContainer.innerHTML += `
    <li class="cardlist--sub"><input type="checkbox" name="" ${completed && 'checked'} class="cardlist--check" id="check-${id}">${description}</li>`;
  });
  
};

export default displayItems;
