import React, { useEffect } from "react";
import { useNavigate } from "react-router";

const Index = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/");
  }, []);
};

export default Index;
