import React, { useContext, useState } from "react";
import { context } from "../../../context/context";
// Import MUI components
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { IoIosAdd } from "react-icons/io";
// Import firestore db
import { db } from "../../../../firebase/firebaseConfig";
import { doc, deleteDoc } from 'firebase/firestore';


const NewCardDialog = ({ mediaUid }) => {
  const [open, setOpen] = React.useState(false);

  const { profile } = useContext(context);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCreateItem = async (e) => {
    try {
      e.preventDefault();
      console.log("Form Data:", formData);
    } catch (error) {
      console.error("Error deleting media: ", error);
    }
  };

  const [formData, setFormData] = useState({
    title: "",
    imageUrl: "",
    type: "book",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };



  return (
    <React.Fragment>
      <IoIosAdd fontSize="60px" onClick={handleClickOpen} />
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        sx={{
          "& .MuiPaper-root": {
            position: "relative",
            borderRadius: "20px",
            fontFamily: "'Onest', sans-serif",
            padding: "4px",

            border: "4px solid transparent",
            backgroundClip: "content-box",

            "&::before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: -1,
              borderRadius: "0px",
              padding: "4px",
              background: "linear-gradient(160deg, #ffa2aa, #b1ffb7, #f5f593)",
              WebkitMaskImage: "linear-gradient(white, white)", // Asegura que el borde no se mezcle con el fondo
              maskImage: "linear-gradient(white, white)",
            }

          },

          "& .MuiDialogTitle-root": {
            fontFamily: "'Onest', sans-serif",
            fontWeight: "600",
          },
          "& .MuiDialogContentText-root": {
            fontFamily: "'Onest', sans-serif",
            fontWeight: "400",
          },
          "& .MuiButton-root": {
            padding: "6px 16px",
            borderRadius: "14px",
            fontFamily: "'Onest', sans-serif",
            fontWeight: "600",
            color: "#fff",
            backgroundColor: "#FF77A9",
            "&:hover": {
              backgroundColor: "#FF4C75",
            },
          }
        }}
      >
        <DialogTitle id="alert-dialog-title">
          {"Create new media"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Please select
          </DialogContentText>
          <form onSubmit={handleCreateItem}>
            <label htmlFor="title">
              Title:
            </label>
            <input
              id="title"
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
            />

            <label htmlFor="imageUrl">
              Image URL:
            </label>
            <input
              id="imageUrl"
              type="url"
              name="imageUrl"
              value={formData.imageUrl}
              onChange={handleChange}
              required
            />

            <label htmlFor="type">
              Type:
            </label>
            <select
              id="type"
              name="type"
              value={formData.type}
              onChange={handleChange}
              required
            >
              <option value="book">Book</option>
              <option value="film">Film</option>
              <option value="series">Series</option>
              <option value="videogame">Videogame</option>
            </select>
            <DialogActions>
              <Button onClick={handleClose}>CANCEL</Button>
              <Button
                onClick={handleCreateItem} autoFocus>ACCEPT</Button>
            </DialogActions>
          </form>
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
}

export default NewCardDialog;
