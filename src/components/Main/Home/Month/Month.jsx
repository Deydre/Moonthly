import React, { useState, useEffect, useContext } from "react";
import { context } from "../../../../context/context";

import Card from "../Card/Card";
import { v4 as uuidv4 } from 'uuid';

// db
import { db } from "../../../../../firebase/firebaseConfig";
import { collection, getDocs, query, orderBy } from "firebase/firestore";

const Month = ({ monthName }) => {

    const { profile } = useContext(context);
    let userId;
    profile ? userId = profile.uid : null;

    const [media, setMedia] = useState([]);

   // Loop through array of media and painting items into cards
   const renderCards = () => {
    return media.map((item, i) => <Card data={item} key={uuidv4()} />)
  }

    // Getting media from actual user and year to paint it
    useEffect(() => {
      const getData = async () => {
        if (!userId) return;
  
        try {
          // Subcollection "media" inside user's document
          const mediaRef = collection(db, "users", userId, "media");
  
          // Obtaining all documents ordered by date
          const mediaQuery = query(mediaRef, orderBy("date", "desc"));
          const mediaSnapshot = await getDocs(mediaQuery);
  
          // Transform documents into an array
          const mediaData = mediaSnapshot.docs.map(doc => doc.data());
  
          setMedia(mediaData)
  
        } catch (err) {
          console.error(err);
        }
      }
      getData();
    }, [profile])

  return <section>
    <h1>{monthName}</h1>
    {renderCards()}
  </section>;
};

export default Month;
