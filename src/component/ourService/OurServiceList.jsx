import React from "react";
import { OurServiceListItems } from "../../data/data";
import iconList from "../../assets/icon/ic_checklist.svg";

const OurServiceList = () => {
  return (
    <ul>
      {OurServiceListItems.map((item, index) => {
        return (
          <li key={index}>
            <img src={iconList} alt="icon list" />
            <span>{item.text}</span>
          </li>
        );
      })}
    </ul>
  );
};

export default OurServiceList;
