import React, { useEffect, useRef, useState } from "react";
import { navbarClose, scrollNavbar, openNavbar, closeNavbar } from "../function/FunctionNavbar";
import Hero from "../component/hero/Hero";
import Navbar from "../component/navbar/Navbar";
import NavbarResponsive from "../component/navbar/NavbarResponsive";
import { useLocation } from "react-router";

const LayoutHeader = () => {
  const [shadow, setShadow] = useState(false);
  const navbar = useRef(null);
  const hamburgerBtn = useRef(null);
  const body = document.querySelector("body");
  const { pathname } = useLocation();

  useEffect(() => {
    scrollNavbar(setShadow, shadow);
    navbarClose(navbar, hamburgerBtn, body);
  }, []);

  if (pathname === "/register" || pathname === "/login") return <></>;
  return (
    <header>
      <Navbar ref={hamburgerBtn} shadow={shadow} openNavbar={() => openNavbar(navbar, body)} />
      <NavbarResponsive ref={navbar} closeNavbar={() => closeNavbar(navbar, body)} />

      <Hero />
    </header>
  );
};

export default LayoutHeader;
