import React, { useContext, useState } from "react";
import { context } from "../../../context/context";
import { v4 as uuidv4 } from 'uuid';
// Import MUI components
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
// Import firestore db
import { db } from "../../../../firebase/firebaseConfig";
import { doc, setDoc } from 'firebase/firestore';


const NewCardDialog = ({ open, handleClose }) => {

  const { profile } = useContext(context);

  const formatDate = (date) => {
    return new Intl.DateTimeFormat('es-ES', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(date);
  };

  const [formData, setFormData] = useState({
    type: "book",
    title: "",
    imageUrl: "",
    date: new Date().toISOString().split('T')[0]
  });

  const handleCreateItem = async (e) => {
    try {
      e.preventDefault();
      e.stopPropagation();
      // Creating the media item for that user
      await setDoc(doc(db, "users", profile.uid), {});
      const newUid = uuidv4();
      await setDoc(doc(db, "users", profile.uid, "media", newUid), {
        date: formatDate(formData.date),
        uid: newUid,
        title: formData.title,
        img: formData.imageUrl,
        type: formData.type
      });

      console.log("Form Data created succesfully:", formData);
      window.location.reload();
    } catch (error) {
      console.error("Error creating media: ", error);
    }
  };


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <React.Fragment>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        sx={{
          "& .MuiPaper-root": {
            position: "relative", borderRadius: "20px", fontFamily: "'Onest', sans-serif", padding: "4px", border: "4px solid transparent", backgroundClip: "content-box",
            "&::before": { content: '""', position: "absolute", top: 0, left: 0, right: 0, bottom: 0, zIndex: -1, borderRadius: "0px", padding: "4px", background: "linear-gradient(160deg, #ffa2aa, #b1ffb7, #f5f593)", WebkitMaskImage: "linear-gradient(white, white)" }
          },

          "& .MuiDialogTitle-root": { fontFamily: "'Onest', sans-serif", fontWeight: "600", },
          "& .MuiDialogContentText-root": { fontFamily: "'Onest', sans-serif", fontWeight: "400", },
          "& .MuiButton-root": {
            padding: "6px 16px",
            borderRadius: "14px",
            fontFamily: "'Onest', sans-serif",
            fontWeight: "600",
            color: "#fff",
            backgroundColor: "#FF77A9",
            "&:hover": { backgroundColor: "#FF4C75" },
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
            <label htmlFor="type"> Type: </label>
            <select id="type" name="type" value={formData.type} onChange={handleChange} required >
              <option value="book">Book</option>
              <option value="film">Film</option>
              <option value="series">Series</option>
              <option value="videogame">Videogame</option>
            </select>

            <label htmlFor="title"> Title: </label>
            <input id="title" type="text" name="title" value={formData.title} onChange={handleChange} required />

            <label htmlFor="imageUrl"> Image URL: </label>
            <input id="imageUrl" type="url" name="imageUrl" value={formData.imageUrl} onChange={handleChange} required />
            
            <label htmlFor="date"> Date: </label>
            <input id="date" type="date" name="date" value={formData.date} onChange={handleChange} required />

            <DialogActions>
              <Button onClick={handleClose}>CANCEL</Button>
              <Button type="submit" autoFocus>ACCEPT</Button>
            </DialogActions>
          </form>
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
}

export default NewCardDialog;
