import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoIosArrowRoundBack } from "react-icons/io";
import { FiCheck } from "react-icons/fi";

const PaymentStatus = ({ bank }) => {
  const history = useNavigate();
  return (
    <div className="payment-status">
      <Link>
        <div className="d-flex " onClick={() => history(-1)}>
          <IoIosArrowRoundBack size={24} />
          <h2>Pembayaran</h2>
        </div>
      </Link>
      <div className="payment-status-progress">
        <div className="d-flex gap-2 align-items-center">
          <div className="status bg-blue">{bank ? <FiCheck /> : <span>1</span>}</div>
          <h4>Pilih Metode</h4>
          <div className="partition"></div>
          <div className="status">
            <span>2</span>
          </div>
          <h4>Pilih Metode</h4>
          <div className="partition"></div>
          <div className="status">
            <span>3</span>
          </div>
          <h4>Pilih Metode</h4>
        </div>
      </div>
    </div>
  );
};

export default PaymentStatus;
