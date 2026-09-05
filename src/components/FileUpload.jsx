import React, { useState } from "react";

export default function FileUpload() {
  const [file, setFile] = useState(null);
  return (
    <div className="flex-col flex h-screen mx-auto justify-center items-center">
      FileUpload
      <input
        onChange={(e) => setFile(e.target.files[0])}
        className="w-min rounded-2xl bg-amber-100"
        type="file"
        name=""
        id=""
      />
      {file ? (
        <div>
          <h1>Selected File - Name: {file.name} </h1>
          <h1>Size: {(file.size / 1024).toFixed(2)} KB</h1>
        </div>
      ) : (
        "No File Selected"
      )}
      {file && <button onClick={() => setFile(null)}>Remove File</button>}
    </div>
  );
}

// import React, { useState } from "react";

// export default function FileUpload() {
//   const [file, setFile] = useState(null);
//   return (
//     <div className="flex-col flex h-screen mx-auto justify-center items-center">
//       FileUpload
//       <input
//         type="file"
//         className="w-min rounded-2xl bg-amber-100"
//         onChange={(e) => setFile(e.target.files[0])}
//       />
//       {file ? (
//         <div>
//           <h1>{file.name}</h1>
//           <h1>{(file.size) * 1024}KB</h1>
//         </div>
//       ) : (
//         "no"
//       )}
//     </div>
//   );
// }
