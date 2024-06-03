import React from "react";
import WhyUsCard from "../component/whyus/WhyUsCard";
import WhyUsHeaderContent from "../component/whyus/WhyUsHeaderContent";

const LayoutWhyUs = () => {
  return (
    <section id="why-us" className="container-local why-us">
      <WhyUsHeaderContent />
      <WhyUsCard />
    </section>
  );
};

export default LayoutWhyUs;
