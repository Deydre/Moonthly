import React, { useState, useEffect, useContext } from "react";
import { context } from "../../../../context/context";

import Card from "./Card/Card";
import CardAdd from "./CardAdd";
import { v4 as uuidv4 } from 'uuid';

// db
import { db } from "../../../../../firebase/firebaseConfig";
import { collection, getDocs, query, orderBy, where } from "firebase/firestore";

const Month = ({ monthName, monthNumber }) => {

  const { profile } = useContext(context);
  let userId;
  profile ? userId = profile.uid : null;

  const [media, setMedia] = useState([]);
  const [year, setYear] = useState(new Date().getFullYear());

  // Getting media from actual user and year to paint it
  useEffect(() => {
    const getData = async () => {
      if (!userId) return;

      try {
        // Subcollection "media" inside user's document
        const mediaRef = collection(db, "users", userId, "media");

        // Get 1 speciffic year
        const startDate = new Date(year, 0, 1);
        const endDate = new Date((year + 1), 0, 1);

        // Obtaining all documents of that year
        const mediaQuery = query(
          mediaRef,
          where("date", ">=", startDate),
          where("date", "<", endDate),
          orderBy("date", "desc")
        );
        const mediaSnapshot = await getDocs(mediaQuery);

        // Transform documents into an array, converting 'date' into separate day, month, and year properties
        const mediaData = mediaSnapshot.docs.map(doc => {
          const data = doc.data();
          if (data.date && data.date.toDate) {
            const dateObj = data.date.toDate();
            data.day = ("0" + dateObj.getDate()).slice(-2); //day
            data.month = ("0" + (dateObj.getMonth() + 1)).slice(-2); // month
            data.year = dateObj.getFullYear(); // year
          }
          return data;
        });

        setMedia(mediaData)

      } catch (err) {
        console.error(err);
      }
    }
    getData();
  }, [profile])

  // Loop through the array of media and render the items as cards for each month
  const renderCards = () => {
    return media
      .filter(item => item.month === monthNumber)
      .map(item => <Card data={item} key={uuidv4()} />);
  }

  // Seasons for scss
  let season;
  switch (monthNumber) {
    case "12":
    case "01":
    case "02":
      season = "winter";
      break;
    case "03":
    case "04":
    case "05":
      season = "spring";
      break;
    case "06":
    case "07":
    case "08":
      season = "summer";
      break;
    case "09":
    case "10":
    case "11":
      season = "autumn";
      break;
    default:
      season = "";
  }

  return <section className={`month ${season}`} id={monthNumber}>
    <h3>{monthName}</h3>
    <div id="cardsContainer">
      {renderCards()}
      <CardAdd monthNumber={ monthNumber } />
    </div>

  </section>;
};

export default Month;
