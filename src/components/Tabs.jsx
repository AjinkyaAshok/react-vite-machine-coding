// import React, { useState } from "react";

// export default function Tabs() {
//   const [activeTab, setActiveTab] = useState("ALL");
//   return (
//       <div>
//       <div>
//         <button onClick={() => setActiveTab("all")}>
//           All
//         </button>

//         <button onClick={() => setActiveTab("active")}>
//           Active
//         </button>

//         <button onClick={() => setActiveTab("completed")}>
//           Completed
//         </button>
//       </div>

//       <div>
//         {activeTab === "all" ? <h2>All Todos</h2>:<h1>select</h1>}

//         {activeTab === "active" ? <h2>Active Todos</h2>:<h1>select</h1>}

//         {activeTab === "completed" ? <h2>Completed Todos</h2>:<h1>select</h1>}
//       </div>
//     </div>
//   );
// }

import React, { useState } from "react";

export default function Tabs() {
  const [activeTab, setActiveTab] = useState("");

  const handleClick = (value) => {
    setActiveTab(value);
  };
  return (
    <div>
      <button onClick={() => handleClick("ALL")}>ALL</button>
      <button onClick={() => handleClick("Active")}>Active</button>
      <button onClick={() => handleClick("completed")}>Completed</button>
      <div>{activeTab === "ALL" && <h1>React</h1>}</div>
      <div>{activeTab === "Active" && <h1>Next</h1>}</div>
      <div>{activeTab === "completed" && <h1>Anuglar</h1>}</div>
    </div>
  );
}
