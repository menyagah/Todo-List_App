import displayItems from './displayList.js';

const deleteBtnCallBack = (todoList, i) =>  {
    localStorage.setItem('todo', JSON.stringify(todoList.filter((todo) => todo.id !== todoList[i].id)));
      displayItems();
}

export default deleteBtnCallBack