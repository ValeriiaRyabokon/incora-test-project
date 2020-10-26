import React from 'react';
import {makeStyles} from '@material-ui/core';
import {
  AppBar,
  Container,
  Toolbar,
  Typography,
  Button,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  forButton: {
    marginTop: theme.spacing(20),
  },
}));

export const HomePage = ({onClickUsers}) => {
  const classes = useStyles();
  return (
    <div>
      <AppBar position="fixed" >
        <Container fixed>
          <Toolbar>
            <Typography variant="h4" component="h3">
              You can show all users
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>
      <Button
        onClick={onClickUsers}
        className={classes.forButton}
        size="large"
        variant="contained"
        color="primary"
      >
        Show all users
      </Button>
    </div>
  );
};
