import React, {useState} from "react";
import { makeStyles } from "@material-ui/core";
import { DialogTitle, DialogContent, Button, Dialog,TextField , DialogActions } from "@material-ui/core";
import { connect } from "react-redux";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  dialogTitle: {
textAlign:"center",
background:"#3f51b5"
  }
}));

const ModalEdit= ({ visible, onClose }) => {
  const classes = useStyles();
  const [inputValueTitle, setInputValueTitle]= useState('');
  const [inputValueBody, setInputValueBody]= useState('');

  if (!visible) {
    return null;
  }
  return (
    <div>
      <Dialog
        open={visible}
        aria-labelledby="form-dialog-title"
        maxWidth="md"
        fullWidth="true"
        onClose={onClose}
      >
        <DialogTitle
        className={classes.dialogTitle}
        id="form-dialog-title"
        >
       Edit Post
        </DialogTitle>
        <DialogContent>
          <TextField
          style={{
              height:"100px"
          }}
            multiline
            autoFocus
            margin="dense"
            id="title"
            label="title"
            type="text"
            fullWidth
            onChange={(event)=>setInputValueTitle(event.target.value)}
            value={inputValueTitle}
          />

          <TextField
            id="body"
            multiline
            autoFocus
            margin="dense"
            label="body"
            type="text"
            fullWidth
            value={inputValueBody}
            onChange={(event)=>setInputValueBody(event.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button variant="contained" color="primary">Edit</Button>
          <Button variant="contained" color="secondary" onClick={onClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default connect(null,null)(ModalEdit);