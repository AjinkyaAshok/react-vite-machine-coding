import React, { useState } from "react";
export default function Todo() {
  const [task, setTask] = useState("");
  const [todo, setTodo] = useState([]);

  const handleClick = () => {
    setTodo([
      ...todo,
      {
        id: Date.now(),
        name: task,
        completed: false,
      },
    ]);
    setTask("");
  };

  const handleDelete = (id) => {
    setTodo(todo.filter((item) => item.id !== id));
  };

  const handleStrike = (id) => {
    setTodo(
      todo.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item,
      ),
    );
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input type="text" onChange={(e) => setTask(e.target.value)} />
      <button onClick={handleClick}>ADD</button>
      {todo.map((item) => (
        <div key={item.id}>
          <span
            className={item.completed ? "line-through" : ""}
            onClick={() => handleStrike(item.id)}
          >
            {item.name} <button onClick={() => handleDelete(item.id)}>X</button>
          </span>
        </div>
      ))}
    </div>
  );
}
