import React, { createContext, useReducer } from "react";
import { ADD_TODO, EDIT_TODO, LOCAL_STORAGE_KEY, REMOVE_TODO } from "./Constants";
import todosReducer from "./TodoReducer";
let todos=[]
const initialState = {
  todos
};
if (process.browser && localStorage.getItem(LOCAL_STORAGE_KEY)) {
  todos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
}


export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(todosReducer, initialState);

  function removeTodo(id) {
    dispatch({
      type: REMOVE_TODO,
      payload: id,
    });
  }

  function addTodo(todo) {
    dispatch({
      type: ADD_TODO,
      payload: todo,
    });
  }

  function editTodo(todo) {
    dispatch({
      type: EDIT_TODO,
      payload: todo,
    });
  }
   function updateTodos(todos) {
    dispatch({
      type: UPDATE_NOTES,
      payload: todos,
    })
  }


  return (
    <GlobalContext.Provider
      value={{
        todos: state.todos,
        removeTodo,
        addTodo,
        editTodo,
        updateTodos
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
