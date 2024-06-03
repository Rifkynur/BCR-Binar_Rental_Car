import React from "react";
import { whyUsList } from "../../data/data";

const WhyUsCard = () => {
  return (
    <div className="why-us-card-wrapper">
      {whyUsList.map((item, index) => {
        return (
          <div className="why-us-card" key={index}>
            <div className="why-us-card-inner">
              <img src={item.img} alt="" />
              <h2>{item.title}</h2>
              <p>{item.desc}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default WhyUsCard;
