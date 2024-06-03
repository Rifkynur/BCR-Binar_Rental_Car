import React, { useEffect } from "react";
import LayoutWhyUs from "../../layout/LayoutWhyUs";
import LayoutTestimonial from "../../layout/LayoutTestimonial";
import LayoutService from "../../layout/LayoutService";
import LayoutFaq from "../../layout/LayoutFaq";
import LayoutSewaMobil from "../../layout/LayoutSewaMobil";
import { setTitle } from "../../component/helper/generic";

const Index = (props) => {
  useEffect(() => {
    setTitle("BCR Binar Car Rent");
  }, []);
  return (
    <>
      <LayoutService />
      <LayoutWhyUs />
      <LayoutTestimonial />
      <LayoutSewaMobil />
      <LayoutFaq />
    </>
  );
};

export default Index;
