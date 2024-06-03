import React from "react";

const TestimoniBtn = ({ btn, direction, className }) => {
  return (
    <div className={`testimonial-btn ${btn} ${className}`}>
      <i className={`fa-solid ${direction}`}></i>
    </div>
  );
};
export default TestimoniBtn;
