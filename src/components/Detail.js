import React from 'react';
import {makeStyles} from '@material-ui/core';
import {Typography, Card, CardContent, Container} from '@material-ui/core';
import {connect} from 'react-redux';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: '5px',
  },
}));

export const Detail = ({obj, details}) => {
  const classes = useStyles();
  return (
    <>
      <Container
        style={{
          marginTop: '100px',
        }}
      >
        <Typography variant="h5" gutterBotom paragraph>
          {details}
        </Typography>
        <Typography
          variant="h5"
          gutterBotom
          paragraph
          style={{
            fontWeight: '900',
          }}
        >
          Comments:
        </Typography>
        {obj.map((comment) => (
          <Card className={classes.root}>
            <CardContent>
              <Typography variant="body1" component="h2">
                {comment.email}
              </Typography>
              <Typography className={classes.pos} color="textSecondary">
                {comment.body}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Container>
    </>
  );
};
