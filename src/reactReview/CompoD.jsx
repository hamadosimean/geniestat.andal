import React, { useContext } from "react";
import { UserContext } from "./ComponA";
export default function CompoD() {
  const user = useContext(UserContext);
  return <div className="component-container"> Bye:{user}</div>;
}
