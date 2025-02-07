import React, { useState } from "react";
import AlertDialog from "../../../../commons/AlertDialog/AlertDialog";

const Card = ({ data }) => {

  return <>
    <article className="card" id= {data.uid} style={{ backgroundImage: `url(${data.img})` }}>
      <div className="textCard">
        <div className="infoDiv">
          <div className="tag">
            <p>#{data.type}</p>
          </div>
            <AlertDialog mediaUid={data.uid}/>
        </div>
        <div>
          <h4>{data.title}</h4>
        </div>
      </div>
    </article>
  </>
};

export default Card;
