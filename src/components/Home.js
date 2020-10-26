import React from "react";
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/core";
import { AppBar, Container, Toolbar, Typography } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow:1
      },
    forButton: {
        marginTop:theme.spacing(20)
    },

  }));

const Home = ({onClickUsers}) => {
    const classes = useStyles();
  return (
    <div> 
         <AppBar position="fixed">
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
        color="primary">
       Show all users
      </Button>
    </div>
  );
};
export default Home;