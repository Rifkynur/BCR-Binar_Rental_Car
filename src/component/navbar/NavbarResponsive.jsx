import React, { forwardRef } from "react";
import NavListItems from "./NavListItems";
import { NavLink } from "react-router-dom";
import Button from "../Elements/Button";

const NavbarResponsive = forwardRef(({ closeNavbar }, ref) => {
  return (
    <nav className="navbar-nav-mobile" ref={ref}>
      <ul className="navbar-items">
        <div className="bcr">
          <span>BCR</span>
          <i onClick={closeNavbar} className="close-btn fa-solid fa-x"></i>
        </div>
        <NavListItems />
        <NavLink to={"/register"}>
          <button className="button-green">Register</button>
        </NavLink>
        <NavLink to={"/login"}>
          <button className="button-green">Login</button>
        </NavLink>
      </ul>
    </nav>
  );
});

export default NavbarResponsive;
