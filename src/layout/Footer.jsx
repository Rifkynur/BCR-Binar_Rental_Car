import React from "react";
import FooterSocial from "../component/footer/FooterSocial";
import FooterAddress from "../component/footer/FooterAddress";
import FooterNav from "../component/footer/FooterNav";
import FooterCopyright from "../component/footer/FooterCopyright";
import { useLocation } from "react-router";

const Footer = () => {
  const { pathname } = useLocation();
  if (pathname === "/register" || pathname === "/login") return <></>;
  return (
    <footer className="container-local">
      <div className="footer">
        <FooterAddress />
        <FooterNav />
        <FooterSocial />
        <FooterCopyright />
      </div>
    </footer>
  );
};

export default Footer;
