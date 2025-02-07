import React, { useState } from "react";
import { IoIosAdd } from "react-icons/io";
import NewCardDialog from "../../../../commons/newCardDialog";

const CardAdd = () => {
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
    <NewCardDialog open={open} handleClose={handleClose} />
  </>
};

export default CardAdd;
