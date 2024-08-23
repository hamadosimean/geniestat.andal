import React, { useContext } from "react";
import { UserContext } from "./ComponA";
import CompoD from "./CompoD";
export default function CompoC() {
  const user = useContext(UserContext);
  return (
    <div className="component-container">
      CompoC <CompoD />
      <h2>I ma here {user}</h2>
    </div>
  );
}
