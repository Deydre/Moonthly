import React, { useState } from "react";
import { IoIosAdd } from "react-icons/io";
import NewCardDialog from "../../../../commons/newCardDialog/NewCardDialog";

const CardAdd = ({ monthNumber }) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return <>
    <article className="card" id="cardAdd" onClick={handleClickOpen}>
      <IoIosAdd fontSize="60px" />
    </article>
    <NewCardDialog open={open} handleClose={handleClose} monthNumber={ monthNumber } />
  </>
};

export default CardAdd;
