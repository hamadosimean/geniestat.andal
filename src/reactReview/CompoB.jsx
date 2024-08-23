import React from "react";
import CompoC from "./CompoC";
function CompoB() {
  return (
    <div className="component-container">
      CompoB <CompoC />
    </div>
  );
}

export default CompoB;
