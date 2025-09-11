"use client";
import { useState } from "react";
import { DasgalTwo } from "./_components/DasgalTwo";

export default function Dasgal() {
  const [number, setNumber] = useState(0);
  const Increase = () => {
    setNumber(number + 1);
  };
  const Reset = () => {
    setNumber(0);
  };
  const Decrease = () => {
    setNumber(number - 1);
  };
  return <DasgalTwo Increase={Increase} Reset={Reset} Decrease={Decrease} number={number}/>;
}
