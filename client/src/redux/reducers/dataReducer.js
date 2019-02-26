import { FETCH_IMGUR_POSTS, FETCH_POST, FETCH_POSTS, FETCH_POSTS_ERROR } from '../actions/types'

const initialState = {
    err: null
}

export default (state = initialState, action) => {
    switch(action.type){
        case FETCH_IMGUR_POSTS:
            return {
                ...state,
                externalPosts: action.payload
            }
        case FETCH_POSTS:
            return {
                ...state,
                userPosts: action.payload
            }
        case FETCH_POST:
            return {
                ...state,
                post: action.payload.data
            }
        case FETCH_POSTS_ERROR:
            return {
                ...state,
                err: action.payload.data
            }
        default:
            return state
    }
}