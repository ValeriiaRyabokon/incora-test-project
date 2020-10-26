import React from "react";
import { makeStyles } from "@material-ui/core";
import {
  AppBar,
  Toolbar,
  Button,
  Typography,
  Container,
  Box
} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between"
  }
}));

const Header = ({
  nameByPage,
  nameForFirstButton,
  nameForSecondButton,
  onClickFirstButton,
  onClickSecondButton
}) => {
  const classes = useStyles();

  return (
    <>
      <AppBar position="fixed">
        <Container fixed>
          <Toolbar className={classes.toolbar}>
            <Typography variant="h4" gutterBotom paragraph>
              {nameByPage}
            </Typography>
            <span
              style={{
                display: "flex"
              }}
            >
              {nameForFirstButton && (
                <Box mr={3}>
                  <Button
                    size="small"
                    variant="contained"
                    color="primary"
                    onClick={onClickFirstButton}
                  >
                    {nameForFirstButton}
                  </Button>
                </Box>
              )}
              {nameForSecondButton && (
                <Box mr={3}>
                  <Button
                    style={{
                      marginRight: "10px"
                    }}
                    size="small"
                    variant="contained"
                    color="primary"
                    onClick={onClickSecondButton}
                  >
                    {nameForSecondButton}
                  </Button>
                </Box>
              )}
            </span>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};

export default Header;
