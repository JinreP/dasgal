"use client";

import { useState } from "react";
import { DasgalFive } from "./_components/DasgalFive";

export default function ListPage(props) {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState("");

  function handleAdd() {
    if (inputValue.trim() === "") {
      setInputValue([...items, inputValue]);
      setInputValue("");
    }
  }

  return (
    
    <DasgalFive
      items={items}
      inputValue={inputValue}
      handleAdd={handleAdd}
      setItems={setItems}
      setInputValue={setInputValue}
    />
  );
}
