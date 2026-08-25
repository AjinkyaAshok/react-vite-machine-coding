import React, { useEffect, useState } from "react";

export default function Autocomplete({ options }) {
  const [word, setWord] = useState("");
  const [debounced, setDebounced] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
        setDebounced(word)
    }, 1000);
    return () => clearTimeout(timer);
  }, [word]);

  const filteredOptions =
    debounced.trim() === ""
      ? []
      : options.filter((item) =>
          item.toLowerCase().includes(debounced.toLowerCase()),
        );

  return (
    <div className="flex mx-auto flex-col justify-center items-center h-screen">
      <h1>Autocomplete</h1>
      <input
        onChange={(e) => setWord(e.target.value)}
        type="text"
        name=""
        id=""
        value={word}
        className="bg-amber-200 rounded-2xl"
      />

      {filteredOptions.map((item) => (
        <div onClick={() => setWord(item)}>{item}</div>
      ))}
      {word && filteredOptions.length === 0 && <div>No results found</div>}
    </div>
  );
}
