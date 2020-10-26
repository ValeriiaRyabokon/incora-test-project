import axios from "axios";
import { GET_POST } from "./types";
export const setPost = (payload) => ({ type: GET_POST, payload })

export const getPosts = () => (dispatch) => {
    axios
        .get(`https://jsonplaceholder.typicode.com/posts?_expand=user`)
        .then(({ data }) => {
            console.log(data, 'action')
            dispatch(setPost(data))
        })
        .catch(error => {
            console.log(error)
        });
}
export const addPost = (title, body) => (dispatch) => {
    const _params = {
        title,
        body,
    }
    axios
        .post(`https://jsonplaceholder.typicode.com/posts`, _params).then(res => {
            console.log(res, 'need params')
            if (res.status === 201) dispatch(getPosts())
        }).catch(error => {
            console.log(error)
        });
}
export const deletePost = (id) => (dispatch) => {

    axios
        .delete(`https://jsonplaceholder.typicode.com/posts/${id}`).then(res => {
            if (res.status === 202) dispatch(getPosts())
        }).catch(error => {
            console.log(error)
        })
}