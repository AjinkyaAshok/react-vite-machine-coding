import React, { useState } from "react";

export default function FileExplorer() {
  const [open, setOpen] = useState([]);
  const data = [
    {
      id: 1,
      name: "src",
      type: "folder",
      children: [
        {
          id: 2,
          name: "components",
          type: "folder",
          children: [
            {
              id: 3,
              name: "Button.jsx",
              type: "file",
            },
            {
              id: 4,
              name: "Modal.jsx",
              type: "file",
            },
          ],
        },
        {
          id: 5,
          name: "App.jsx",
          type: "file",
        },
      ],
    },
    {
      id: 6,
      name: "package.json",
      type: "file",
    },
  ];

  const handleToggle = (id) => {
    setOpen((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };

  return (
    <div>
      FileExplorer
      {data.map((item) => (
        <div
          onClick={() => item.type === "folder" && handleToggle(item.id)}
          key={item.id}
        >
          {item.type === "folder" ? "📁" : "📄"} {item.name}
        </div>
      ))}
    </div>
  );
}
