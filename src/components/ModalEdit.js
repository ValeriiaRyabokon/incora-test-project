import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {useRouteMatch} from 'react-router-dom';
import {makeStyles} from '@material-ui/core';
import {
  DialogTitle,
  DialogContent,
  Button,
  Dialog,
  TextField,
  DialogActions,
} from '@material-ui/core';
import UsersSelector from 'store/module/user/Selector';
import CommentsSelector from 'store/module/comment/Selector';
import {editPost} from 'store/module/post/Actions';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  dialogTitle: {
    textAlign: 'center',
    background: '#3f51b5',
  },
}));

const Modal = ({visible, onClose, usersList, commentsList, editPost}) => {
  const classes = useStyles();
  const [inputValueTitle, setInputValueTitle] = useState('');
  const [inputValueBody, setInputValueBody] = useState('');
  

  const match = useRouteMatch();
  const {id, userId} = match.params;

  useEffect(() => {
    if(commentsList.length) {
      const data = commentsList.find(i => i.id == id);
      setInputValueTitle(data.name)
      setInputValueBody(data.body)
    }
  }, [commentsList]);
  
  const handleEditClick = () => {
    editPost(inputValueTitle, inputValueBody, userId, id);
  }

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
          Edit Post
        </DialogTitle>
        <DialogContent>
          <TextField
            style={{
              height: '100px',
            }}
            multiline
            autoFocus
            margin="dense"
            id="title"
            label="Title"
            type="text"
            fullWidth
            onChange={(event) => setInputValueTitle(event.target.value)}
            value={inputValueTitle}
          />

          <TextField
            id="body"
            multiline
            margin="dense"
            label="Body"
            type="text"
            fullWidth
            value={inputValueBody}
            onChange={(event) => setInputValueBody(event.target.value)}
          />
        </DialogContent>
        <DialogActions
          style={{
            justifyContent: 'center',
          }}
        >
          <Button variant="contained" color="primary" onClick={handleEditClick}>
            Edit
          </Button>
          <Button variant="contained" color="secondary" onClick={onClose}>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

const mapStateToProps = (state) => ({
  usersList: UsersSelector.getUsersSelector(state),
  commentsList: CommentsSelector.getCommentsSelector(state),
});

const mapDispatchToProps = {
  editPost,
};

export const ModalEdit = connect(mapStateToProps, mapDispatchToProps)(Modal);