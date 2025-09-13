"use client";
import { useState } from "react";

import { PersonInfo } from "./dasgal1/page";

export default function Home() {
  return (
    <div className="flex flex-col justify-center gap-5 items-center w-full h-screen">
      <a href="./dasgal1">
        <button className="bg-red-500 rounded-2xl text-4xl cursor-pointer w-[150px] h-[70px] active:bg-red-300 active:text-whitehover:bg-red-300 hover:text-white">
          Dasgal1
        </button>
      </a>

      <a href="./dasgal2">
        <button className="bg-red-500 rounded-2xl text-4xl cursor-pointer w-[150px] h-[70px] active:bg-red-300 active:text-whitehover:bg-red-300 hover:text-white">
          Dasgal2
        </button>
      </a>
      <a href="./dasgal3">
        <button className="bg-red-500 rounded-2xl text-4xl cursor-pointer w-[150px] h-[70px] active:bg-red-300 active:text-whitehover:bg-red-300 hover:text-white">
          Dasgal3
        </button>
      </a>
      <a href="./dasgal4">
        <button className="bg-red-500 rounded-2xl text-4xl cursor-pointer w-[150px] h-[70px] active:bg-red-300 active:text-whitehover:bg-red-300 hover:text-white">
          Dasgal4
        </button>
      </a>
      <a href="./dasgal5">
        <button className="bg-red-500 rounded-2xl text-4xl cursor-pointer w-[150px] h-[70px] active:bg-red-300 active:text-whitehover:bg-red-300 hover:text-white">
          Dasgal5
        </button>
      </a>
      <a href="./todo">
        <button className="bg-red-500 rounded-2xl text-4xl cursor-pointer w-[150px] h-[70px] active:bg-red-300 active:text-whitehover:bg-red-300 hover:text-white">
          Todo test
        </button>
      </a>
      <a href="./news">
        <button className="bg-red-500 rounded-2xl text-4xl cursor-pointer w-[150px] h-[70px] active:bg-red-300 active:text-whitehover:bg-red-300 hover:text-white">
          news
        </button>
      </a>
    </div>
  );
}
