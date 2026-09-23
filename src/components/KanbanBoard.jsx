import React, { useState } from "react";

export default function KanbanBoard() {
  const initialTasks = [
    { id: 1, title: "Learn React", status: "todo" },
    { id: 2, title: "Practice JS", status: "todo" },
    { id: 3, title: "Build UI", status: "in-progress" },
    { id: 4, title: "API Work", status: "in-progress" },
    { id: 5, title: "Login Page", status: "done" },
    { id: 6, title: "Portfolio", status: "done" },
  ];
  const [add, setAdd] = useState("");
  const [tasks, setTasks] = useState(initialTasks);

  const todoTask = tasks.filter((item) => item.status === "todo");
  const inprogressTask = tasks.filter((item) => item.status === "in-progress");
  const doneTask = tasks.filter((item) => item.status === "done");

  const moveTask = (id, newStatus) => {
    
    setTasks((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, status: newStatus } : item,
      ),
    );
  };

  const handleClick = () => {
    if(!add.trim()) return
    setTasks([...tasks, { id: Date.now(), title: add, status: "todo" }]);
  };

  return (
    <div className="flex flex-col mx-auto h-screen justify-center items-center">
      KanbanBoard
      <input
        onChange={(e) => setAdd(e.target.value)}
        type="text"
        value={add}
        placeholder="Add Task"
        className="border-2"
      />
      <button onClick={handleClick}>ADD TASK</button>
      <div className="flex gap-10">
        <div className="border-2 p-10">
          <h1>TODO</h1>

          {todoTask.map((item) => (
            <div key={item.id}>
              <h1>
                {item.title}
                <button onClick={() => moveTask(item.id, "in-progress")}>
                  {"=>"}
                </button>
              </h1>
            </div>
          ))}
        </div>
        <div className="border-2 p-10">
          <h1>IN PROGRESS</h1>
          {inprogressTask.map((item) => (
            <div key={item.id}>
              <h1>
                <button onClick={() => moveTask(item.id, "todo")}>
                  {"<="}
                </button>
                {item.title}
                <button onClick={() => moveTask(item.id, "done")}>
                  {"=>"}
                </button>
              </h1>
            </div>
          ))}
        </div>
        <div className="border-2 p-10">
          <h1>DONE</h1>
          {doneTask.map((item) => (
            <div key={item.id}>
              <h1>
                {" "}
                <button onClick={() => moveTask(item.id, "in-progress")}>
                  {"<="}
                </button>
                {item.title}
              </h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
