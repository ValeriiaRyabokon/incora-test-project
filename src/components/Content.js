import React  from "react";
import { makeStyles } from "@material-ui/core";
import {
  Grid,
  Button,
  Typography
} from "@material-ui/core";
import { connect } from "react-redux";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  wrapper:{
    padding:"15px 30px",
    borderBottom:"1px solid #ccc",
  }
}));

const Content = ({
  id,
  name,
  nameForButton,
  onClick,
  userId,
  details,
  obj,
}) => {
  const classes = useStyles();

  return (
    <>
      <Grid container direction="row"
  justify="space-around"
  alignItems="center"
  className={classes.wrapper}
  >
        <Grid xs="5">
          {name && (
            <Typography
            variant="body1" gutterBotom paragraph
              style={{
                width: "50%"
              }}
            >
              {name && name}
            </Typography>
          )}
        </Grid>
        <Grid xs="5">
          {details && (
            <Typography
            variant="body1" gutterBotom paragraph
            >
              {details}
            </Typography>
          )}
        </Grid>
        <Grid xs="2">
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
        </Grid>
      </Grid>
    </>
  );
};
const mapStateToProps = state => {
  return state;
};
export default connect(mapStateToProps, null)(Content);
