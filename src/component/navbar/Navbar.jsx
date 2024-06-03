import React, { forwardRef } from "react";
import NavListItems from "./NavListItems";
import { Link } from "react-scroll";
import { NavLink, useNavigate } from "react-router-dom";
import { useFindCarContext } from "../../context/FindCarContext";
import { useAuth } from "../../context/AuthContext";

const Navbar = forwardRef(({ shadow, openNavbar }, ref) => {
  const context = useFindCarContext();
  const navigate = useNavigate();
  const { isAuthenticated, logout } = useAuth();

  return (
    <div className={`container-local navbar ${shadow && "scroll"}`}>
      <Link to="home" spy={true} smooth={true} duration={100}>
        <div className="nav-logo"></div>
      </Link>
      <nav className="navbar-nav-local">
        <ul className="navbar-items">
          <NavListItems />
          <li>
            {!isAuthenticated ? (
              <div className="d-flex gap-1">
                <NavLink to={"/register"}>
                  <button className="button-green">Register</button>
                </NavLink>
                <NavLink to={"/login"}>
                  <button className="button-green">Login</button>
                </NavLink>
              </div>
            ) : (
              <div>
                <button
                  onClick={() => {
                    context.setIsCarOpen(false);
                    logout();
                    navigate("/");
                  }}
                  className="button-green"
                >
                  Log Out
                </button>
              </div>
            )}
          </li>
        </ul>
      </nav>
      <i onClick={openNavbar} ref={ref} className="hamburger-btn fa-solid fa-bars"></i>
    </div>
  );
});

export default Navbar;
