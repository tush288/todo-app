const initialState = {
  list: [],
  filetereList: [],
};

const todos = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_STATE":
      return {
        ...state,
        ...action.payload,
      };
    case "ADD_TODO":
      return {
        ...state,
        list: [...state, action.task],
      };
    case "DELETE_TODO":
      return {};
    default:
      return state;
  }
};

export default todos;
