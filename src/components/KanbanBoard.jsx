// // import React, { useState } from "react";

// // export default function KanbanBoard() {
// //   const initialTasks = [
// //     { id: 1, title: "Learn React", status: "todo" },
// //     { id: 2, title: "Practice JS", status: "todo" },
// //     { id: 3, title: "Build UI", status: "in-progress" },
// //     { id: 4, title: "API Work", status: "in-progress" },
// //     { id: 5, title: "Login Page", status: "done" },
// //     { id: 6, title: "Portfolio", status: "done" },
// //   ];
// //   const [add, setAdd] = useState("");
// //   const [tasks, setTasks] = useState(initialTasks);

// //   const todoTask = tasks.filter((item) => item.status === "todo");
// //   const inprogressTask = tasks.filter((item) => item.status === "in-progress");
// //   const doneTask = tasks.filter((item) => item.status === "done");

// //   const moveTask = (id, newStatus) => {

// //     setTasks((prev) =>
// //       prev.map((item) =>
// //         item.id === id ? { ...item, status: newStatus } : item,
// //       ),
// //     );
// //   };

// //   const handleClick = () => {
// //     if(!add.trim()) return
// //     setTasks([...tasks, { id: Date.now(), title: add, status: "todo" }]);
// //   };

// //   return (
// //     <div className="flex flex-col mx-auto h-screen justify-center items-center">
// //       KanbanBoard
// //       <input
// //         onChange={(e) => setAdd(e.target.value)}
// //         type="text"
// //         value={add}
// //         placeholder="Add Task"
// //         className="border-2"
// //       />
// //       <button onClick={handleClick}>ADD TASK</button>
// //       <div className="flex gap-10">
// //         <div className="border-2 p-10">
// //           <h1>TODO</h1>

// //           {todoTask.map((item) => (
// //             <div key={item.id}>
// //               <h1>
// //                 {item.title}
// //                 <button onClick={() => moveTask(item.id, "in-progress")}>
// //                   {"=>"}
// //                 </button>
// //               </h1>
// //             </div>
// //           ))}
// //         </div>
// //         <div className="border-2 p-10">
// //           <h1>IN PROGRESS</h1>
// //           {inprogressTask.map((item) => (
// //             <div key={item.id}>
// //               <h1>
// //                 <button onClick={() => moveTask(item.id, "todo")}>
// //                   {"<="}
// //                 </button>
// //                 {item.title}
// //                 <button onClick={() => moveTask(item.id, "done")}>
// //                   {"=>"}
// //                 </button>
// //               </h1>
// //             </div>
// //           ))}
// //         </div>
// //         <div className="border-2 p-10">
// //           <h1>DONE</h1>
// //           {doneTask.map((item) => (
// //             <div key={item.id}>
// //               <h1>
// //                 {" "}
// //                 <button onClick={() => moveTask(item.id, "in-progress")}>
// //                   {"<="}
// //                 </button>
// //                 {item.title}
// //               </h1>
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// import React, { useState } from "react";

// export default function KanbanBoard() {
//   const [name, setName] = useState("");
//   const initialTasks = [
//     { id: 1, title: "Learn React", status: "todo" },
//     { id: 2, title: "Practice JS", status: "todo" },
//     { id: 3, title: "Build UI", status: "in-progress" },
//     { id: 4, title: "API Work", status: "in-progress" },
//     { id: 5, title: "Login Page", status: "done" },
//     { id: 6, title: "Portfolio", status: "done" },
//   ];

//   const [tasks, setTasks] = useState(initialTasks);

//   const handleMove = (id, newStatus) => {
//     setTasks((prev) =>
//       prev.map((item) =>
//         item.id === id ? { ...item, status: newStatus } : item,
//       ),
//     );
//   };

//   const handleClick = () => {
//     setTasks([
//       ...tasks,
//       {
//         id: Date.now(),
//         title: name,
//         status: "todo",
//       },
//     ]);
//   };

//   return (
//     <div className="flex flex-col h-screen mx-auto justify-center items-center">
//       KanbanBoard
//       <input type="text" onChange={(e) => setName(e.target.value)} />
//       <button onClick={handleClick}>ADD</button>
//       <div className="flex gap-5">
//         <div className="border-2 w-50 h-50 text-center">
//           <h1>TODO</h1>
//           {tasks.map((item) =>
//             item.status === "todo" ? (
//               <h1 key={item.id}>
//                 {item.title}
//                 <button onClick={() => handleMove(item.id, "in-progress")}>
//                   {"=>"}
//                 </button>
//               </h1>
//             ) : (
//               ""
//             ),
//           )}
//         </div>
//         <div className="border-2 w-50 h-50 text-center">
//           <h1>IN PROGRESS</h1>
//           {tasks.map((item) =>
//             item.status === "in-progress" ? (
//               <h1 key={item.id}>
//                 <button onClick={() => handleMove(item.id, "todo")}>
//                   {"<="}
//                 </button>
//                 {item.title}
//                 <button onClick={() => handleMove(item.id, "done")}>
//                   {"=>"}
//                 </button>
//               </h1>
//             ) : (
//               ""
//             ),
//           )}
//         </div>
//         <div className="border-2 w-50 h-50 text-center">
//           <h1>DONE</h1>
//           {tasks.map((item) =>
//             item.status === "done" ? (
//               <h1 key={item.id}>
//                 <button onClick={() => handleMove(item.id, "in-progress")}>
//                   {"<="}
//                 </button>
//                 {item.title}
//               </h1>
//             ) : (
//               ""
//             ),
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

import React, { useState } from "react";

export default function KanbanBoard() {
  const [text, setText] = useState("");
  const initialTasks = [
    { id: 1, title: "Learn React", status: "todo" },
    { id: 2, title: "Practice JS", status: "todo" },
    { id: 3, title: "Build UI", status: "in-progress" },
    { id: 4, title: "API Work", status: "in-progress" },
    { id: 5, title: "Login Page", status: "done" },
    { id: 6, title: "Portfolio", status: "done" },
  ];
  const [task, setTask] = useState(initialTasks);

  const handleChange = (id, newStatus) => {
    setTask((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, status: newStatus } : item,
      ),
    );
  };

  const handleAdd = () => {
    setTask([
      ...task,
      {
        id: Date.now(),
        title: text,
        status: "todo",
      },
    ]);
  };

  return (
    <div className="flex flex-col mx-auto justify-center items-center h-screen">
      KanbanBoard
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={() => handleAdd()}>ADD</button>
      <div className="flex gap-2">
        <div className="border-2 h-50 w-50 text-center">
          TODO
          {task.map((item) =>
            item.status === "todo" ? (
              <h1 key={item.id}>
                {item.title}
                <button onClick={() => handleChange(item.id, "in-progress")}>
                  {"=>"}
                </button>
              </h1>
            ) : (
              ""
            ),
          )}
        </div>
        <div className="border-2 h-50 w-50 text-center">
          IN-PROGRESS
          {task.map((item) =>
            item.status === "in-progress" ? (
              <h1 key={item.id}>
                <button onClick={() => handleChange(item.id, "todo")}>
                  {"<="}
                </button>
                {item.title}
                <button onClick={() => handleChange(item.id, "done")}>
                  {"=>"}
                </button>
              </h1>
            ) : (
              ""
            ),
          )}
        </div>
        <div className="border-2 h-50 w-50 text-center">
          COMPLETED
          {task.map((item) =>
            item.status === "done" ? (
              <h1 key={item.id}>
                <button onClick={() => handleChange(item.id, "in-progress")}>
                  {"<="}
                </button>
                {item.title}
              </h1>
            ) : (
              ""
            ),
          )}
        </div>
      </div>
    </div>
  );
}
