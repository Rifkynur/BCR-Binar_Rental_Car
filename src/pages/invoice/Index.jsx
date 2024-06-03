import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { usePaymentContext } from "../../context/PaymentContext";
import axios from "axios";
import { FiCheck, FiDownload, FiImage } from "react-icons/fi";
import PaymentStatus from "../checkout/PaymentStatus";
import ModalInvoice from "./ModalInvoice";
import format from "date-fns/format";
import { setTitle } from "../../component/helper/generic";

const Index = () => {
  let [searchParams, setSearchParams] = useSearchParams();

  const { paymentId } = usePaymentContext();

  const [data, setData] = useState(null);
  const [modal, setModal] = useState(false);
  const [date, setDate] = useState({ startDate: "", endDate: "" });

  const toggle = () => setModal(!modal);

  const invoiceId = searchParams.get("invoiceId");
  const fetchApi = () => {
    axios
      .get(`https://api-car-rental.binaracademy.org/customer/order/${paymentId}`, {
        headers: {
          Access_token: localStorage.getItem("TOKEN"),
        },
      })
      .then((result) => {
        setData(result?.data);
        setDate({ startDate: format(result?.data.start_rent_at, "dd MMM yyy"), endDate: format(result?.data.finish_rent_at, "dd MMM yyy") });
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    setTitle("BCR Binar Car Rent || Invoice");
  }, []);
  console.log(invoiceId);
  return (
    <div className="invoice">
      <PaymentStatus invoiceID={invoiceId} />
      <div className="success-payment">
        <div className="success-payment-logo">
          <FiCheck size={34} color="#fff" />
        </div>
        <h2>Pembayaran Berhasil!</h2>
        <p>Tunjukkan invoice ini ke petugas BCR di titik temu.</p>
      </div>
      <div className="invoice-downloader rounded">
        <div className="d-flex justify-content-between align-items-start">
          <div>
            <h2>Invoice</h2>
            <p>*no invoice</p>
          </div>
          <div
            className="download-button"
            onClick={() => {
              fetchApi();
              toggle();
            }}
          >
            <div className="">
              <FiDownload size={18} />
            </div>
            <h3>Unduh</h3>
            <ModalInvoice modal={modal} toggle={toggle} data={data} date={date} />
          </div>
        </div>
        <div className="pdf-view rounded">
          <FiImage size={18} />
          <h4>PDF Viewer</h4>
        </div>
      </div>
    </div>
  );
};

export default Index;
