"use client";
import { useState } from "react";

export const Dasgal1 = (props) => {
  const { display, name, age, gender } = props;
  return (
    <div className="flex gap-5 flex-col w-full h-screen items items-center justify-center ">
      <a href="/">
        <button className="bg-red-500 rounded-2xl text-4xl cursor-pointer w-[150px] h-[70px] active:bg-red-300 active:text-whitehover:bg-red-300 hover:text-white">
          Home
        </button>
      </a>
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
};
