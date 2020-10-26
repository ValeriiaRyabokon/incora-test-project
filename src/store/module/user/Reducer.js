import { GET_USERS } from "./types";

const initialUsers = {
    usersList: [],
}
export const usersReducer = (state = initialUsers, action) => {
    switch (action.type) {
        case GET_USERS:
            return {
                ...state,
                usersList: action.payload
            };
        default:
            return state
    }
}