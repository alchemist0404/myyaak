import { combineReducers } from "redux"
import auth from "./auth"
import request from "./request"

export default combineReducers({
    auth,
    request,
})