import React from "react";
import { faqListItems } from "../../data/data";

const FaqList = ({ text }) => {
  return (
    <div className="faq-lists">
      <ul>
        {faqListItems.map((item, index) => {
          return (
            <li key={index}>
              <span>{item.text}</span>
              <i className="fa-solid fa-chevron-down"></i>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default FaqList;
