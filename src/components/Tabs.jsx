// import React, { useState } from "react";

// export default function Tabs() {
//   const [activeTab, setActiveTab] = useState("");

//   const handleClick = (value) => {
//     setActiveTab(value);
//   };
//   return (
//     <div>
//       <button onClick={() => handleClick("ALL")}>ALL</button>
//       <button onClick={() => handleClick("Active")}>Active</button>
//       <button onClick={() => handleClick("completed")}>Completed</button>
//       <div>{activeTab === "ALL" && <h1>React</h1>}</div>
//       <div>{activeTab === "Active" && <h1>Next</h1>}</div>
//       <div>{activeTab === "completed" && <h1>Anuglar</h1>}</div>
//     </div>
//   );
// }
import React, { useState } from "react";

export default function Tabs() {
  const [tabs, setTabs] = useState("");
  return (
    <div className="h-screen mx-auto justify-center items-center flex">
      Tabs
      {["react", "angular", "next js"].map((item) => (
        <button
          onClick={() => setTabs(item)}
          className="bg-amber-200 flex m-2 rounded-2xl p-2"
        >
          {item}
        </button>
      ))}
      <div>
        {tabs === "react" && <h1>REACT IS SELECTED</h1>}
        {tabs === "angular" && <h1>ANGULAR IS SELECTED</h1>}
        {tabs === "next js" && <h1>NEXT JS IS SELECTED</h1>}
      </div>
    </div>
  );
}
