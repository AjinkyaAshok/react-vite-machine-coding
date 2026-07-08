import React, { useState } from "react";
import Dashboard from "./Dashboard";
import Infinite from "./Infinite";
import useFetchMain from "./assets/useFetchMain";
import Playbox from "./Playbox";

export default function App() {
  const { user } = useFetchMain({ url: "https://jsonplaceholder.typicode.com/users" });
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);

  const handleAdd = () => {
    const newTodo = {
      id: todo.length + 1,
      des: todo,
      completed: false,
    };

    setTodoList((prev) => [...prev, newTodo]);
  };

  const handleDelete = (value) => {
    setTodoList((prev) => prev.filter((item) => item.id !== value));
  };

  const handleChange = (id) => {
    setTodoList((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item,
      ),
    );
  };

  return (
    <div>
      {/* <input
        type="text"
        placeholder="ADD TODO"
        onChange={(e) => setTodo(e.target.value)}
      />
      <button onClick={handleAdd}>ADD TODO</button>
      <br />
      <div>
        {todoList.map((item) => (
          <p key={item.id}>
            <input
              type="checkbox"
              checked={item.completed}
              onChange={() => handleChange(item.id)}
            />
            <span
              style={{
                textDecoration: item.completed ? "line-through" : "none",
              }}
            >
              {item.des}
            </span>

            <button onClick={() => handleDelete(item.id)}>DELETE</button>
          </p>
        ))}
      </div> */}
      {/* <Dashboard />
      {/* <Infinite /> */}
      {/* <div>
        {user.map((item) => (
          <h1 key={item.id}>{item.name}</h1>
        ))}
      </div>  */}
      <Playbox/>
    </div>
  );
}
