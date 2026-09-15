import React, { useState } from "react";

export default function DataTable() {
  const [search, setSearch] = useState("");
  const [sortedOrder, setSortedOrder] = useState("asc");
  const [page, setPage] = useState(1);
  const [data, setData] = useState([
    {
      id: 1,
      name: "Ajinkya",
      age: 25,
      city: "Pune",
    },
    {
      id: 2,
      name: "Ashok",
      age: 30,
      city: "Mumbai",
    },
    {
      id: 3,
      name: "Ghate",
      age: 28,
      city: "Nagpur",
    },
    {
      id: 4,
      name: "Adgaon",
      age: 22,
      city: "Pune",
    },
    {
      id: 5,
      name: "inkya",
      age: 25,
      city: "Pune",
    },
    {
      id: 6,
      name: "hok",
      age: 30,
      city: "Mumbai",
    },
    {
      id: 7,
      name: "ate",
      age: 28,
      city: "Nagpur",
    },
    {
      id: 8,
      name: "aon",
      age: 22,
      city: "Pune",
    },
    {
      id: 9,
      name: "on",
      age: 22,
      city: "Pune",
    },
  ]);

  const filterSearch = data.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase()),
  );

  const sortedData = filterSearch.sort((a, b) => {
    if (sortedOrder === "asc") {
      return a.name.localeCompare(b.name);
    } else {
      return b.name.localeCompare(a.name);
    }
  });

  const itemsPerPage = 2;
  const numberOfPages = Math.ceil(sortedData.length / itemsPerPage);
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const items = sortedData.slice(startIndex, endIndex);

  return (
    <div className="h-screen flex-col mx-auto flex items-center justify-center">
      DataTable
      <table className="border-2 h-50 w-100">
        <label htmlFor="">Search </label>
        <input
          type="text"
          onChange={(e) => setSearch(e.target.value)}
          name=""
          value={search}
          className="bg-amber-100 rounded-2xl"
          id=""
        />
        <button
          onClick={() => setSortedOrder(sortedOrder === "asc" ? "dsc" : "asc")}
        >
          {sortedOrder === "asc" ? "DSC" : "ASC"}
        </button>
        {items.map((item) => (
          <div className="flex justify-evenly">
            <h1>{item.id}</h1>
            <h1>{item.name}</h1>
            <h1>{item.age}</h1>
          </div>
        ))}
        <div>
          {Array.from({ length: numberOfPages }).map((_, index) => (
            <button onClick={() => setPage(index + 1)}>{index + 1}</button>
          ))}
        </div>
      </table>
    </div>
  );
}
