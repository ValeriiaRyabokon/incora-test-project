import { combineReducers } from 'redux'
import { usersReducer } from './module/user/Reducer'
import { postsReducer } from "./module/post/Reducer";
import { reducer as formReducer } from 'redux-form'
import { commentsReducer } from './module/comment/Reducer';
export const rootReducer = combineReducers({
    users: usersReducer,
    posts: postsReducer,
    comments: commentsReducer,
    form: formReducer
})