import { useEffect } from "react";
import { useNavigate } from "react-router";
export const isLoggedIn = () => {
  const isToken = localStorage.getItem("TOKEN");
  if (isToken) return true;
  return false;
};

export const useAuth = ({ link }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn()) navigate(`/${link}`);
    else {
      navigate("/login");
    }
  }, []);
};

export const setTitle = (title) => {
  document.title = title;
};

export const toTop = () => {
  window.scrollTo({
    behavior: "smooth",
    top: 0,
    left: 0,
  });
};
