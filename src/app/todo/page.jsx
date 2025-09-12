"use client";

import { useState } from "react";

export default function Todo() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const addTask = () => {
    if (inputValue.trim() !== "") {
      setTasks([...tasks, inputValue]);
      setInputValue("");
    }
  };
  function handleChange(e) {
    setInputValue(e.target.value);
  }

  function deleteEvent(deleteIndex) {
    const deleteTask = tasks.filter((task, i) => i !== deleteIndex);
  }
  return (
    <div>
      <a href="/">
        <button className="bg-red-500 rounded-2xl text-4xl cursor-pointer w-[150px] h-[70px] active:bg-red-300 active:text-whitehover:bg-red-300 hover:text-white">
          Home
        </button>
      </a>
      <h1 className="text-6xl font-bold ">Todo List</h1>
      <div className="flex gap-2">
        <input
          type="text"
          value={inputValue}
          placeholder="Enter your task"
          className="text-5xl border-2"
          onChange={handleChange}
        />
        <button
          onClick={addTask}
          className="bg-red-500 h-[60px] w-[100px] text-5xl text-white cursor-pointer rounded-2xl"
        >
          Add
        </button>
      </div>
      <ul>
        {tasks.map((task, index) => {
          return (
            <li key={index} className="flex items-center gap-2">
              <span className="text-4xl border-2 text-gray-400">{task}</span>
              <button
                onClick={deleteEvent()}
                className="bg-red-500 h-[45px] w-[100px] text-2xl text-white cursor-pointer rounded-2xl"
              >
                delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
