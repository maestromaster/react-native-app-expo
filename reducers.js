import {combineReducers} from 'redux'

export const ADD_POST = "ADD_POST"
const FETCH_POSTS = "FETC_POSTS"
const FETCH_POSTS_COMPLETE = "FETCH_POSTS_COMPLETE"

const reddit = (state = [
    {name: "one"},
    {name: "two"}
], action) => {
    switch (action.type) {
        case ADD_POST:
            return [
                ...state,
                action.payload
            ];
        case FETCH_POSTS:
            return state;
        case FETCH_POSTS_COMPLETE:
            return action.payload;
        default:
            return state;      
    }
};

export const reducer = combineReducers({reddit})