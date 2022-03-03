// // L'usager doit pouvoir supprimer son compte
// // L'usager doit pouvoir consulter son profil usager :
// // Username
// // Prénom/Nom
// // Email
// // Date d'inscription

// // L'usager doit pouvoir éditer son profil (email, prénom, nom)

import { useUserContext } from "../UserContext";

const Profile = () => {
const { user } = useUserContext()

  // return & conditions

  // if (logInfo.connected && profileData) {
  //   return (
  //     <div className="profile">
  //       <div className="profile__card">
  //         <h1>Profile de {profileData.username}</h1>
  //         <h2>{profileData.description}</h2>
  //         <p>{profileData.email}</p>
  //       </div>
  //       <UserUpdateForm profile={profileData} />
  //   );
  // } else {
  return (
    (user &&
    <div className="profile">
      <div className="profile__card">
        {/* <h1>Profile de {profileData.username}</h1> */}
        {/* <h2>{profileData.description}</h2> */}
        <p>{user.email}</p>
      </div>
    </div>
  )
  )

  // }
};

export default Profile;
