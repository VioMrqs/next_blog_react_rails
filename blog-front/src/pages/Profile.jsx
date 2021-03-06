import { useUserContext } from "../UserContext";
import moment from "moment";
import UserUpdateForm from "../components/UserUpdateForm";
import UserDeleteForm from "../components/UserDeleteForm";

const Profile = () => {
const { user } = useUserContext()

  return (
    user && (
      <div className="profile__container">
        <h1>Profil</h1>
        <h2>
          {user.name} aka {user.alias}
        </h2>
        <p>{user.email}</p>
        <p>En ligne depuis {moment(user.created_at).format("MMM Do YY")}</p>
        <UserUpdateForm user={user} />
        <UserDeleteForm user={user} />
      </div>
    )
  );
};

export default Profile;
