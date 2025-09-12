"use client";
import { useState } from "react";

export const DasgalTwo = (props) => {
  const { number, Increase, Reset, Decrease } = props;
  return (
    <div className="flex flex-col w-full h-screen ">
                <a href="/">
        <button className="bg-red-500 rounded-2xl text-4xl cursor-pointer w-[150px] h-[70px] active:bg-red-300 active:text-whitehover:bg-red-300 hover:text-white">
          Home
        </button>
      </a>
      <input
        type="text"
        value={number}
        readOnly
        className="text-9xl text-black font-bold"
      />
      <div className="flex gap-5">
        <button
          className="text-4xl font-bold bg-red-500 w-[200px] h-[70px] border-2 rounded-3xl hover:bg-red-300 hover:text-white"
          onClick={Increase}
        >
          Increase
        </button>
        <button
          className="text-4xl font-bold bg-red-500 w-[200px] h-[70px] border-2 rounded-3xl hover:bg-red-300 hover:text-white"
          onClick={Reset}
        >
          Reset
        </button>
        <button
          className="text-4xl font-bold bg-red-500 w-[200px] h-[70px] border-2 rounded-3xl hover:bg-red-300 hover:text-white"
          onClick={Decrease}
        >
          Decrease
        </button>
      </div>
    </div>
  );
};
