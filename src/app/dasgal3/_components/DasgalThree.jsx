"use client";

import { useState } from "react";

export const DasgalThree = (props) => {
  const { bgColor , setBgColor} = props;
  return (
    <div
      className="flex gap-5 w-full h-screen items-center justify-center "
      style={{ backgroundColor: bgColor, minHeight: "100vh" }}
    >
      <button
        className="py-4 px-4 bg-red-600 text-4xl font-bold hover:bg-red-400 hover:text-white"
        onClick={() => setBgColor("blue")}
      >
        Blue
      </button>
      <button
        className="py-4 px-4 bg-red-600 text-4xl font-bold hover:bg-red-400 hover:text-white"
        onClick={() => setBgColor("green")}
      >
        Green
      </button>
    </div>
  );
};
