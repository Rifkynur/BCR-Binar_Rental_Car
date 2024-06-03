import React from "react";

const HeaderContent = ({ title, desc, className }) => {
  return (
    <div className={className}>
      <h2>{title}</h2>
      <p>{desc}</p>
    </div>
  );
};

export default HeaderContent;
