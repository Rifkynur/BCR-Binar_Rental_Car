import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router";
import { Accordion, AccordionBody, AccordionHeader, AccordionItem } from "reactstrap";
import { useNavigate } from "react-router-dom";
import DIsableInput from "./DIsableInput";
import axios from "axios";
import CarImage from "../../assets/image/car.png";
import { FiUsers, FiCalendar } from "react-icons/fi";
import { usePaymentContext } from "../../context/PaymentContext";

import { setTitle } from "../../component/helper/generic";

// import date range
import { DateRange } from "react-date-range";
import { addDays, intervalToDuration } from "date-fns";
import format from "date-fns/format";

import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file

const Index = () => {
  const context = usePaymentContext();
  const navigate = useNavigate();
  const { id } = useParams();
  const [data, setData] = useState("");
  const [category, setCategory] = useState("");
  const [open, setOpen] = useState("");

  // toggle accordion
  const toggle = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };

  const [range, setRange] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [isOpen, setIsOpen] = useState(false);

  const ref = useRef(null);

  useEffect(() => {
    // close calendar
    document.addEventListener("keydown", hideOnEscape);
    document.addEventListener("click", hideOnClickOutside);
  }, []);

  const hideOnEscape = (e) => {
    if (e.key === "Escape") return setIsOpen(false);
  };

  const hideOnClickOutside = (e) => {
    if (ref.current && !ref.current.contains(e.target)) {
      setIsOpen(false);
    }
  };
  const fetchApi = () =>
    axios
      .get(`https://api-car-rental.binaracademy.org/customer/car/${id}`)
      .then((result) => {
        setData(result.data);
        if (result?.data?.category === "small") {
          return setCategory("2 - 4");
        } else if (result?.data?.category === "medium") {
          return setCategory("4 - 6");
        } else {
          return setCategory("6 - 8");
        }
      })
      .catch((err) => console.log(err));

  const fetchPayment = () => {
    axios
      .post(
        "https://api-car-rental.binaracademy.org/customer/order",
        {
          start_rent_at: format(range[0].startDate, "yyyy-MM-dd"),
          finish_rent_at: format(range[0].endDate, "yyyy-MM-dd"),
          car_id: data?.id,
        },
        {
          headers: {
            Access_token: localStorage.getItem("TOKEN"),
          },
        }
      )
      .then((result) => {
        context.setPaymentId(result.data.id);
        navigate(`/payment?paymentId=${result.data.id}`);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    fetchApi();
  }, []);

  useEffect(() => {
    setTitle("BCR Binar Car Rent || Detail Mobil");
  }, []);
  // menentukan durasi berapa hari sewa mobil
  const durationDate = intervalToDuration({ start: range[0].startDate, end: range[0].endDate });

  return (
    <div className="container ">
      <DIsableInput />
      <div className="detail-car mt-4 detail-car container justify-content-between px-0 mx-auto align-items-start d-flex">
        <div className=" shadow-sm rounded tentang-paket-wrapper">
          <div className="tentang-paket">
            <div>
              <h2 className="fw-bold">Tentang Paket</h2>
            </div>
            <div>
              <h3>Include</h3>
              <ul className="d-flex flex-column gap-1">
                <li>Apa saja yang termasuk dalam paket misal durasi max 12 jam </li>
                <li>Sudah termasuk bensin selama 12 jam </li>
                <li>Sudah termasuk Tiket Wisata </li>
                <li>Sudah termasuk pajak </li>
              </ul>
            </div>
            <div>
              <h3>Exclude</h3>
              <ul className="d-flex flex-column gap-1">
                <li>Tidak termasuk biaya makan sopir Rp 75.000/hari </li>
                <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                <li>Tidak termasuk akomodasi penginapan</li>
              </ul>
            </div>
          </div>
          <Accordion flush open={open} toggle={toggle} className="refund">
            <AccordionItem>
              <AccordionHeader targetId="1">
                <h2>Refund, Reschedule, Overtime</h2>
              </AccordionHeader>
              <AccordionBody accordionId="1">
                <ul className="d-flex flex-column gap-1">
                  <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                  <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                  <li>Tidak termasuk akomodasi penginapan</li>
                  <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                  <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                  <li>Tidak termasuk akomodasi penginapan</li>
                  <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                  <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                  <li>Tidak termasuk akomodasi penginapan</li>
                </ul>
              </AccordionBody>
            </AccordionItem>
          </Accordion>
        </div>
        <div className=" shadow-sm rounded detail-car-card-wrapper">
          <div className="detail-car-card">
            <div className="text-center detail-car-image-wrapper">
              <img src={data?.image ?? CarImage} alt="car image" className="bg-succes" />
            </div>
            <div>
              <h2>{data?.name ?? "-"}</h2>
              <div className="detail-car-card-category d-flex gap-1 mt-2">
                <FiUsers className="detail-car-card-category-icon" />
                <h3>{category} Orang</h3>
              </div>
              <div>
                <label>Tentukan lama sewa mobil (max. 7 hari)</label>
              </div>
              <div ref={ref}>
                <div className="input-date position-relative" onClick={() => setIsOpen((prev) => !prev)}>
                  <input type="text" placeholder="Pilih tanggal mulai dan tanggal akhir sewa" value={`${format(range[0].startDate, "dd-MM-yyy")} to ${format(range[0].endDate, "dd-MM-yyy")}`} />
                  <FiCalendar />
                </div>
                <div>
                  {isOpen && (
                    <DateRange
                      onChange={(item) => {
                        const duration = intervalToDuration({ start: item.selection.startDate, end: item.selection.endDate });
                        // console.log(item.selection);
                        if (duration.days > 6) {
                          setRange([{ startDate: item.selection.startDate, endDate: addDays(item.selection.startDate, 6), key: "selection" }]);
                          return;
                        }
                        setRange([{ startDate: item.selection.startDate, endDate: item.selection.endDate, key: "selection" }]);
                      }}
                      editableDateInputs={true}
                      moveRangeOnFirstSelection={false}
                      ranges={range}
                      months={1}
                      direction="horizontal"
                      minDate={new Date()}
                    />
                  )}
                </div>
              </div>

              <div className="total-payment d-flex justify-content-between">
                <h4>Total</h4>
                <p>Rp.{Object.hasOwn(durationDate, "days") ? data.price * (durationDate.days + 1) : "-"}</p>
              </div>

              <button className="w-100 button-green" disabled={!Object.hasOwn(durationDate, "days")} onClick={() => fetchPayment()}>
                Lanjutkan Pembayaran
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
