import { createContext, useContext, useState } from "react";

const FindCarContext = createContext(null);

export function useFindCarContext() {
  return useContext(FindCarContext);
}
const FindCarProvider = ({ children }) => {
  const [isCarOpen, setIsCarOpen] = useState(false);

  const value = {
    isCarOpen,
    setIsCarOpen,
  };
  return <FindCarContext.Provider value={value}>{children}</FindCarContext.Provider>;
};

export default FindCarProvider;
