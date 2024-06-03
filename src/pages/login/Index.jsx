import React, { useEffect } from "react";
import LoginPic from "../../assets/image/login.png";
import { useState } from "react";
import axios from "axios";
import { Input } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useFindCarContext } from "../../context/FindCarContext";
import { useAuth } from "../../context/AuthContext";
import { setTitle } from "../../component/helper/generic";

const Index = () => {
  const context = useFindCarContext();
  const navigate = useNavigate();
  const { login } = useAuth();

  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { value, name } = e.target;
    setState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // const fetchApi = (body) => {
  //   axios
  //     .post("https://api-car-rental.binaracademy.org/customer/auth/login", { ...body })
  //     .then((result) => {
  //       localStorage.setItem("TOKEN", result?.data.access_token);
  //       context.setIsCarOpen(false);
  //       navigate("/", { replace: true });
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //       toast(error?.response?.data.message, { type: "error", position: "top-right", theme: "colored" });
  //     });
  // };

  function handleSubmit(e) {
    e.preventDefault();

    login(state)
      .then(() => {
        context.setIsCarOpen(false);
        navigate("/", { replace: true });
      })
      .catch((error) => {
        console.log(error);
        toast(error?.response?.data.message, { type: "error", position: "top-right", theme: "colored" });
      });
  }

  useEffect(() => {
    setTitle("Login");
  }, []);
  return (
    <div className="d-flex justify-content-between login">
      <div className="login-form-container ">
        <div className="login-form d-flex flex-column align-items-start text-start">
          <div className="login-logo"></div>
          <h2 className="fw-bold">Wellcome Back</h2>
          <div className="w-100">
            <form action="" onSubmit={handleSubmit} className="d-flex flex-column gap-3">
              <div className="d-flex flex-column gap-2">
                <div className="d-flex flex-column gap-2">
                  <label>Email</label>
                  <Input onChange={handleChange} type="email" name="email" placeholder="Contoh: johndee@gmail.com" />
                </div>
                <div className="d-flex flex-column gap-2">
                  <label>Password</label>
                  <Input onChange={handleChange} type="password" name="password" placeholder="6+ karakter" />
                </div>
              </div>
              <button type="submit" className="button-blue btn-sm w-100">
                Sign In
              </button>
            </form>
          </div>
          <div className="have-any-account">
            Don't have an account?{" "}
            <Link to={"/register"}>
              <span>Sign Up for free</span>
            </Link>
          </div>
        </div>
      </div>
      <div className="login-img">
        <img src={LoginPic} alt="" />
      </div>
    </div>
  );
};

export default Index;
