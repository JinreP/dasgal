
"use client"

import { useState } from "react";

export default function ListPage() {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState("");

  function handleAdd() {
    if (inputValue.trim() === "") return;
    setItems([...items, inputValue]);
    setInputValue("");
  }

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Жагсаалт</h1>

      <input
        type="text"
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
        className="border p-2 mr-2"
      />
      <button
        onClick={handleAdd}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Нэмэх
      </button>

      <ul className="mt-4 list-disc list-inside">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
