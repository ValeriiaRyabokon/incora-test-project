import { CREATE_POST } from "../types/types"

const initialPosts = {
    posts: [],
    fetchedPosts: []
}
export const postsReducer = (state = initialPosts, action) => {
    switch(action.type){
        case CREATE_POST:
            console.log(action.payload)
           return action.payload ;
            default: return state
    }
}