import React from "react";
import { social } from "../../data/data";

const FooterSocial = () => {
  return (
    <div className="footer-social">
      <h2>Connect with us</h2>
      <div className="social-links">
        {social.map((item, index) => {
          return (
            <div className="social-link-icon" key={index}>
              <a href="" aria-label={item?.label}>
                <i className={item?.icon}></i>
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FooterSocial;
