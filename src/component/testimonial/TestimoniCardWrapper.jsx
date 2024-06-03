import React from "react";
import TestimoniCard from "./TestimoniCard";
import { testimonialList } from "../../data/data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";

const TestimoniCardWrapper = () => {
  return (
    <>
      <div className="testimonial-card-wrapper">
        <Swiper
          slidesPerView={2}
          slidesPerGroup={1}
          spaceBetween={30}
          centeredSlides={true}
          className="testimonial-card-wrapper"
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          navigation={{
            nextEl: ".review-swiper-button-next",
            prevEl: ".review-swiper-button-prev",
          }}
          modules={[Navigation, Pagination]}
        >
          {testimonialList.map((item, index) => {
            return (
              <SwiperSlide className="testimonial-card" key={index}>
                <TestimoniCard name={item?.name} desc={item?.desc} img={item?.photo} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>
  );
};

export default TestimoniCardWrapper;
