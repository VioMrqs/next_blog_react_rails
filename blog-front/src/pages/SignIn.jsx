import { useState } from "react";
import Cookies from "js-cookie";
import Button from "./../components/Button";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../UserContext";

const SignIn = () => {

  const { setUser } = useUserContext();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  let history = useNavigate();

  const handleSubmit = () => {
    const data = {
      user: {
        email: email,
        password: password,
      },
    };

    fetch("http://localhost:3000/users/sign_in", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      if (res.ok) {
        const token = res.headers.get("Authorization");
        Cookies.set("token", token, { expires: 7 });
        setUser(Cookies.get("token"));
        history(`/`);
        return res.json();
      } else {
        throw new Error(res);
      }
    });
  };

  return (
    <div className="form__container">
      <form>
        <h1>Connexion</h1>
        <label htmlFor="email">Identifiant *</label>
        <input id="email" type="text" onChange={handleEmail} />

        <label htmlFor="password">Mot de passe *</label>
        <input id="password" type="text" onChange={handlePassword} />

        <Button
          onClick={() => handleSubmit()}
          type={"button"}
          text={"Connexion"}
        />
      </form>
    </div>
  );
};

export default SignIn;
