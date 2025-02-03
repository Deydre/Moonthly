import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import HashLoader from "react-spinners/HashLoader";

// Import Auth
import { authentication } from "../../../../../firebase/firebaseConfig";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

const SignUp = ({updateSignUp}) => {

  const [loading, setLoading] = useState(false);

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [message, setMessage] = useState("");
  const [usernameMessage, setUsernameMessage] = useState("");
  const [passwordMessage, setPasswordMessage] = useState("");
  const [emailMessage, setEmailMessage] = useState("");

// Validation
  useEffect(() => {
    if (username.length < 0) {
      setUsernameMessage("Please enter a username");
    } else {
      setUsernameMessage("");
    }
  }, [username])

  useEffect(() => {
    const emailValidation = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    if (!emailValidation.test(email) && email.length > 0) {
      setEmailMessage("Email must have a valid format");
    } else {
      setEmailMessage("");
    }
  }, [email])

  useEffect(() => {
    const passwordValidation = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/
    if (!passwordValidation.test(password) && password.length > 0) {
      setPasswordMessage("Password must contain lowercase letters, uppercase letters, digits, and be at least 8 characters long.");

    } else {
      setPasswordMessage("");
    }
  }, [password])

  const handleUsername = (e) => setUsername(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);

  const handleRegister = async () => {
    setLoading(true);

    try {
      // Creating user with email and password
      const userCredential = await createUserWithEmailAndPassword(authentication, email, password);
      const { user } = userCredential;
      // Updating that user with a username
      await updateProfile(user, { displayName: username });
      console.log(`User created successfully: ${authentication.currentUser.displayName}`);
      updateSignUp(false);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChangeToLogin = () => {
    updateSignUp(false);
  }

  return <div className="signUp">

    <article id="divSignUp">
      <div>
        <h2>Sign Up</h2>
      </div>
      <div>
        <input type="text" placeholder="username" onChange={handleUsername} />
        <input type="text" placeholder="email" onChange={handleEmail} />
        <input type="password" placeholder="password" onChange={handlePassword} />

        <button onClick={handleRegister}>Register</button>
        {usernameMessage ? <h6>{usernameMessage}</h6> : ""}
        {emailMessage ? <h6>{emailMessage}</h6> : ""}
        {passwordMessage ? <h6>{passwordMessage}</h6> : ""}
        <h6>{message}</h6>
      </div>
      {loading ? (<HashLoader color="#fff" />) : ""}
    </article>
    <article id="divToSignUp">
          <button onClick={handleChangeToLogin}>Back to Login</button>
        </article>

  </div>;

};

export default SignUp;