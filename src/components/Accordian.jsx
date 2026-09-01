import React, { useState } from "react";

export default function Accordian() {
  const [active, setActive] = useState(null);

  let data = [
    {
      id: 1,
      title: "What is React?",
      content: "React is a JavaScript library for building user interfaces.",
    },
    {
      id: 2,
      title: "What is a component?",
      content:
        "A component is a reusable piece of code that represents a part of the user interface.",
    },
    {
      id: 3,
      title: "What is state?",
      content:
        "State is an object that holds data that may change over time and affects how the component renders.",
    },
    {
      id: 4,
      title: "What is props?",
      content:
        "Props are short for properties and are used to pass data from a parent component to a child component.",
    },
    {
      id: 5,
      title: "What is JSX?",
      content:
        "JSX is a syntax extension for JavaScript that allows you to write HTML-like code in your JavaScript files.",
    },
  ];

  const handleClick = (id) => {
    setActive(active === id ? null : id);
  };

  return (
    <div className="h-screen mx-auto justify-center items-center flex flex-col">
      Accordian
      {data.map((item) => (
        <div className="bg-amber-100 rounded-2xl m-2 p-2">
          <h1 key={item.id} onClick={() => handleClick(item.id)}>
            {item.title}
          </h1>
          {active === item.id && <h1>{item.content}</h1>}
        </div>
      ))}
    </div>
  );
}
