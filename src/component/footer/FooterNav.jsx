import React from "react";
import NavListItems from "../navbar/NavListItems";
import { navList } from "../../data/data";

const FooterNav = () => {
  return (
    <div className="footer-nav">
      <ul>
        <NavListItems />
      </ul>
    </div>
  );
};

export default FooterNav;
