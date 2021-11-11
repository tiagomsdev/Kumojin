import React from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle
} from "@material-ui/core";
import EventForm from "./EventForm";

function EventDialog({getUserTokenCookie}) {
  const [open, setOpen] = React.useState(false);

  function handleClickOpen(){
    setOpen(true);
  };

  function handleClose(){
    setOpen(false);
  };
  
  return (
    <div>
      <Button variant="contained" onClick={handleClickOpen}>
        + Nouveau
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Créer un événement</DialogTitle>
        <DialogContent>
          <EventForm handleClose={handleClose} getUserTokenCookie={getUserTokenCookie}/>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default EventDialog;
