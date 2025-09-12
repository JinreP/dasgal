"use client";
import { useState } from "react";

export const DasgalFive = (props) => {
  const { items, inputValue, handleAdd, setInputValue, setItems } = props;
  return (
    <div className="p-4">
      <a href="/">
        <button className="bg-red-500 rounded-2xl text-4xl cursor-pointer w-[150px] h-[70px] active:bg-red-300 active:text-whitehover:bg-red-300 hover:text-white">
          Home
        </button>
      </a>
      <h1 className="text-xl font-bold mb-4">Lists</h1>

      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="border p-2 mr-2"
      />
      <button
        onClick={handleAdd}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Add
      </button>

      <ul className="mt-4 list-disc list-inside">
        {items.map((item, i) => {
          return <li key={i}>{item}</li>;
        })}
      </ul>
    </div>
  );
};
