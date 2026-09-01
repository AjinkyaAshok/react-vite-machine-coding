import React, { useState } from "react";

export default function Todo() {
  const [task, setTask] = useState("");
  const [todo, setTodo] = useState([]);

  const handleTodo = () => {
    if (!task.trim()) return;
    setTodo([
      ...todo,
      {
        id: Date.now(),
        todo: task,
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
    <div className="mx-auto flex-col  h-screen flex justify-center items-center">
      Todo
      <input
        className="bg-amber-100 rounded-2xl"
        type="text"
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={() => handleTodo()}>ADD</button>
      {todo.map((item) => (
        <div>
          <h1
            className={item.completed ? "line-through" : ""}
            onClick={() => handleStrike(item.id)}
          >
            {item.todo}
          </h1>
          <span>
            <button onClick={() => handleDelete(item.id)}>-DELETE-</button>
          </span>
        </div>
      ))}
    </div>
  );
}
