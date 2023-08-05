// src/App.js
import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import TodoApp from "./components/TodoApp";

function App() {
  return (
    <Provider store={store}>
      <div className="container mt-4">
        <TodoApp />
      </div>
    </Provider>
  );
}

export default App;
