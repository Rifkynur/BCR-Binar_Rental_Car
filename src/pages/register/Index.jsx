import LoginPic from "../../assets/image/login.png";
import { useState, useEffect } from "react";
import axios from "axios";
import { Input } from "reactstrap";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { setTitle } from "../../component/helper/generic";

const Index = () => {
  const [state, setState] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { value, name } = e.target;
    setState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const fetchApi = (body) => {
    axios
      .post("https://api-car-rental.binaracademy.org/customer/auth/register", { ...body })
      .then((result) => {
        console.log(result);
        toast("Berhasil Membuat Akun", {
          position: "top-right",
          type: "success",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          theme: "colored",
        });
        navigate("/login");
      })
      .catch((error) => {
        console.log(error);
        toast(error?.response?.data?.message, { position: "top-right", type: "error", pauseOnFocusLoss: false, draggable: true, theme: "colored", hideProgressBar: true });
      });
  };

  function handleSubmit(e) {
    e.preventDefault();
    fetchApi(state);
  }

  useEffect(() => {
    setTitle("Register");
  }, []);

  return (
    <div className="d-flex justify-content-between register">
      <div className="register-form-container">
        <div className="register-form d-flex flex-column align-items-start text-start">
          <div className="register-logo"></div>
          <h2 className="fw-bold">Sign Up</h2>
          <div className="w-100">
            <form action="" onSubmit={handleSubmit}>
              <div className="d-flex flex-column gap-2">
                <div className="d-flex flex-column gap-2">
                  <label>Name</label>
                  <Input onChange={handleChange} type="text" name="name" placeholder="Nama Lengkap" />
                </div>
                <div className="d-flex flex-column gap-2">
                  <label>Email</label>
                  <Input onChange={handleChange} type="email" name="email" placeholder="Contoh: johndee@gmail.com" />
                </div>
                <div className="d-flex flex-column gap-2">
                  <label>Create Password</label>
                  <Input onChange={handleChange} type="password" name="password" placeholder="6+ karakter" />
                </div>
                <div>
                  <button type="submit" className="button-blue w-100">
                    Sign Up
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="have-any-account">
            already have an account?{" "}
            <Link to={"/login"}>
              <span>Login</span>
            </Link>
          </div>
        </div>
      </div>
      <div className="register-img">
        <img src={LoginPic} alt="" />
      </div>
    </div>
  );
};

export default Index;
