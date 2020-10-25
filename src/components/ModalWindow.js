import React, {useState} from "react";
import Dialog from "@material-ui/core/Dialog";
import { makeStyles } from "@material-ui/core";
import { DialogTitle, DialogContent, Button } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import DialogActions from "@material-ui/core/DialogActions";
import { connect } from "react-redux";
import {createPost} from '../store/actions/actions'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  dialogTitle: {
textAlign:"center",
background:"#3f51b5"
  }
}));

const ModalWindow = ({ title, visible, onClose, userId }) => {
  const classes = useStyles();
  const [inputValueTitle, setInputValueTitle]= useState('');
  const [inputValueBody, setInputValueBody]= useState('');
 const newPost=()=>{
     const obj={
         userId:userId,
         id:Date.now().toString(),
         title:inputValueTitle,
         body:inputValueBody
     }
     //ми тут начебто і закидаємо до екшина ля новий пост
     createPost(obj)
 }
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
        <DialogTitle 
        className={classes.dialogTitle}
        id="form-dialog-title"
        >
        {title}
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
          <Button color="primary" onClick={newPost}>Create</Button>
          <Button color="primary">Cancel</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
const mapDispatchToProps={
  createPost
}
export default connect(null,mapDispatchToProps)(ModalWindow);
