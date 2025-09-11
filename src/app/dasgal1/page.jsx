"use client";
import { useState } from "react";
import {Dasgal1} from "./_components/DasgalNeg"
export default function Home(props) {
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
  return (<Dasgal1  display={display}  name={name}  age={age}  gender={gender} />
  );
}
