import React, { useState } from "react";

export default function SearchSortFilter() {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("ALL");

  const products = [
    { id: 1, name: "iPhone 15", category: "Phone", price: 70000 },
    { id: 2, name: "Samsung S24", category: "Phone", price: 65000 },
    { id: 3, name: "MacBook Air", category: "Laptop", price: 100000 },
    { id: 4, name: "Dell XPS", category: "Laptop", price: 90000 },
    { id: 5, name: "AirPods Pro", category: "Audio", price: 25000 },
    { id: 6, name: "Sony Headphones", category: "Audio", price: 30000 },
  ];

  const filterProducts = products.filter((item) =>
    item.name.toLowerCase().includes(name.toLowerCase()),
  );

  const categoryList = products.filter((item) => category === "ALL"|| item.category === category);

  return (
    <div className="">
      SearchSortFilter
      <input
        onChange={(e) => setName(e.target.value)}
        type="text"
        name=""
        id=""
      />
      <button onClick={() => setCategory("ALL")} className="bg-amber-200 p-2 rounded-2xl">ALL</button>
      <button
        onClick={() => setCategory("Phone")}
        className="bg-amber-200 p-2 rounded-2xl"
      >
        Phone
      </button>
      <button onClick={() => setCategory("Laptop")} className="bg-amber-200 p-2 rounded-2xl">Laptop</button>
      <button onClick={() => setCategory("Audio")} className="bg-amber-200 p-2 rounded-2xl">Audio</button>
      {categoryList.map((item) => (
        <div className="flex w-100 h-min justify-evenly items-center ">
          <h1>{item.name}</h1>
          <h1>{item.category}</h1>
          <h1>{item.price}</h1>
        </div>
      ))}
    </div>
  );
}
