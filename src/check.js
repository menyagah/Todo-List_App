const checkItem = (i, e, todoList) => {
  // Updates "completed" property of a particular todo item in-place
  todoList[i].completed = e.target.checked;
  return todoList[i];
};

export default checkItem;