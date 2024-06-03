import React from "react";
import SewaMobilHeaderContent from "../component/sewaMobil/SewaMobilHeaderContent";
import Button from "../component/Elements/Button";

const LayoutSewaMobil = () => {
  return (
    <section className="container-local ">
      <div className="sewa-mobil">
        <SewaMobilHeaderContent />
        <Button title={"Mulai Sewa Mobil"} />
      </div>
    </section>
  );
};

export default LayoutSewaMobil;
