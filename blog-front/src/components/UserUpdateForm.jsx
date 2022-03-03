import Button from "./Button";
import { useState } from "react";
import Cookies from "js-cookie";

const UserUpdateForm = () => {
  const [alias, setAlias] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

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
  };

  return (
    <div className="form">
      <h1>Modifie ton profil</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="alias" className="form__label">
            Alias
          </label>
        </div>
        <div>
          <input id="alias" type="text" onChange={handleAlias} />
        </div>

        <div>
          <label htmlFor="username" className="form__label">
            Nom
          </label>
        </div>
        <div>
          <input id="username" type="text" onChange={handleName} />
        </div>

        <div>
          <label htmlFor="description" className="form__label">
            Email
          </label>
        </div>
        <div>
          <input id="description" type="text" onChange={handleEmail} />
        </div>

        <div>
          <Button type={"submit"} text={"Mettre à jour"} />
        </div>
      </form>
    </div>
  );
};

export default UserUpdateForm;
