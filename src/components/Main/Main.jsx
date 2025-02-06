import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import AuthPage from "./AuthPage/AuthPage";
import Home from "./Home/Home";
import { context } from "../../context/context";
import { useNavigate } from "react-router-dom";

import Month from './Home/Month/Month'
import { v4 as uuidv4 } from 'uuid';

const Main = () => {

  const { profile } = useContext(context);

  // Route for Home when user is logged or not
  const handleFirstRoute = () => {
    const navigate = useNavigate();

    // ⚡ CARGANDO...
    React.useEffect(() => {
      if (profile === null) {
        navigate('/authpage');
      } else {
        navigate('/')
      }
    }, [profile, navigate]);

  };

  handleFirstRoute()

  return <main>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/authpage' element={<AuthPage />} />
      <Route path='/*' element={<Home />} />
    </Routes>
    {/* {renderMonths()} */}
  </main >;
};

export default Main;
