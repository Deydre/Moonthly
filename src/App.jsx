import { useEffect, useState } from 'react'
import { context } from './context/context'
import { authentication } from '../firebase/firebaseConfig';
import { onAuthStateChanged } from "firebase/auth";
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'

function App() {
  const [profile, setProfile] = useState(null);

  // Listener for changes in authentication
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(authentication, (user) => {
      try {
        if (user) {
          console.log("User logged:", user.displayName);
          setProfile({
            username: user.displayName,
            uid: user.uid
          })
        } else {
          console.log("No logged user");
          setProfile(null)
        }
      } catch (error) {
        console.log(error)
      }
    });
    // Cleanup
    return () => unsubscribe();
  }, []);

  // Login and logout manual authentication changes
  const updateProfile = (data) => {
    setProfile(data)
  };

  return (
    <>
      <BrowserRouter >
        <context.Provider value={{ profile, updateProfile }}>
          <Header />
          <Main />
        </context.Provider>
      </BrowserRouter>
      <Footer />
    </>
  )
}

export default App
