import React, { useState } from "react";

export default function Tabs() {
  const [activeTab, setActiveTab] = useState("ALL");
  return (
      <div>
      <div>
        <button onClick={() => setActiveTab("all")}>
          All
        </button>

        <button onClick={() => setActiveTab("active")}>
          Active
        </button>

        <button onClick={() => setActiveTab("completed")}>
          Completed
        </button>
      </div>

      <div>
        {activeTab === "all" ? <h2>All Todos</h2>:<h1>select</h1>}

        {activeTab === "active" ? <h2>Active Todos</h2>:<h1>select</h1>}

        {activeTab === "completed" ? <h2>Completed Todos</h2>:<h1>select</h1>}
      </div>
    </div>
  );
}
