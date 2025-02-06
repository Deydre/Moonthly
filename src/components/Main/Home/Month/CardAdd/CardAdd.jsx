import React, { useState } from "react";
import NewCardDialog from "../../../../commons/newCardDialog";

const CardAdd = () => {

  return <>
    <article className="card" id="cardAdd">
      <NewCardDialog/>
    </article>
  </>
};

export default CardAdd;
