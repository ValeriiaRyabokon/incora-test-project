import axios from 'axios';
import {GET_COMMENT} from './types';
export const setComments = (payload) => ({type: GET_COMMENT, payload});

export const getComments = () => (dispatch) => {
  axios
    .get(`https://jsonplaceholder.typicode.com/comments`)
    .then(({data}) => {
      dispatch(setComments(data));
    })
    .catch((error) => {
      console.log(error);
    });
};
