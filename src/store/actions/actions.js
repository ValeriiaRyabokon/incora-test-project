import {CREATE_POST} from '../types/types'
export function createPost(post){
    return{
        type:CREATE_POST,
        payload:post
    }
}