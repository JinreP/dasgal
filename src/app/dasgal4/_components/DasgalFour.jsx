"use client";

import { useState } from "react";

export const DasgalFour = (props) => {
  const { studentAge, studentName, handleName, handleAge } = props;
  return (
    <div className=" w-full h-screen flex flex-col gap-5 items-center justify-center ">
      <input
        type="text"
        className="bg-black w-[250px] h-[50px] text-white"
        placeholder="Enter Your Name"
        onChange={handleName}
      />
      <input
        type="number"
        className="bg-black w-[250px] h-[50px] text-white"
        placeholder="Enter Your Age"
        onChange={handleAge}
      />
      <p className="text-4xl font-bold">Student Name is: {studentName}</p>
      <p className="text-4xl font-bold">Student Age is: {studentAge}</p>
    </div>
  );
};
