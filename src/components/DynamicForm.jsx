import React, { useState } from "react";

export default function DynamicForm() {
  const [form, setForm] = useState({});

  const fields = [
    { id: 1, name: "name", label: "Name", type: "text" },
    { id: 2, name: "email", label: "Email", type: "email" },
    { id: 3, name: "age", label: "Age", type: "number" },
  ];

  const handleClick = () => {
    console.log(form)
  };

  const handleChange = (value, name) => {
    setForm({ ...form, [name]: value });
  };
  return (
    <div className="flex flex-col h-screen items-center justify-center">
      DynamicForm
      {fields.map((item) => (
        <div key={item.id}>
          <label htmlFor="">{item.label}</label>
          <input
            onChange={(e) => handleChange(e.target.value, item.name)}
            className="border-2"
            type={item.type}
            value={form[item.name] || ""}
            name={item.name}
          />
        </div>
      ))}
      <button onClick={handleClick}>POST</button>
    </div>
  );
}
