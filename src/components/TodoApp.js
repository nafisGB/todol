// src/components/TodoApp.js
import React from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

const TodoApp = () => {
  return (
    <div>
      <h1>Todo App</h1>
      <TodoInput />
      <TodoList />
    </div>
  );
};

export default TodoApp;
