// // import React, { useState } from "react";

// // export default function MultiSelect() {
// //   const [dropDown, setDropDown] = useState(false);
// //   const [selected, setSelected] = useState([]);

// //   const options = ["React", "Vue", "Angular", "Svelte", "Next.js"];

// //   const handleChange = (index) => {
// //     const skill = options[index];

// //     if (!selected.includes(skill)) {
// //       setSelected([...selected, skill]);
// //     } else {
// //       setSelected(selected.filter((item) => item !== skill));
// //     }
// //   };

// //   return (
// //     <div className="flex flex-col mx-auto justify-center items-center h-screen">
// //       MultiSelect
// //       <button onClick={() => setDropDown(!dropDown)}>
// //         {selected.length > 0 ? selected.join(", ") : "SELECT SKILLS"}▼
// //       </button>
// //       {dropDown &&
// //         options.map((item, index) => (
// //           <h1>
// //             <span>
// //               <input
// //                 onChange={() => handleChange(index)}
// //                 type="checkbox"
// //                 name=""
// //                 id=""
// //                 checked={selected.includes(item)}
// //               />
// //             </span>
// //             {item}
// //           </h1>
// //         ))}
// //       <input
// //         type="checkbox"
// //         checked={selected.length === options.length}
// //         onChange={() =>
// //           setSelected(selected.length === options.length ? [] : [...options])
// //         }
// //       />
// //       <input type="checkbox" onChange={() => setSelected([])} />
// //     </div>
// //   );
// // }

import React, { useState } from "react";

const options = ["React", "Vue", "Angular", "Svelte", "Next.js"];

export default function MultiSelect() {
  const [isOpen, setIsOpen] = useState(false);
  const [skills, setSkills] = useState([]);

  const handleSkills = (index) => {
    const skill = options[index];
    if (skills.includes(skill)) {
      setSkills(skills.filter((item) => item !== skill));
    } else {
      setSkills([...skills, skill]);
    }
  };

  return (
    <div className="flex flex-col h-screen mx-auto items-center justify-center">
      MultiSelect
      <h1 onClick={() => setIsOpen(!isOpen)}>
        SELECT SKILLS {isOpen ? "A" : "V"}
        {skills && skills.map((item) => <h1>{item}</h1>)}
      </h1>
      {isOpen &&
        options.map((item, index) => (
          <h1 key={index}>
            <span>
              <input
                onChange={() => handleSkills(index)}
                type="checkbox"
                name=""
                id=""
                key={index}
                checked={skills.includes(item)}
              />
            </span>
            {item}
          </h1>
        ))}
    </div>
  );
}

// import React, { useState } from "react";

// export default function MultiSelect() {
//   const [list, setList] = useState([]);

//   const options = ["React", "Vue", "Angular", "Svelte", "Next.js"];

//   const handleChange = (item, index) => {
//     const skill = options[index];

//     if (list.includes(skill)) {
//       setList(list.filter((i) => i !== skill));
//     } else {
//       setList([...list,skill]);
//     }
//   };

//   return (
//     <div className="flex flex-col h-screen mx-auto justify-center items-center">
//       MultiSelect
//       {list}
//       {options.map((item, index) => (
//         <h1>
//           <span>
//             <input type="checkbox" onChange={() => handleChange(item, index)} />
//           </span>
//           {item}
//         </h1>
//       ))}
//       <input checked={list.length === options.length} type="checkbox" name="" id="" onChange={()=>setList(list.length === options.length? []:[...options])} />

//     </div>
//   );
// }
