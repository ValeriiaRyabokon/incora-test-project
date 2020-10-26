import axios from 'axios';
import {GET_USERS} from './types';

export const setUsers = (payload) => ({type: GET_USERS, payload});

export const getUsers = () => (dispatch) => {
  axios
    .get(`https://jsonplaceholder.typicode.com/users`)
    .then(({data}) => {
      dispatch(setUsers(data));
    })
    .catch((error) => {
      console.log(error);
    });
};
