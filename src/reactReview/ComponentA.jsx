import React from "react";
import ComponentB from "./ComponentB";
function ComponentA() {
  return (
    <div className="component-container">
      ComponentA
      <ComponentB />
    </div>
  );
}

export default ComponentA;
