import React, { useState } from "react";

const OPTIONS = ["HTML", "CSS", "JavaScript", "React"];

export default function Dashboard() {
  const [showModal, setShowModal] = useState(false);
  const [selected, setSelected] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  const handleSelect = (item) => {
    setSelected((prev) =>
      prev.includes(item)
        ? prev.filter((i) => i !== item)
        : [...prev, item]
    );
  };

  return (
    <div>
      {/* Open Modal Button */}
      <button onClick={() => setShowModal(true)}>Open Modal</button>

      {/* Modal */}
      {showModal && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0,0,0,0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* Modal Box */}
          <div
            style={{
              background: "#fff",
              padding: "20px",
              borderRadius: "8px",
              width: "300px",
            }}
          >
            <h3>Select Skills</h3>

            {/* Dropdown */}
            <div>
              <div
                onClick={toggleDropdown}
                style={{
                  border: "1px solid #ccc",
                  padding: "10px",
                  cursor: "pointer",
                }}
              >
                {selected.length
                  ? selected.join(", ")
                  : "Select options"}
              </div>

              {isOpen && (
                <div style={{ border: "1px solid #ccc", marginTop: "5px" }}>
                  {OPTIONS.map((item) => (
                    <label
                      key={item}
                      style={{ display: "block", padding: "5px" }}
                    >
                      <input
                        type="checkbox"
                        checked={selected.includes(item)}
                        onChange={() => handleSelect(item)}
                      />
                      {item}
                    </label>
                  ))}
                </div>
              )}
            </div>

            {/* Actions */}
            <div style={{ marginTop: "15px" }}>
              <button onClick={() => setShowModal(false)}>Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}