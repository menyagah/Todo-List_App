const checkItem = (i, e, todoList) => {
  todoList[i].completed = e.target.checked;
  console.log(todoList[i]);
};

export default checkItem;