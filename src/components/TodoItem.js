// src/components/TodoItem.js
import React from "react";
import { useDispatch } from "react-redux";
import { removeTodo, toggleTodo } from "../redux/todoActions";

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();

  const handleToggleTodo = () => {
    dispatch(toggleTodo(todo.id));
  };

  const handleRemoveTodo = () => {
    dispatch(removeTodo(todo.id));
  };

  return (
    <div>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={handleToggleTodo}
      />
      <span style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
        {todo.text}
      </span>
      <button onClick={handleRemoveTodo}>Remove</button>
    </div>
  );
};

export default TodoItem;
