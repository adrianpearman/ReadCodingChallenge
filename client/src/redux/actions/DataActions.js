import axios from 'axios'
import { FETCH_IMGUR_POSTS, FETCH_POST, FETCH_POSTS, FETCH_POSTS_ERROR } from './types'

const subreddit = 'food'

export const fetchExternalImages = () => (dispatch) => {
    axios.get(`https://api.imgur.com/3/gallery/r/${subreddit}/`, {
        headers: {
            Authorization: 'Client-ID 1cdb1b8d087cba8'
        }
    })
        .then((externalPosts) => {
            const postList = []
            externalPosts.data.data.forEach((element) => {
                const { id, title, link } = element
                const newPost = {
                    _id: id,
                    title: title,
                    imageUrl: link,
                    counter: 0,
                    comments: []
                }
                postList.push(newPost)
            })
            dispatch({
                type: FETCH_IMGUR_POSTS,
                payload: postList
            })
        })
        .catch((err) => {
            dispatch({
                type: FETCH_POSTS_ERROR,
                payload: err
            })
        })
}

export const fetchPosts = () => (dispatch) => {
    axios.get('/api/data')
        .then((posts) => {
            dispatch({
                type: FETCH_POSTS,
                payload: posts.data
            })
        })
        .catch((err) => {
            dispatch({
                type: FETCH_POSTS_ERROR,
                payload: err
            })
        })
}

export const fetchExternalImage = (id) => (dispatch) => {
    axios.get(`https://api.imgur.com/3/gallery/r/${subreddit}/${id}`, {
        headers: {
            Authorization: 'Client-ID 1cdb1b8d087cba8'
        }
    })
        .then((post) => {
            dispatch({
                type: FETCH_POST,
                payload: post.data.data
            })
        })
        .catch((err) => {
            dispatch({
                type: FETCH_POSTS_ERROR,
                payload: err
            })
        })
}

export const fetchPost = (id) => (dispatch) => {
    axios.get(`/api/data/${id}`)
        .then((post) => {
            dispatch({
                type: FETCH_POST,
                payload: post
            })
        })
        .catch((err) => {
            dispatch({
                type: FETCH_POSTS_ERROR,
                payload: err
            })
        })
}

export const addPost = () => (dispatch) => {
    axios.post()
        .then()
        .catch()
}

export const editPost = () => (dispatch) => {
    axios.patch()
        .then()
        .catch()
}

export const deletePost = () => (dispatch) => {
    axios.delete()
        .then()
        .catch()
}



// 1cdb1b8d087cba8
// 347c1866ddf9a414600e19d9a61c9a5886e47456