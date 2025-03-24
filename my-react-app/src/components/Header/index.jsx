import logo from "../../assets/LOGO.png";
import "../../../src/styles/Header.scss";
import { NavLink } from "react-router-dom";
import { useState } from "react";
function Header() {
  return (
    <header>
      <nav>
        <img src={logo} alt="logo Kasa" className="logo-kasa" />
        <ul>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            <li>Accueil</li>
          </NavLink>
          <NavLink
            to="/Apropos"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            <li>A propos</li>
          </NavLink>
        </ul>
      </nav>
    </header>
  );
}
export default Header;
