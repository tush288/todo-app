export const updateState = (payload) => ({
  type: "UPDATE_STATE",
  payload,
});
export const addTodo = (task) => {
  return {
    type: "ADD_TODO",
    task,
  };
};

export const deleteTodo = (index) => {
  return {
    type: "DELETE_TODO",
    index,
  };
};
export const changeInput = (value) => {
  return {
    type: "CHANGE_INPUT",
    value,
  };
};
