import { combineReducers } from "redux"

import tweets from "./tweetsReducer"
import user from "./userReducer"
import nameReducer from './nameReducer'
import loginReducer from './loginReducer'
import chatsReducer from './chatsReducer'

export default combineReducers({
  tweets,
  user,
  nameReducer,
  loginReducer,
  chatsReducer
})
