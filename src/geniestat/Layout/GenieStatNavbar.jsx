import React, { useState } from "react";
import { NavLink, Outlet, Link } from "react-router-dom";
import { Menu, Close } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import logoImage from "../medias/IMG-20231129-WA0038.png";
import FlashInfo from "../components/FlashInfo";

const GenieStatNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const activeLinkStyles = {
    fontWeight: "bold",
    color: "black",
  };

  return (
    <div>
      <FlashInfo />
      <div className="flex bg-blue-600 h-20 justify-between items-center px-4 md:px-10  sticky top-0 left-0 w-full z-50">
        <div className="flex items-center">
          <Link to="/">
            <img src={logoImage} className="h-14 w-16" alt="GenieStat logo" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden">
          <IconButton onClick={toggleMenu}>
            {menuOpen ? (
              <Close style={{ color: "white" }} />
            ) : (
              <Menu style={{ color: "white" }} />
            )}
          </IconButton>
        </div>

        {/* Navigation Menu */}
        <nav
          className={`${
            menuOpen
              ? "flex flex-col bg-blue-600 text-white fixed top-0 left-0 w-full h-full z-50"
              : "hidden"
          } md:flex md:flex-row md:items-center md:space-x-10`}
        >
          {/* Close Button for Mobile Menu */}
          <button
            onClick={() => setMenuOpen(false)}
            className="text-white flex justify-left items-left block mt-10 ml-4 mb-10 md:hidden"
          >
            <Close style={{ color: "white" }} />
          </button>

          <ul className="flex flex-col md:flex-row md:space-x-10 items-left pl-10 md:pl-auto md:items-normal justify-normal md:justify-center h-full">
            <li>
              <NavLink
                to="/services"
                className="text-white font-semibold hover:text-black hover:font-bold py-2 text-xl md:text-base"
                style={({ isActive }) => (isActive ? activeLinkStyles : null)}
                onClick={() => setMenuOpen(false)}
              >
                Services
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/formations"
                className="text-white font-semibold hover:font-bold hover:text-black py-2 text-xl md:text-base"
                style={({ isActive }) => (isActive ? activeLinkStyles : null)}
                onClick={() => setMenuOpen(false)}
              >
                Formations
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about-us"
                className="text-white font-semibold hover:font-bold hover:text-black py-2 text-xl md:text-base"
                style={({ isActive }) => (isActive ? activeLinkStyles : null)}
                onClick={() => setMenuOpen(false)}
              >
                A propos
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/programs"
                className="text-white font-semibold hover:text-black hover:font-bold py-2 text-xl md:text-base"
                style={({ isActive }) => (isActive ? activeLinkStyles : null)}
                onClick={() => setMenuOpen(false)}
              >
                Programmes
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact-us"
                className="text-white font-semibold hover:font-bold hover:text-black py-2 text-xl md:text-base"
                style={({ isActive }) => (isActive ? activeLinkStyles : null)}
                onClick={() => setMenuOpen(false)}
              >
                Nous contacter
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <Outlet />
    </div>
  );
};

export default GenieStatNavbar;
