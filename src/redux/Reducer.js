const initialState = {
  list: [],
  filteredList: [],
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
        list: [...state.list, action.task],
      };
    case "SHOW_ACTIVE":
      return {
        ...state,
      };
    case "DELETE_TODO":
      return {
        ...state,
        list: [
          ...state.list.slice(0, action.index),
          ...state.list.splice(action.index + 1),
        ],
      };
    default:
      return state;
  }
};

export default todos;
