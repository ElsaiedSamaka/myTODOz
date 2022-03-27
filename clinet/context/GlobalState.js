import React, { createContext, useReducer } from "react";
import todosReducer from "./TodoReducer";

const initialState = {
  todos: [
    {
      id: 1,
      content: "Sample todo content",
      created_date: Date.now(),
      due_date: Date.now(),
    },
  ],
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(todosReducer, initialState);

  function removeTodo(id) {
    dispatch({
      type: "REMOVE_TODO",
      payload: id,
    });
  }

  function addTodo(todo) {
    dispatch({
      type: "ADD_TODO",
      payload: todo,
    });
  }

  function editTodo(todo) {
    dispatch({
      type: "EDIT_TODO",
      payload: todo,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        todos: state.todos,
        removeTodo,
        addTodo,
        editTodo,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
