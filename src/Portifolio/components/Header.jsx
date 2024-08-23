import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

function Header() {
  // const [dark, setDark] = useState(false);

  // const darkMode = "bg-black text-white";
  // function handleClick() {
  //   setDark((prevDark) => !prevDark);
  //   console.log("DarkMode");
  // }
  return (
    <div className="flex flex-row justify-between bg-slate-100">
      <div className="flex justify-center align-middle">
        <img src="" alt="logo" />
        <h2>
          <Link to="">Hamado Simean</Link>
        </h2>
      </div>
    </div>
  );
}

export default Header;
