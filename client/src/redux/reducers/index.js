import { combineReducers } from 'redux'
import dataReducer from './dataReducer'
import userReducer from './userReducer'

export default combineReducers({
    postData: dataReducer,
    user: userReducer
})