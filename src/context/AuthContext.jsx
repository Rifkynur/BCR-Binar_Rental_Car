import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const AuthContext = createContext(undefined);

export function useAuth() {
  const authContext = useContext(AuthContext);

  if (authContext === undefined) {
    throw new Error("useAuth must be used within AuthProvider");
  }

  return { ...authContext, isAuthenticated: !!authContext.token };
}

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState("");

  const login = (body) => {
    return axios.post("https://api-car-rental.binaracademy.org/customer/auth/login", { ...body }).then((result) => {
      const token = result?.data.access_token;

      localStorage.setItem("TOKEN", token);
      setToken(token);
    });
  };

  const logout = () => {
    localStorage.removeItem("TOKEN");

    setToken("");
  };

  useEffect(() => {
    const savedToken = localStorage.getItem("TOKEN");

    if (savedToken) {
      setToken(savedToken);
    }
  }, []);

  const value = {
    token,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
