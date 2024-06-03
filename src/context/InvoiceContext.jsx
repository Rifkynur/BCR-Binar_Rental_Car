import { createContext, useContext, useState } from "react";

const InvoiceContext = createContext(null);

export function useInvoiceContext() {
  return useContext(InvoiceContext);
}
const InvoiceProvider = ({ children }) => {
  const [bankPayment, setBankPayment] = useState(null);
  const [invoice, setInvoice] = useState(null);

  const value = {
    bankPayment,
    setBankPayment,
    invoice,
    setInvoice,
  };
  return <InvoiceContext.Provider value={value}>{children}</InvoiceContext.Provider>;
};

export default InvoiceProvider;
