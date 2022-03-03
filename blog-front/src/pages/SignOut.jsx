import React from "react";
import Cookies from "js-cookie";
import Button from "./../components/Button";
import { useNavigate } from "react-router-dom";
// import { useAppContext } from "../SessionContext";
import { useUserContext } from "../UserContext";

const Logout = () => {
  let history = useNavigate();
  const {setUser} = useUserContext();
  // const { userHasAuthenticated } = useAppContext();

  const handleSubmit = () => {
    Cookies.remove("token");          
    // userHasAuthenticated(false);
    setUser(null)
    history("/");
  };

  return (
    <Button onClick={() => handleSubmit()} text={"Veux-tu vraiment te déconnecter ?"} />
  );
};

export default Logout;
