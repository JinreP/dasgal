"use client";
import { useState } from "react";

export default function Dasgal4() {
  const [studentAge, setStudentAge] = useState("Student Age is :");
  const [studentName, setStudentName] = useState("Student Name is :");
  const name = () => {
    setStudentName("Subeedei");
  };
  const age = () => {
    setStudentAge("19 years old");
  };
  return (
    <div className=" w-full h-screen flex flex-col gap-5 items-center justify-center ">
      <input
        type="text"
        value={studentName}
        readOnly
        className="text-3xl font-bold bg-black text-white w-[300px] h-[60px] rounded-2xl "
      />
      <input
        type="text"
        value={studentAge}
        readOnly
        className="text-3xl font-bold bg-black text-white w-[300px] h-[60px] rounded-2xl "
      />

      <div className="flex gap-5 ">
        <button
          className="bg-red-500 border-2 text-white w-[100px] h-[70px] text-2xl rounded-2xl cursor-pointer hover:bg-red-300 hover:text-black"
          onClick={name}
        >
          Student Name
        </button>
        <button
          className="bg-red-500 border-2 text-white w-[100px] h-[70px] text-2xl rounded-2xl cursor-pointer hover:bg-red-300 hover:text-black"
          onClick={age}
        >
          Student Age
        </button>
      </div>
    </div>
  );
}
