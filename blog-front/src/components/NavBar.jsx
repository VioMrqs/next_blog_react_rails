import React from "react";
import { Link } from "react-router-dom";
import { useAppContext } from "./../SessionContext";

const NavBar = () => {
  const {isAuthenticated} = useAppContext();
  console.log(isAuthenticated);
  
  return (
    <div className="navbar">
      <div className="navbar__right">
        <Link to="/">PostMan</Link>
      </div>
      {isAuthenticated && (
        <div className="navbar__left">
          <Link to="/profile"> Profil</Link>
          <Link to="/sign_out">Déconnexion</Link>
        </div>
      )}
      {!isAuthenticated && (
        <div className="navbar__left">
          <Link to="/sign_up">Inscription</Link>
          <Link to="/sign_in">Connexion</Link>
        </div>
      )}
    </div>
  );
};

export default NavBar
