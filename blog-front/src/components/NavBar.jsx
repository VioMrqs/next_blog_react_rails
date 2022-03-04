import React from "react";
import { Link } from "react-router-dom";
import { useUserContext } from "../UserContext";

const NavBar = () => {
  const {user } = useUserContext()

  return (
    <div className="navbar">
      <div className="navbar__right">
        <Link to="/">PostMan</Link>
      </div>
      {user && (
        <div className="navbar__left">
          <Link to="/profil"> Profil</Link>
          <Link to="/sign_out">Déconnexion</Link>
        </div>
      )}
      {!user && (
        <div className="navbar__left">
          <Link to="/sign_up">Inscription</Link>
          <Link to="/sign_in">Connexion</Link>
        </div>
      )}
    </div>
  );
};

export default NavBar
