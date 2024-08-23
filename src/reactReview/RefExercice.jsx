import React, { useRef } from "react";

export default function RefExercice() {
  const count = useRef(0);
  function hanleClick() {
    count.current++;
  }
  return (
    <div>
      <button onClick={hanleClick}>Clik me</button>
      <h2>Count:{count.current}</h2>
    </div>
  );
}
