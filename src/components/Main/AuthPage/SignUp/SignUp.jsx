import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import HashLoader from "react-spinners/HashLoader";

// Import Auth
import { authentication } from "../../../../../firebase/firebaseConfig";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

// Import firestore db
import { db } from "../../../../../firebase/firebaseConfig";
import { getFirestore, doc, setDoc, collection } from "firebase/firestore";

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
      // Waiting Firebase to update user's info
      await authentication.currentUser.reload(); 
      console.log(`User created successfully: ${authentication.currentUser.displayName}`);
      
      // Media Examples for new user
      const mediaExamples = [
        {
          title: "Portal (Example videogame)",
          img: "https://assetsio.gnwcdn.com/co1x7d.jpg?width=1200&height=1200&fit=bounds&quality=70&format=jpg&auto=webp",
          type: "videogame",
        },
        {
          title: "Breaking Bad (Example series)",
          img: "https://i.ebayimg.com/images/g/eKEAAOxyOMdS4U2W/s-l400.jpg",
          type: "series",
        },
        {
          title: "Queen (Example Music)",
          img: "https://i.ebayimg.com/images/g/6CoAAOSwJoxch9GO/s-l1200.jpg",
          type: "music",
        },
      ];


      // Creating docs and collections for that user
      await setDoc(doc(db, "users", user.uid), {});
      for (const example of mediaExamples) {
        await setDoc(doc(db, "users", user.uid, "media", example.title), {
          date: new Date(),
          ...example,
        });
      }

      console.log(`Collections for new user created successfully`);
      setTimeout(() => {
        window.location.reload();
      }, 500); 
      updateSignUp(false);
    } catch (error) {
      console.log(error);
    }finally {
      setLoading(false);
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