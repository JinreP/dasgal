"use client";
import { useState } from "react";

export default function Dasgal() {
  const [number, setNumber] = useState(0);
  const Increase = () => {
    setNumber(number + 1)
  }
    const Reset = () => {
    setNumber(0)
  }
    const Decrease = () => {
    setNumber(number - 1)
  }
  return (
    <div className="flex flex-col w-full h-screen ">
      <input
        type="text"
        value={number}
        readOnly
        className="text-9xl text-black font-bold"
      />
      <div className="flex gap-5">
        <button className="text-4xl font-bold bg-red-500 w-[200px] h-[70px] border-2 rounded-3xl hover:bg-red-300 hover:text-white" onClick={Increase}>Increase</button>
        <button className="text-4xl font-bold bg-red-500 w-[200px] h-[70px] border-2 rounded-3xl hover:bg-red-300 hover:text-white" onClick={Reset}>Reset</button>
        <button className="text-4xl font-bold bg-red-500 w-[200px] h-[70px] border-2 rounded-3xl hover:bg-red-300 hover:text-white" onClick={Decrease}>Decrease</button>
      </div>
    </div>
  );
}
