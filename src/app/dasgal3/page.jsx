"use client";
import { useState } from "react";
import { DasgalThree } from "./_components/DasgalThree";

export default function Dasgal3(props) {
  const [bgColor, setBgColor] = useState("white");

  return <DasgalThree bgColor={bgColor} setBgColor={setBgColor} />;
}
