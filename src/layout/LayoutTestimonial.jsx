import React from "react";
import TestimonialHeaderContent from "../component/testimonial/TestimonialHeaderContent";
import TestimonialNavigation from "../component/testimonial/TestimonialNavigation";
import TestimoniCardWrapper from "../component/testimonial/TestimoniCardWrapper";

const LayoutTestimonial = () => {
  return (
    <section id="testimonial" className="testimonial">
      <TestimonialHeaderContent />
      <TestimoniCardWrapper />
      <TestimonialNavigation />
    </section>
  );
};

export default LayoutTestimonial;
