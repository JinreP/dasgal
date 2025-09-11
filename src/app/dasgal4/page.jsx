"use client";
import { useState } from "react";
import { DasgalFour } from "./_components/DasgalFour";
export default function Dasgal4() {
  const [studentAge, setStudentAge] = useState("");
  const [studentName, setStudentName] = useState("");
  function handleName(e) {
    setStudentName(e.target.value);
  }
  function handleAge(e) {
    setStudentAge(e.target.value);
  }
  return (
    <DasgalFour
      studentAge={studentAge}
      studentName={studentName}
      handleName={handleName}
      handleAge={handleAge}
    />
  );
}
