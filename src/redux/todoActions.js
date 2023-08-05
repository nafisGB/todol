// src/redux/todoActions.js
export const addTodo = (todo) => ({
    type: "ADD_TODO",
    payload: todo,
  });
  
  export const removeTodo = (todoId) => ({
    type: "REMOVE_TODO",
    payload: todoId,
  });
  
  export const toggleTodo = (todoId) => ({
    type: "TOGGLE_TODO",
    payload: todoId,
  });
  