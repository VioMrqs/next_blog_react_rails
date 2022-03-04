import React from "react";
import Cookies from "js-cookie";
import Button from "./../components/Button";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../UserContext";

const Logout = () => {
  let history = useNavigate();
  const {setUser} = useUserContext();

  // ajouter un fetch destroy sur sign_out

  const handleSubmit = () => {
    Cookies.remove("token");          
    setUser(null)
    history("/");
  };

  return (
    <div className="form__container">
      <Button
        onClick={() => handleSubmit()}
        text={"Veux-tu vraiment te déconnecter ?"}
      />
    </div>
  );
};

export default Logout;
