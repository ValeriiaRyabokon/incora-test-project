import { GET_POST } from "./types";
import { DELETE_POST } from "./types";

const initialPosts = {
    postsList: [],
}
export const postsReducer = (state = initialPosts, action) => {
    switch (action.type) {
        case GET_POST:
            return {
                ...state,
                postsList: action.payload
            }

        case DELETE_POST:
            return action.payload;

        default:
            return state
    }
}