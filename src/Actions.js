export const addTodo = (task) => {
  console.log("task", task);
  return {
    type: "add_todo",
    task,
  };
};

export const deleteTodo = (task) => {
  return {
    type: "delete_todo",
    task,
  };
};
