import React from "react";

const TestimoniCard = ({ img, desc, name }) => {
  return (
    <>
      <div className="testimonial-img">
        <img src={img} alt="photo" />
      </div>
      <div className="testimonial-card-inner">
        <div className="star">
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
        </div>
        <p>{desc}</p>
        <h2>{name}</h2>
      </div>
    </>
  );
};

export default TestimoniCard;
