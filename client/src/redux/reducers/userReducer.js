import { LOGIN_USER_FORM, LOGOUT_USER_FORM, LOGIN_USER_GITHUB,LOGOUT_USER_GITHUB} from '../actions/types'

const initialState = {
    isAuthenticated: true
}

export default (state = initialState, action) => {
    switch(action.type){
        case LOGIN_USER_FORM:
            return {
                ...state,
                isAuthenticated: true
            }
        case LOGOUT_USER_FORM:
                        return {
                ...state,
                isAuthenticated: false
            }
        case LOGIN_USER_GITHUB:
            return {
                ...state,
                isAuthenticated: true
            }
        case LOGOUT_USER_GITHUB:
                        return {
                ...state,
                isAuthenticated: false
            }
        default:
            return state
    }
}