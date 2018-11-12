import {LOGIN_ERROR, AUTH_ERROR} from "../actions/types";

const initialState = [];
export default (state = initialState, action) => {
    switch (action.type) {
        case AUTH_ERROR:
            return ["You must be logged in to do that!"]
        case LOGIN_ERROR:
            return ["Your email or password was incorrect"]
        default:
            return state
    }
}