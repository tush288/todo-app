export const updateState = (payload) => ({
  type: "UPDATE_STATE",
  payload,
});
export const addTodo = (task) => {
  //   console.log("task", task);
  return {
    type: "ADD_TODO",
    task,
  };
};

export const deleteTodo = (task) => {
  return {
    type: "DELETE_TODO",
    task,
  };
};
