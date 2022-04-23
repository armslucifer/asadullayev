import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <header className="header">
        <div className="container">
          <div className="header__inner">
            <a onClick={event => window.location.href='/'} className="logo">
                AsaDullAyev
            </a>
            <ul className="nav">
              <NavLink to="/" className="nav__link">
                <li>Main</li>
              </NavLink>
              <NavLink to="/projects" className="nav__link">
                <li>Projects</li>
              </NavLink>
              <NavLink to="/about" className="nav__link">
                <li>About</li>
              </NavLink>
              <NavLink to="/contact" className="nav__link">
                <li>Contact</li>
              </NavLink>
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;


