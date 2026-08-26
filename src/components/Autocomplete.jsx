import React, { useEffect, useState } from "react";

export default function Autocomplete() {
  const [word, setWord] = useState("");
  const [debounced, setDebounced] = useState("");
  const [results, setResults] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounced(word);
    }, 1000);
    return () => clearTimeout(timer);
  }, [word]);

  useEffect(() => {
    async function fetchResults() {
      try {
        setLoading(true);
        setError(null);
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await res.json();
        setResults(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }
    fetchResults();
  }, [debounced]);

  const filteredOptions =
    debounced.trim() === ""
      ? []
      : results.filter((item) =>
          item.name.toLowerCase().includes(debounced.toLowerCase()),
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
      {loading && <h1>Loading...</h1>}
      {error && <h1>Error</h1>}
      {filteredOptions.map((item) => (
        <div key={item.id} onClick={() => setWord(item.name)}>
          {item.name}
        </div>
      ))}
      {word && filteredOptions.length === 0 && <div>No results found</div>}
    </div>
  );
}

