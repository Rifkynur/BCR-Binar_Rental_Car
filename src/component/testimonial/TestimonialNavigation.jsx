import React from "react";
import TestimoniBtn from "./TestimoniBtn";

const TestimonialNavigation = () => {
  return (
    <div className="testimonial-btn-wrapper">
      <TestimoniBtn direction="fa-chevron-left" btn="btn-previous" className={"review-swiper-button-prev"} />
      <TestimoniBtn direction="fa-chevron-right" btn="btn-next" className={"review-swiper-button-next"} />
    </div>
  );
};

export default TestimonialNavigation;
