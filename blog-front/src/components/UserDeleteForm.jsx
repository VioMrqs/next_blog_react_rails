import Button from "./Button";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../UserContext";

const UserUpdateForm = ({user}) => {
  const userToken = Cookies.get("token");
  const history = useNavigate();
  const { setUser } = useUserContext();

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
    setUser(null)
    history('/');
  };

  return (
    <form onSubmit={handleSubmit}>
      <Button
        type={"submit"}
        text={"Supprimer mon profil"}
        className={"button__normal"}
      />
    </form>
  );
};

export default UserUpdateForm;
