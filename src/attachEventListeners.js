import checkItem from './check.js';
import deleteBtnCallBack from './deleteBtnCallBack.js';
// handles attaching "input" event listeners to each of the checkbox inputs in todo items

const attachInputEventListeners = () => {
  const todoList = JSON.parse(localStorage.getItem('todo') || '[]');
  for (let i = 0; i < todoList.length; i += 1) {
    const inCheck = document.getElementById(`check-${todoList[i].id}`);
    inCheck.addEventListener('input', (e) => {
      checkItem(i, e, todoList); // Handles updating "completed" property for each todo item
      localStorage.setItem('todo', JSON.stringify(todoList));
    });
    const deleteBtn = document.getElementById(`deleteBtn-${todoList[i].id}`);
    deleteBtn.addEventListener('click', (e) => {
      deleteBtnCallBack(todoList, i);
    })
  }
};


export default attachInputEventListeners;
