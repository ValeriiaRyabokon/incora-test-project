import { GET_COMMENT } from "./types";

const initialComments = {
    commentsList: [],
}
export const commentsReducer = (state = initialComments, action) => {
    switch (action.type) {
        case GET_COMMENT:
            return {
                ...state,
                commentsList: action.payload
            };
        default:
            return state
    }
}