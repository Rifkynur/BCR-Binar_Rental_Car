import { createContext, useContext, useState } from "react";

const PaymentContext = createContext(null);

export function usePaymentContext() {
  return useContext(PaymentContext);
}
const PaymentProvider = ({ children }) => {
  const [paymentId, setPaymentId] = useState("");

  const value = {
    paymentId,
    setPaymentId,
  };
  return <PaymentContext.Provider value={value}>{children}</PaymentContext.Provider>;
};

export default PaymentProvider;
