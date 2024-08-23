import React from "react";
import ComponentC from "./ComponentC";
function ComponentB() {
  return (
    <div className="component-container">
      componentB <ComponentC />
    </div>
  );
}

export default ComponentB;
