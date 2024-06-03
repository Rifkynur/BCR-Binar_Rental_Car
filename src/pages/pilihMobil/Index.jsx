import React, { useEffect, useState } from "react";
import { Input, Row, Col } from "reactstrap";
import Select from "react-select";
import axios from "axios";
import CarImage from "../../assets/image/car.png";
import { useNavigate } from "react-router";
import { useFindCarContext } from "../../context/FindCarContext";
import NotFoundCar from "./NotFoundCar";
import { setTitle } from "../../component/helper/generic";

const categoryOptions = [
  { value: "small", label: "2 - 4 orang" },
  { value: "medium", label: "4 - 6 orang" },
  { value: "large", label: "6 - 8 orang" },
];
const priceOptions = [
  { value: "small", label: "< Rp.400.000 " },
  { value: "medium", label: "Rp.400.000 > Rp.600.000" },
  { value: "large", label: "> Rp.600.000" },
];
const statusOptions = [
  { value: false, label: "Tersedia" },
  { value: true, label: "Tidak Tersedia" },
];

const price = (type) => {
  switch (type) {
    case "small":
      return {
        minPrice: 0,
        maxPrice: 400000,
      };
    case "medium":
      return {
        minPrice: 400000,
        maxPrice: 600000,
      };
    case "large":
      return {
        minPrice: 600000,
        maxPrice: null,
      };

    default:
      return null;
  }
};

const index = () => {
  const context = useFindCarContext();
  const [parameter, setParameter] = useState({
    name: "",
    category: "",
    isRented: false,
    minPrice: null,
    maxPrice: null,
    page: 1,
    pageSize: 10,
  });
  const [data, setData] = useState(null);
  const [isCarOpen, setIsOpenCar] = useState(false);
  const fetchApi = () => {
    axios
      .get("https://api-car-rental.binaracademy.org/customer/v2/car", {
        params: {
          ...parameter,
        },
      })
      .then((result) => {
        setData(result?.data?.cars);
        setIsOpenCar(true);
      })
      .catch((error) => console.log(error));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchApi();
    context.setIsCarOpen(true);
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    setParameter((prev) => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    setTitle("BCR Binar Car Rent || Pilih mobil");
  }, []);
  return (
    <>
      <div className="box-card-selected container d-flex align-items-center">
        <div style={{ flex: 1 }}>
          <form action="" onSubmit={handleSubmit}>
            <div className="d-flex px-5 gap-3 align-items-end">
              <div style={{ flex: 1 }}>
                <label htmlFor="">Nama Mobil</label>
                <Input onChange={handleChange} name="name" style={{ height: "36px" }} placeholder="Nama Mobil" />
              </div>
              <div style={{ flex: 1 }}>
                <label htmlFor="">Kategori</label>
                <Select
                  onChange={(result) => {
                    setParameter((prev) => ({ ...prev, category: result.value }));
                  }}
                  name="category"
                  style={{ height: "36px" }}
                  options={categoryOptions}
                  placeholder="pilih kategori"
                />
              </div>
              <div style={{ flex: 1 }}>
                <label htmlFor="">Harga</label>
                <Select
                  onChange={(result) => {
                    const param = price(result.value);
                    setParameter((prev) => ({
                      ...prev,
                      ...param,
                    }));
                  }}
                  name="price"
                  style={{ height: "36px" }}
                  options={priceOptions}
                  placeholder="pilih harga"
                />
              </div>
              <div style={{ flex: 1 }}>
                <label>Status</label>
                <Select
                  onChange={(result) => {
                    setParameter((prev) => ({ ...prev, isRented: result.value }));
                  }}
                  options={statusOptions}
                  name="rented"
                  style={{ height: "36px" }}
                  placeholder="pilih status sewa"
                />
              </div>
              <div>
                <button type="submit" className="button-green btn-find-car">
                  {!isCarOpen ? "Cari Mobil" : "Edit"}
                </button>
              </div>
              <div>
                <button onClick={() => window.location.reload()} type="reset" className="button-green btn-find-car-reset">
                  Reset
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      {data?.length < 1 && <NotFoundCar />}
      {data?.length >= 1 && (
        <Row className="container-local container shadow mx-auto mt-3 rounded g-2 p-3">
          {data?.map((item, index) => {
            return <CardList data={item} key={index} />;
          })}
        </Row>
      )}
    </>
  );
};
export const CardList = ({ data }) => {
  const navigate = useNavigate();
  return (
    <Col lg={3}>
      <div className="card p-2 shadow">
        <img src={data?.image ?? CarImage} alt="car" style={{ height: "150px" }} />
        <div className="card-body">
          <h5>{data?.name ?? "-"}</h5>
          <span>Rp.{data?.price ?? "-"} / hari</span>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <button
            onClick={() => {
              // useAuth(`/detail-mobil/${data?.id}`);
              const Token = localStorage?.getItem("TOKEN");
              Token ? navigate(`/detail-mobil/${data?.id}`) : navigate("/login");
            }}
            className="button-green"
          >
            Pilih Mobil
          </button>
        </div>
      </div>
    </Col>
  );
};
export default index;
