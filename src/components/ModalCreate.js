import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";
import {
  DialogTitle,
  DialogContent,
  Button,
  Dialog,
  TextField,
  DialogActions
} from "@material-ui/core";
import { connect } from "react-redux";
import { addPost } from "../store/module/post/Actions";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  dialogTitle: {
    textAlign: "center",
    background: "#3f51b5"
  }
}));

const ModalCreate = ({ title, visible, onClose, addPost }) => {
  const classes = useStyles();
  const [inputValueTitle, setInputValueTitle] = useState("");
  const [inputValueBody, setInputValueBody] = useState("");
  const newPost = () => {
    addPost(inputValueTitle, inputValueBody);
    onClose();
  };
  if (!visible) {
    return null;
  }
  return (
    <div>
      <Dialog
        open={visible}
        onClose={onClose}
        aria-labelledby="form-dialog-title"
        maxWidth="md"
        fullWidth="true"
      >
        <DialogTitle className={classes.dialogTitle} id="form-dialog-title">
          {title}
        </DialogTitle>
        <DialogContent>
          <TextField
            style={{
              height: "100px"
            }}
            multiline
            autoFocus
            margin="dense"
            id="title"
            label="Title"
            type="text"
            fullWidth
            onChange={event => setInputValueTitle(event.target.value)}
            value={inputValueTitle}
          />

          <TextField
            id="body"
            multiline
            autoFocus
            margin="dense"
            label="Body"
            type="text"
            fullWidth
            value={inputValueBody}
            onChange={event => setInputValueBody(event.target.value)}
          />
        </DialogContent>
        <DialogActions style={{
          justifyContent:"center"
        }}>
          <Button variant="contained" color="primary" onClick={newPost}>
            Create
          </Button>
          <Button variant="contained" color="secondary" onClick={onClose}>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
const mapDispatchToProps = {
  addPost
};
export default connect(null, mapDispatchToProps)(ModalCreate);
