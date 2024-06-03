import React, { useState, useRef, useEffect } from "react";
import { FiImage } from "react-icons/fi";
import { Button } from "reactstrap";
import CountDownTime from "./CountDownTime";
import axios from "axios";
import { usePaymentContext } from "../../context/PaymentContext";
import { useInvoiceContext } from "../../context/InvoiceContext";
import TransferTo from "./TransferTo";
import Tabs from "./Tabs";
import { useNavigate } from "react-router-dom";
import format from "date-fns/format";
import { addDays } from "date-fns";
import PaymentStatus from "./PaymentStatus";
import { setTitle } from "../../component/helper/generic";

const Index = () => {
  const inputRef = useRef(null);

  const day = format(addDays(new Date(), 1), "cccc, dd MMM yyyy p");

  console.log(day);

  const [uplaodIsOpen, setUploadIsOpen] = useState(false);
  const [imgSrc, setImgSrc] = useState("");
  const [image, setImage] = useState(null);
  const [data, setData] = useState(null);

  const paymentContext = usePaymentContext();
  const invoiceContext = useInvoiceContext();

  const paymentId = paymentContext.paymentId;

  const navigate = useNavigate();
  const contoh = 8926;

  const selectImg = () => {
    inputRef.current.click();
  };

  const handleChange = (e) => {
    const [image] = e.target.files;
    setImage(image);
    setImgSrc(URL.createObjectURL(image));
  };

  const getData = () => {
    axios
      .get(`https://api-car-rental.binaracademy.org/customer/order/${paymentId}`, {
        headers: {
          Access_token: localStorage.getItem("TOKEN"),
        },
      })
      .then((result) => {
        setData(result.data);
      })
      .catch((err) => console.log(err));
  };
  const fetchApi = () =>
    axios
      .put(
        `https://api-car-rental.binaracademy.org/customer/order/${paymentContext.paymentId}/slip`,
        {
          slip: image,
        },
        {
          headers: {
            Access_token: localStorage.getItem("TOKEN"),
            "Content-type": "multipart/form-data",
          },
        }
      )
      .then((result) => {
        navigate(`/invoice?invoiceId=${result?.data?.id}`);
      })
      .catch((err) => console.log(err));

  useEffect(() => {
    getData();
  }, []);
  useEffect(() => {
    setTitle("BCR Binar Car Rent || Checkout");
  }, []);

  return (
    <div className="position-relative">
      <PaymentStatus bankPayment={invoiceContext?.bankPayment} orderId={data?.id} />
      <div className="checkout container">
        <div className="checkout-info ">
          <div className="countdown rounded d-flex justify-content-between">
            <div>
              <h2>Selesaikan Pembayaran Sebelum</h2>
              <p>{day}</p>
            </div>
            <div>
              <CountDownTime hours={24} />
            </div>
          </div>
          <TransferTo bank={invoiceContext.bankPayment} />
          <div className="payment-instruction rounded">
            <h2>Intruksi Pembayaran</h2>
            <div>
              <Tabs bank={invoiceContext.bankPayment} />
            </div>
          </div>
        </div>
        <div className="payment-confirmation rounded">
          {!uplaodIsOpen ? (
            <div>
              <h3>Klik konfirmasi pembayaran untuk mempercepat proses pengecekan</h3>
              <Button onClick={() => setUploadIsOpen(true)}>Konfirmasi Pembayaran</Button>
            </div>
          ) : (
            <div>
              <div className="w-full d-flex justify-content-between">
                <h2>Konfirmasi Pembayaran</h2>
                <div>
                  <CountDownTime minute={10} />
                </div>
              </div>
              <p>Terima kasih telah melakukan konfirmasi pembayaran. Pembayaranmu akan segera kami cek tunggu kurang lebih 10 menit untuk mendapatkan konfirmasi.</p>
              <p>Upload Bukti Pembayaran</p>
              <p>Untuk membantu kami lebih cepat melakukan pengecekan. Kamu bisa upload bukti bayarmu</p>
              <div className="receipt-img">
                {!image ? <FiImage size={24} /> : <img src={imgSrc} alt="" />}
                <input type="file" ref={inputRef} accept="image/*" onChange={handleChange} className="d-none" />
              </div>
              {imgSrc ? (
                <button
                  className="button-green"
                  onClick={() => {
                    fetchApi();
                    navigate(`/invoice?invoceId=${data?.id}`);
                  }}
                >
                  Konfirmasi
                </button>
              ) : (
                <button className="button-green" onClick={selectImg}>
                  Upload
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Index;
