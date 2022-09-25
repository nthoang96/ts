import React, { useState } from "react";
import NewTodo from "./components/NewTodo";
import TodoList from "./components/TodoList";

const App: React.FC = () => {
  const [todos, setTodos] = useState<{ id: string; text: string }[]>([]);

  const todoAddHandler = (text: string) => {
    setTodos([...todos, { id: `t${Math.random()}`, text }]);
  };

  const deleteHandler = (id: string) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => id !== todo.id);
    });
  };

  return (
    <div className="App">
      <NewTodo onAddTodo={todoAddHandler} />
      <TodoList items={todos} onDeleteTodo={deleteHandler} />
    </div>
  );
};

export default App;
