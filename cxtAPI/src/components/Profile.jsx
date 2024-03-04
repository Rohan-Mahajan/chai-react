import { useContext } from "react";
import UserContext from "../context/UserContext";

function Profile() {
    // ye connection establish hua h context aur component k beech m
  const { user } = useContext(UserContext);
  if (!user) return <div>please login</div>;
  return (
    <div>
      <h1> Welcome {user.username}</h1>
    </div>
  );
}

export default Profile;
