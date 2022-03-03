import Button from "./Button";
import { useState } from "react";
import Cookies from "js-cookie";

const UserUpdateForm = () => {
  const userToken = Cookies.get("token");

  const deleteForm = async () => {
    const response = await fetch(`http://localhost:3000/users`, {
      method: `DELETE`,
      headers: {
        Authorization: `${userToken}`,
        "Content-Type": "application/json",
      },
    });
    const result = await response.json();
    console.log(result);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    deleteForm();
  };

  return (
    <form onSubmit={handleSubmit}>
      <Button type={"submit"} text={"Supprimer mon profil"} />
    </form>
  );
};

export default UserUpdateForm;
