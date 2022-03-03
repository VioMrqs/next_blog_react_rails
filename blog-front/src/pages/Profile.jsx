import { useUserContext } from "../UserContext";
import moment from "moment";
import UserUpdateForm from "../components/UserUpdateForm";
import UserDeleteForm from "../components/UserDeleteForm";

const Profile = () => {
const { user } = useUserContext()

  return (
    user && (
      <div className="profile">
        <div className="profile__card">
          <h1>
            {user.name} aka {user.alias}
          </h1>
          <p>{user.email}</p>
          <p>
            En ligne depuis {moment(user.created_at).format("MMM Do YY")}
          </p>
        </div>
        <UserUpdateForm/>
        <UserDeleteForm/>
      </div>
    )
  );
};

export default Profile;
