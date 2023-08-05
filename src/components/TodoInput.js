// src/components/TodoInput.js
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/todoActions";

const TodoInput = () => {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (inputValue.trim()) {
      dispatch(addTodo({ id: Date.now(), text: inputValue, completed: false }));
      setInputValue("");
    }
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handleAddTodo}>Add Todo</button>
    </div>
  );
};

export default TodoInput;
