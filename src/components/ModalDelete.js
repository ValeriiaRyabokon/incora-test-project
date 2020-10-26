import React from "react";

import { makeStyles } from "@material-ui/core";
import {
  DialogTitle,
  Button,
  Typography,
  DialogActions,
  Dialog
} from "@material-ui/core";
import { connect } from "react-redux";
import { deletePost } from "../store/module/post/Actions";



const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  dialogTitle: {
    textAlign: "center",
    background: "#3f51b5"
  }
}));

const ModalDelete = ({ visible, onClose, id }) => {
  const classes = useStyles();
  const onDelete = () => {
    deletePost(id);
    console.log("good");
  };

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
        <DialogTitle className={classes.dialogTitle} id="form-dialog-title">
          Delete
        </DialogTitle>
        <DialogActions>
          <Typography>Do you realle want to delete this post?</Typography>
          <Button variant="contained" color="primary" onClick={onDelete}>
            Delete
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
  deletePost
};

export default connect(null, mapDispatchToProps)(ModalDelete);
