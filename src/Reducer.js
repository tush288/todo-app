const initialState = {
  data: [],
};

const todos = (state = initialState, action) => {
  switch (action.type) {
    case "add_todo":
      return {};
    case "delete_todo":
      return {};
    default:
      return state;
  }
};

export default todos;
