import React from "react";
import OurServiceList from "../component/ourService/OurServiceList";
import OurServiceHeaderContent from "../component/ourService/OurServiceHeaderContent";
import OurServiceImg from "../component/ourService/OurServiceImg";

const LayoutService = () => {
  return (
    <section id="our-services" className="our-services">
      <OurServiceImg />
      <div className="right-services">
        <OurServiceHeaderContent />
        <OurServiceList />
      </div>
    </section>
  );
};

export default LayoutService;
