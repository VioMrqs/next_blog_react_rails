import Button from "./Button";
import { useState } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const UserUpdateForm = ({user}) => {
  const [alias, setAlias] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const history = useNavigate();
  const userToken = Cookies.get("token");

  // Handling the name change
  const handleAlias = (e) => {
    setAlias(e.target.value);
  };

  // Handling the description change
  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const data = {};

  if (alias) {
    data.alias = alias;
  }

  if (name) {
    data.name = name;
  }

  if (email) {
    data.email = email;
  }

  const updateForm = async (data) => {
    const response = await fetch(`http://localhost:3000/users`, {
      method: `PUT`,
      headers: {
        Authorization: `${userToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ user: data }),
    });
    const result = await response.json();
    console.log(result);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateForm(data);
    history(0);
  };

  return (
    <div className="form__container">
      <form onSubmit={handleSubmit}>
        <h1>Modification</h1>
        <label htmlFor="alias" className="form__label">
          Alias
        </label>
        <input
          id="alias"
          type="text"
          placeholder={user.alias}
          onChange={handleAlias}
        />

        <label htmlFor="username" className="form__label">
          Nom
        </label>
        <input
          id="username"
          type="text"
          placeholder={user.name}
          onChange={handleName}
        />

          <label htmlFor="description" className="form__label">
            Email
          </label>
          <input
            id="description"
            type="text"
            placeholder={user.email}
            onChange={handleEmail}
          />

          <Button
            type={"submit"}
            text={"Modifier"}
            className={"button__normal"}
          />
      </form>
    </div>
  );
};

export default UserUpdateForm;
