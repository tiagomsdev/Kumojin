import React from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle
} from "@material-ui/core";
import EventForm from "./EventForm";

function EventDialog({onSubmit}) {
  const [open, setOpen] = React.useState(false);

  function handleClickOpen(){
    setOpen(true);
  };

  function handleClose(){
    setOpen(false);
  };
  
  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open form dialog
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Créer un événement</DialogTitle>
        <DialogContent>
          <EventForm handleClose={handleClose} onSubmit={onSubmit}/>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default EventDialog;
