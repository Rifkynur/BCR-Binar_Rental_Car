import React from "react";
import FaqList from "../component/faq/FaqList";
import FaqHeaderContent from "../component/faq/FaqHeaderContent";

const LayoutFaq = () => {
  return (
    <section className="container-local" id="faq">
      <div className="faq">
        <FaqHeaderContent />
        <FaqList />
      </div>
    </section>
  );
};

export default LayoutFaq;
