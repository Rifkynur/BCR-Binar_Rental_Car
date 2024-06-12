import React, { useState, useEffect } from "react";
import OrderDetailHeader from "./OrderDetailHeader";
import PaymentStatus from "./PaymentStatus";
import { usePaymentContext } from "../../context/PaymentContext";
import { useInvoiceContext } from "../../context/InvoiceContext";
import { FiUsers, FiCheck } from "react-icons/fi";
import axios from "axios";
import { Input } from "reactstrap";
import format from "date-fns/format";
import { Link, useSearchParams } from "react-router-dom";
import { setTitle, toTop } from "../../component/helper/generic";

const Index = () => {
  const context = usePaymentContext();
  const invoiceContext = useInvoiceContext();

  const [searchParams, setSearchParams] = useSearchParams();
  const paymentId = searchParams.get("paymentId");

  const [category, setCategory] = useState("");
  const [bank, setBank] = useState("");
  const [data, setData] = useState("");
  const [date, setDate] = useState({ startDate: "", endDate: "" });

  const fetchApi = () => {
    axios
      .get(`https://api-car-rental.binaracademy.org/customer/order/${paymentId}`, {
        headers: {
          Access_token: localStorage.getItem("TOKEN"),
        },
      })
      .then((result) => {
        setData(result.data);
        setDate({ startDate: format(result?.data.start_rent_at, "dd MMM yyy"), endDate: format(result?.data.finish_rent_at, "dd MMM yyy") });
        if (result?.data?.Car?.category === "small") {
          return setCategory("2 - 4");
        } else if (result?.data?.Car?.category === "medium") {
          return setCategory("4 - 6");
        } else {
          return setCategory("6 - 8");
        }
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    fetchApi();
  }, []);

  const handleChange = (e) => {
    const { value } = e.target;
    setBank(value);
  };
  useEffect(() => {
    setTitle("BCR Binar Car Rent || Pilih mobil");
    
  }, []);
  return (
    <div className="container">
      <div className="position-relative">
        <PaymentStatus bank={bank} />
        <OrderDetailHeader data={data} category={category} date={date} />
      </div>
      <div className="mt-4 d-flex justify-content-between align-items-start">
        <div className="pilih-bank rounded ">
          <h2>Pilih Bank Transfer</h2>
          <p>Kamu bisa membayar dengan transfer melalui ATM, Internet Banking atau Mobile Banking</p>
          <ul>
            <li className="gap-4 bank-container">
              <Input onChange={handleChange} type="radio" id="bca" name="bank" value="bca" />
              <label htmlFor="bca">
                <div className="bank-wrapper">
                  <div className="d-flex gap-3">
                    <div className="bank rounded">BCA</div>
                    <h3>BCA Transfer</h3>
                  </div>
                  <div className="bank-check">
                    <FiCheck size={24} color="#5cb85f" className="checklist" />
                  </div>
                </div>
              </label>
            </li>
            <li className="gap-4 bank-container">
              <Input onChange={handleChange} type="radio" id="bni" name="bank" value="bni" />
              <label htmlFor="bni">
                <div className="bank-wrapper">
                  <div className="d-flex gap-3">
                    <div className="bank rounded">BNI</div>
                    <h3>BNI Transfer</h3>
                  </div>
                  <div className="bank-check">
                    <FiCheck size={24} color="#5cb85f" className="checklist" />
                  </div>
                </div>
              </label>
            </li>
            <li className="gap-4 bank-container">
              <Input onChange={handleChange} type="radio" id="mandiri" name="bank" value="mandiri" />
              <label htmlFor="mandiri">
                <div className="bank-wrapper">
                  <div className="d-flex gap-3">
                    <div className="bank rounded">Mandiri</div>
                    <h3>Mandiri Transfer</h3>
                  </div>
                  <div className="bank-check">
                    <FiCheck size={24} color="#5cb85f" className="checklist" />
                  </div>
                </div>
              </label>
            </li>
          </ul>
        </div>
        <div className="order-detail-card ">
          <div className="order-detail-car-name">
            <h3>{data?.Car?.name ?? "-"}</h3>
            <p className="d-flex align-items-center gap-1">
              <FiUsers /> {category} orang
            </p>
          </div>
          <div className="order-detail-total-atas">
            <h3>Total</h3>
            <p>Rp.{data?.total_price ?? "-"}</p>
          </div>
          <div>
            <div className="order-detail-harga">
              <h3>Harga</h3>
              <ul>
                <li>
                  <div>
                    <h4>sewa mobil </h4>
                    <p>Rp. {data?.total_price ?? "-"}</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="order-detail-biaya">
              <h3>Biaya Layanan</h3>
              <ul>
                <li>
                  <div className="d-flex justify-content-between">
                    <h4>pajak</h4>
                    <p>Termasuk</p>
                  </div>
                </li>
                <li>
                  <div className="d-flex justify-content-between">
                    <h4>Biaya makan sopir</h4>
                    <p>Termasuk</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="order-detail-biaya">
              <h3>Belum Termasuk</h3>
              <ul>
                <li>
                  <h4>Bensin</h4>
                </li>
                <li>
                  <h4>Tol dan Parkir</h4>
                </li>
              </ul>
            </div>
          </div>
          <div className="order-detail-total-bawah">
            <h3>Total</h3>
            <p>Rp.{data?.total_price}</p>
          </div>
          <Link to={"/checkout"} onClick={() => invoiceContext.setBankPayment(bank)}>
            <button className="button-green w-100" disabled={bank ? false : true}>
              Bayar
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Index;
