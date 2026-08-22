import React, { useState } from "react";
export default function Todo() {
  const [todo, setTodo] = useState([]);
  const [task, setTask] = useState("");
  // const [filtered, setFiltered] = useState([]);

  const handleAddTask = () => {
    if (!task.trim()) return;
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
      <h1 className="text-2xl">Todo List</h1>
      <input
        className="bg-gray-200 rounded-2xl"
        type="text"
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={handleAddTask}>ADD</button>
      {todo.map((item) => (
        <div key={item.id}>
          <span
            onClick={() => handleStrike(item.id)}
            className={item.completed ? "line-through" : ""}
          >
            {item.name}
          </span>
          <button onClick={() => handleDelete(item.id)}>X</button>
        </div>
      ))}
    </div>
  );
}
