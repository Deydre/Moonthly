import React from "react";
import { MdDelete } from "react-icons/md";

const Card = ({ data }) => {
  return <>
    <article className="card" style={{ backgroundImage: `url(${data.img})` }}>
      <div className="textCard">
        <div className="infoDiv">
          <div className="tag">
            <p>#{data.type}</p>
          </div>
          <button className="btnSquare">
            <MdDelete />
          </button>
        </div>
        <div>
          <h4>{data.title}</h4>
        </div>
      </div>

    </article>
  </>
};

export default Card;
