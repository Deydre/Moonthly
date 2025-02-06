import React, { useState, useContext } from "react";
import { context } from "../../../context/context";

import Month from "./Month/Month";
import { v4 as uuidv4 } from 'uuid';

const Home = () => {
  const { profile } = useContext(context);
  let userId;
  profile ? userId = profile.uid : null;

  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  // Loop through array of media and painting items into cards
  const renderMonths = () => {
    return months.map((month, i) => <Month monthName={month} key={uuidv4()} />)
  }

  return <section id="home">

    {profile ? <>
      <h3>¡Bienvenid@, {profile.username}!</h3>
      {renderMonths()}
    </> : <p>Cargando.....</p> // ⚡ CARGANDO...
    }


  </section>;
};

export default Home;
