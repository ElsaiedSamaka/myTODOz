export default (state, action) => {
  switch (action.type) {
    case "REMOVE_TODO":
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    case "ADD_TODO":
      return {
        ...state,
        todos: [
          ...state.todos,
          { ...action.payload, id: state.todos[state.todos.length - 1].id + 1 },
        ],
      };
    case "EDIT_TODO":
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === action.payload.id) {
            return action.payload;
          }
          return todo;
        }),
      };
    default:
      return state;
  }
};
