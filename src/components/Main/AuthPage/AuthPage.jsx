import React, { useState } from "react";
import Login from "./Login/Login";
import SignUp from "./SignUp/SignUp";

const AuthPage = () => {

  const [signUp, setSignUp] = useState(false);

  const updateSignUp = (data) => {
    setSignUp(data)
  }

  return (
    <>
      {signUp === false ? <Login updateSignUp={updateSignUp} />
        : <SignUp updateSignUp={updateSignUp}/>}
    </>
  )
};

export default AuthPage;