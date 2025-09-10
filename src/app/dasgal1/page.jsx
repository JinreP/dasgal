"use client";
import { useState } from "react";

export default function Dasgal1(props) {
  const [display, setDisplay] = useState("");
  const name = () => {
    setDisplay("Subeedei Dolgio");
  };
  const age = () => {
    setDisplay("19 years old");
  };
  const gender = () => {
    setDisplay("male");
  };
  return (
    <div className="flex gap-5 flex-col w-full h-screen items items-center justify-center ">
      <input
        type="text"
        value={display}
        readOnly
        className="bg-black w-[300px] h-[50px] border-2 rounded-2xl text-white text-4xl"
      />
      <div className="flex gap-6 ">
        <button
          className="py-4 px-4 bg-red-400 rounded-2xl cursor-pointer hover:bg-red-300 text-2xl "
          onClick={name}
        >
          Name
        </button>
        <button
          className="py-4 px-4 bg-red-400 rounded-2xl cursor-pointer hover:bg-red-300 text-2xl "
          onClick={age}
        >
          Age
        </button>
        <button
          className="py-4 px-4 bg-red-400 rounded-2xl cursor-pointer hover:bg-red-300 text-2xl "
          onClick={gender}
        >
          Gender
        </button>
      </div>
    </div>
  );
}
