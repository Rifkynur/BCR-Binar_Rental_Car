import React from "react";
import carHero from "../../assets/image/img_car.png";
import Button from "../Elements/Button";
import { NavLink, useLocation } from "react-router-dom";
import { useParams } from "react-router";
import { useFindCarContext } from "../../context/FindCarContext";

const Hero = () => {
  const context = useFindCarContext();
  const { pathname } = useLocation();

  const detailMobil = pathname.includes("/detail-mobil");
  const payment = pathname.includes("/payment");
  const invoice = pathname.includes("/invoice");
  const checkout = pathname.includes("/checkout");

  return (
    <div className={`container hero ${payment || detailMobil || checkout || invoice ? "padding" : ""}`} id="home">
      {context.isCarOpen === true || detailMobil || payment || checkout || invoice ? (
        ""
      ) : (
        <>
          <div className="hero-left">
            <h1>Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</h1>
            <p>Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
            {pathname === "/pilih-mobil" ? (
              ""
            ) : (
              <NavLink to={"/pilih-mobil"}>
                <Button title={"Mulai Sewa Mobil"} />
              </NavLink>
            )}
          </div>
          <div className="hero-right">
            <img src={carHero} alt="hero card" />
          </div>
        </>
      )}
    </div>
  );
};

export default Hero;
