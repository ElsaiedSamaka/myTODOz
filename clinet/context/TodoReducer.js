import { ADD_TODO, EDIT_TODO, REMOVE_TODO } from "./Constants";
import { generateId } from "./helper";
export default (state, action) => {
  switch (action.type) {
    case REMOVE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    case ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          { ...action.payload, id: generateId( state.todos ), }
        ],
      };
    case EDIT_TODO:
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
