import React, { useEffect, useState } from "react";

export default function InfiniteScroll() {
  const [visibleCount, setVisibleCount] = useState(10);
  const [data, setData] = useState([]);
  //   const items = Array.from({ length: 50 }).map((_, i) => `Items ${i + 1}`);

  useEffect(() => {
    async function getList() {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/todos?offset=${visibleCount}&limit=10`,
      );
      const dat = await res.json();
      setData(dat);
    }
    getList();
  }, [visibleCount]);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.scrollY + window.innerHeight >=
        document.documentElement.scrollHeight
      ) {
        setVisibleCount((prev) => prev + 10);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center mx-auto">
      InfiniteScroll
      {data.slice(0, visibleCount).map((item) => (
        <h1 className="bg-amber-200 h-20">{item.title}</h1>
      ))}
      <button>Load More</button>
    </div>
  );
}
