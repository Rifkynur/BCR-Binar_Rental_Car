import React from "react";
import { Link } from "react-scroll";
import { navList } from "../../data/data";

const NavListItems = () => {
  return (
    <>
      {navList.map((item, index) => {
        return (
          <li key={index}>
            <Link to={item.href} spy={true} smooth={true} duration={300} className="navTo">
              {item.text}
            </Link>
          </li>
        );
      })}
    </>
  );
};

export default NavListItems;
