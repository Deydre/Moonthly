import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { MdDelete } from "react-icons/md";

const AlertDialog = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button className="btnSquare" onClick={handleClickOpen}>
        <MdDelete />
      </Button>
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
            borderRadius:"14px",
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
          {"Are you sure you want to delete this media?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Changes can't' be undone once you accept
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>CANCEL</Button>
          <Button onClick={handleClose} autoFocus>

            ACCEPT
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}

export default AlertDialog;
