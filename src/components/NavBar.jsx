import React from "react";
// 💡 Add the import for NavLink from react-router-dom
import { NavLink } from "react-router-dom"; 

export default function NavBar() {
  return (
    <nav className="navbar" aria-label="Main navigation">
      {/* 💡 Replace <a> with <NavLink> */}
      <NavLink to="/">Home</NavLink>
      <NavLink to="/directors">Directors</NavLink>
      <NavLink to="/actors">Actors</NavLink>
    </nav>
  );
}