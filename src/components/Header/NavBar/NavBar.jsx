import React, { useContext } from "react";
import { context } from "../../../context/context";

// Import Auth
import { authentication } from "../../../../firebase/firebaseConfig";
import { signOut } from "firebase/auth";

const NavBar = () => {

  const { profile, updateProfile } = useContext(context);

  const handleLogout = async () => {

    try {
      await signOut(authentication);
      updateProfile(null)
    } catch (error) {
      console.log(error.message);
    }
  };

  return <nav id="navBar">
    <ul>
      <div>
        {profile 
          ? <li onClick={handleLogout} className="nav-link active">LOGOUT</li>
         : null
        }
      </div>

    </ul>
  </nav>
};

export default NavBar;
