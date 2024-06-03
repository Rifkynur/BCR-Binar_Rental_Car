import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import AuthProvider from "./context/AuthContext.jsx";
import FindCarProvider from "./context/FindCarContext.jsx";
import PaymentProvider from "./context/PaymentContext.jsx";
import InvoiceProvider from "./context/InvoiceContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <FindCarProvider>
          <PaymentProvider>
            <InvoiceProvider>
              <App />
            </InvoiceProvider>
          </PaymentProvider>
        </FindCarProvider>
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>
);
