import React from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { IoIosArrowRoundBack } from "react-icons/io";
import { FiCheck } from "react-icons/fi";
import { usePaymentContext } from "../../context/PaymentContext";
import { useInvoiceContext } from "../../context/InvoiceContext";

const PaymentStatus = ({ orderId, bankPayment, invoiceID }) => {
  const paymentContext = usePaymentContext();
  const invoiceContext = useInvoiceContext();

  const navigate = useNavigate();
  return (
    <div className="container position-relative ">
      <div className="checkout-id payment-status">
        <Link>
          <div className="d-flex gap-3" onClick={() => navigate(-1)}>
            <IoIosArrowRoundBack size={24} />
            <div>
              <h2>{invoiceContext.bankPayment} Transfer</h2>
              <p>Order ID:{paymentContext.paymentId}</p>
            </div>
          </div>
        </Link>
        <div>
          <div className="payment-status-progress">
            <div className="d-flex gap-2 align-items-center">
              <div className="status bg-blue">{invoiceContext.bankPayment ? <FiCheck /> : <span>1</span>}</div>
              <h4>Pilih Metode</h4>
              <div className="partition"></div>
              <div className={`status ${paymentContext.paymentId && "bg-blue"}`}>{invoiceID ? <FiCheck /> : <span>2</span>}</div>
              <h4>Pilih Metode</h4>
              <div className="partition"></div>
              <div className={`status ${invoiceID && "bg-blue"}`}>
                <span>3</span>
              </div>
              <h4>Pilih Metode</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentStatus;
