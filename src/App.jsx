import "./assets/css/index.css";
import { useEffect } from "react";
import LayoutHeader from "./layout/LayoutHeader";
import Footer from "./layout/Footer";
import { PublicRoute } from "./config/index.route";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ScrollToTop from "./component/helper/ScrollToTop";

function App() {
  return (
    <>
      <ScrollToTop />
      <ToastContainer />
      <LayoutHeader />
      <PublicRoute />
      <Footer />
    </>
  );
}

export default App;
