import React, { useState, useEffect, useContext } from "react";
import { context } from "../../../../context/context";
import HashLoader from "react-spinners/HashLoader";

// Import Auth
import { authentication } from "../../../../../firebase/firebaseConfig";
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const Login = ({ updateSignUp }) => {
  const { updateProfile } = useContext(context);

  const [loading, setLoading] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [message, setMessage] = useState("");
  const [passwordMessage, setPasswordMessage] = useState("");
  const [emailMessage, setEmailMessage] = useState("");

  // Validation
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

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);

  const handleLogin = async () => {
    setLoading(true);
    try {
      const userCredential = await signInWithEmailAndPassword(authentication, email, password);
      const user = userCredential.user;
      setLoading(false);
      updateProfile({
        username: user.displayName,
        uid: user.uid
      })
    } catch (error) {
      console.log(error);
    }
  };

  const handleChangeToSignUp = () => {
    updateSignUp(true);
  }

  // Google Auth
  const handleGoogleSignIn = async () => {
    setLoading(true);
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(authentication, provider);
      const user = result.user;
      console.log("Usuario autenticado con Google:", user);
      updateProfile({
        username: user.displayName,
        uid: user.uid,
      });
    } catch (error) {
      console.log("Error en la autenticación con Google:", error);
      setMessage("Error al iniciar sesión con Google");
    } finally {
      setLoading(false);
    }
  };



  return <div className="login">
    {loading ? (
      <HashLoader color="#fff" />
    ) : (
      <>
        <article id="divLogin">
          <div>
            <h2>Login 🎮</h2>
          </div>
          <div>
            <input type="text" placeholder="email" onChange={handleEmail} />
            <input type="password" placeholder="password" onChange={handlePassword} />
            <button onClick={handleLogin}>LOGIN</button>
            {emailMessage && <h6>{emailMessage}</h6>}
            {passwordMessage && <h6>{passwordMessage}</h6>}
            <h6>{message}</h6>
          </div>
        </article>
        <div>
              <button onClick={handleGoogleSignIn}>Sign in with Google</button>
            </div>
        <article id="divToSignUp">
          <button onClick={handleChangeToSignUp}>No account? Sign Up!</button>
        </article>

      </>
    )}
  </div>;
};

export default Login;
