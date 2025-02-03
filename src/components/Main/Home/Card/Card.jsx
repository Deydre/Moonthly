import React from "react";

const Card = ({data}) => {
  console.log(data)
  return <article class="card">
    <img src={data.img} alt={data.title} />
    <h4>{data.title}</h4>
    <p>#{data.type}</p>
  </article>;
};

export default Card;
