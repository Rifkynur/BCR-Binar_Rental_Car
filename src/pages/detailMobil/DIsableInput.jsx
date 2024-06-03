import React from "react";
import { Input } from "reactstrap";
import { Link } from "react-router-dom";

const DIsableInput = () => {
  return (
    <div className="box-card-selected">
      <form action="">
        <div className="d-flex px-5 gap-3 align-items-end py-3 text-body-tertiary">
          <div style={{ flex: 1 }}>
            <label htmlFor="">Nama Mobil</label>
            <Input name="name" style={{ height: "36px" }} disabled />
          </div>
          <div style={{ flex: 1 }}>
            <label htmlFor="">Kategori</label>
            <Input name="name" style={{ height: "36px" }} disabled />
          </div>
          <div style={{ flex: 1 }}>
            <label htmlFor="">Harga Sewa Per Hari</label>
            <Input name="name" style={{ height: "36px" }} disabled />
          </div>
          <div style={{ flex: 1 }}>
            <label htmlFor="">Status</label>
            <Input name="name" style={{ height: "36px" }} disabled />
          </div>
          <Link to="/pilih-mobil">
            <button className="btn-find-car-back button-green">Back</button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default DIsableInput;
