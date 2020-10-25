import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core";
import { AppBar, Toolbar, Grid, Paper, Button } from "@material-ui/core";
import { connect } from "react-redux";
import ModalWindow from "./ModalWindow";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    maxWidth: "90%",
    display: "flex",
    justifyContent: "space-between"
  },
  forList: {
    marginTop: theme.spacing(10)
  },
  sykaaa: {
    maxWidth: "100%",
    marginTop: theme.spacing(1)
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    marginRight: "70px"
  }
}));

const Users = ({
  id,
  name,
  nameByPage,
  nameForButton,
  onClick,
  userId,
  details
}) => {
  const classes = useStyles();
  const [visibleModal, setVisibleModal] = useState(false);
  const handleClickModal = () => {
    setVisibleModal(!visibleModal);
  };
  return (
    <>
      <AppBar position="fixed">
        <Container fixed>
          <Toolbar className={classes.header}>
            <Typography variant="h4" component="h3">
              {nameByPage}
            </Typography>
            {userId && (
              <Button
                size="small"
                variant="contained"
                color="primary"
                onClick={handleClickModal}
              >
                Add new Post
              </Button>
            )}
          </Toolbar>
        </Container>
      </AppBar>
      <Container className={classes.forList}>
        <Grid item xs={4} className={classes.sykaaa} key={id}>
          <Paper className={classes.paper}>
            {name && (
              <Typography
                style={{
                  width: "40%"
                }}
              >
                {name && name}
              </Typography>
            )}

            {details && (
              <Typography
                style={{
                  border: "#015367"
                }}
              >
                {details
                  .split("")
                  .splice(0, 20)
                  .join("")}
              </Typography>
            )}

            {nameForButton && (
              <Button
                onClick={() => onClick(id, userId)}
                size="small"
                variant="contained"
                color="primary"
              >
                {nameForButton}
              </Button>
            )}
          </Paper>
        </Grid>
        <ModalWindow
          visible={visibleModal}
          onClose={handleClickModal}
          title="New Post"
          userId={userId}
        />
      </Container>
    </>
  );
};
const mapStateToProps=state=>{

  return state
}
export default connect(mapStateToProps,null)(Users);
