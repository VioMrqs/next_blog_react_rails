import React from "react";
import Cookies from "js-cookie";
import Button from "./../components/Button";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../SessionContext";

const Logout = () => {
  let history = useNavigate();
  const { isAuthenticated, userHasAuthenticated } = useAppContext();

  const handleSubmit = () => {
    Cookies.remove("token");          
    userHasAuthenticated(false);
    console.log(isAuthenticated);
    history("/");
  };

  return (
    <Button onClick={() => handleSubmit()} text={"Veux-tu vraiment te déconnecter ?"} />
  );
};

export default Logout;
