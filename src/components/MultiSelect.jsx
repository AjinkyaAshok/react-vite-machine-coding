import React, { useState } from "react";

export default function MultiSelect() {
  const [dropDown, setDropDown] = useState(false);
  const [selected, setSelected] = useState([]);

  const options = ["React", "Vue", "Angular", "Svelte", "Next.js"];

  const handleChange = (index) => {
    const skill = options[index];

    if (!selected.includes(skill)) {
      setSelected([...selected, skill]);
    } else {
      setSelected(selected.filter((item) => item !== skill));
    }
  };

  return (
    <div className="flex flex-col mx-auto justify-center items-center h-screen">
      MultiSelect
      <button onClick={() => setDropDown(!dropDown)}>
        {selected.length > 0 ? selected.join(", ") : "SELECT SKILLS"}▼
      </button>
      {dropDown &&
        options.map((item, index) => (
          <h1>
            <span>
              <input
                onChange={() => handleChange(index)}
                type="checkbox"
                name=""
                id=""
                checked={selected.includes(item)}
              />
            </span>
            {item}
          </h1>
        ))}
      <input
        type="checkbox"
        checked={selected.length === options.length}
        onChange={() =>
          setSelected(selected.length === options.length ? [] : [...options])
        }
      />
      <input type="checkbox" onChange={() => setSelected([])} />
    </div>
  );
}
