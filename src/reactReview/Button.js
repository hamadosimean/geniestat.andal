import React from "react";

function Button() {
  const handleClick = (name) => {
    console.log("Stop clicking me ", name);
  };
  return (
    <div>
      <button onClick={() => handleClick("Fatiham")}>Click me😊</button>
    </div>
  );
}

export default Button;
