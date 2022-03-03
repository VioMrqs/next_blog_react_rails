import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Cookies from "js-cookie";
import { useUserContext } from "../UserContext";
import jwt_decode from "jwt-decode";

const SignUp = () => {

  let history = useNavigate();

  const { setUser } = useUserContext();

  // States for registration
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // States for checking the errors
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  // Handling the name change
  const handleUserName = (e) => {
    setUserName(e.target.value);
    setSubmitted(false);
  };

  // Handling the email change
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setSubmitted(false);
  };

  // Handling the password change
  const handlePassword = (e) => {
    setPassword(e.target.value);
    setSubmitted(false);
  };

  const fetchRegisterForm = (data) => {
    
    fetch("http://localhost:3000/users", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        if (res.ok) {
        const token = res.headers.get("Authorization");
        Cookies.set("token", token, { expires: 7 });
        history(`/`);      
        return res.json();
        } else {
          throw new Error(res);
        }
      })
      .then((json) => console.dir(json))
      .catch((err) => console.error(err));

  };

  // Handling the form submission + fetch data + update state

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      setError(true);
    } else {
      const data = {
        user: {
          email: email,
          password: password,
        },
      }
      setSubmitted(true);
      setError(false);
      fetchRegisterForm(data);
      setUser(jwt_decode(Cookies.get("token")))
      // userHasAuthenticated(true);
    }
  };

  // Showing success message
  const successMessage = () => {
    return (
      <div
        className="success"
        style={{
          display: submitted ? "" : "none",
        }}
      >
        <h1>Bienvenue {username} !</h1>
      </div>
    );
  };

  // Showing error message if error is true
  const errorMessage = () => {
    return (
      <div
        className="error"
        style={{
          display: error ? "" : "none",
        }}
      >
        <h1>Please enter all the fields</h1>
      </div>
    );
  };

  return (
    <div className="form">
      <h1>Inscription</h1>
      <div className="messages">
        {errorMessage()}
        {successMessage()}
      </div>

      <form>
        <div>
          <div className="form__label">
            <label>Nom</label>
          </div>

          <input
            onChange={handleUserName}
            className="input"
            value={username}
            type="text"
          />
        </div>

        <div>
          <div className="form__label">
            <label>Email</label>
          </div>

          <input
            onChange={handleEmail}
            className="input"
            value={email}
            type="email"
          />
        </div>

        <div>
          <div className="form__label">
            <label>Password</label>
          </div>

          <input
            onChange={handlePassword}
            className="input"
            value={password}
            type="password"
          />
        </div>

        <div>
          <Button
            onClick={handleSubmit}
            type={"submit"}
            text={"Inscription"}
          />
        </div>
      </form>
    </div>
  );
};

export default SignUp;
