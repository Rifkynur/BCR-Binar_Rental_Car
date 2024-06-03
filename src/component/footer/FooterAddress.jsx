import React from "react";
import { address } from "../../data/data";

const FooterAddress = () => {
  return (
    <div className="footer-address">
      <ul>
        {address.map((item, index) => {
          return <li key={index}>{item.address}</li>;
        })}
      </ul>
    </div>
  );
};

export default FooterAddress;
