import React, { useState, createContext } from "react";
import CompoB from "./CompoB";
export const UserContext = createContext();
export default function ComponA() {
  const [user, setUser] = useState("Fatiham");

  return (
    <div className="component-container">
      Hello:{user}
      <UserContext.Provider value={user}>
        <CompoB user={user} />
      </UserContext.Provider>
    </div>
  );
}
