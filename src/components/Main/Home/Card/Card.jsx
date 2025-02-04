import React, { useState } from "react";
import AlertDialog from "../../../commons/AlertDialog/AlertDialog";

const Card = ({ data }) => {

  let [dialogIsOpen, setDialogIsOpen] = useState(false)

  return <>
    <article className="card" style={{ backgroundImage: `url(${data.img})` }}>
      <div className="textCard">
        <div className="infoDiv">
          <div className="tag">
            <p>#{data.type}</p>
          </div>
            <AlertDialog />
        </div>
        <div>
          <h4>{data.title}</h4>
        </div>
      </div>
    </article>
  </>
};

export default Card;
