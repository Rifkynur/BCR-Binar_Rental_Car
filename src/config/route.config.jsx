import Home from "../pages/home/Index.jsx";
import Login from "../pages/login/Index.jsx";
import Register from "../pages/register/Index.jsx";
import PilihMobil from "../pages/pilihMobil/Index.jsx";
import Payment from "../pages/payment/Index.jsx";
import DetailMobil from "../pages/detailMobil/Index.jsx";
import NotFound from "../pages/notFound/Index.jsx";
import Checkout from "../pages/checkout/Index.jsx";
import Invoice from "../pages/invoice/Index.jsx";

export const privateRoutes = (props) => {
  return [
    {
      index: true,
      path: "/",
      element: <Home />,
    },
    {
      index: true,
      path: "/payment",
      element: <Payment />,
    },
    {
      index: true,
      path: "/checkout",
      element: <Checkout />,
    },
    {
      index: true,
      path: "/pilih-mobil",
      element: <PilihMobil title="mulai sewa" {...props} />,
    },
    {
      index: true,
      path: "/detail-mobil/:id",
      element: <DetailMobil {...props} />,
    },
    {
      index: true,
      path: "/invoice",
      element: <Invoice />,
    },
    {
      index: true,
      path: "*",
      element: <NotFound />,
    },
  ];
};

export const publicRoutes = (props) => {
  return [
    {
      index: true,
      path: "/",
      element: <Home title="Home" {...props} />,
    },
    {
      index: true,
      path: "/pilih-mobil",
      element: <PilihMobil title="mulai sewa" {...props} />,
    },
    {
      index: true,
      path: "/register",
      element: <Register />,
    },
    {
      index: true,
      path: "/login",
      element: <Login />,
    },
    {
      index: true,
      path: "*",
      element: <NotFound />,
    },
  ];
};
