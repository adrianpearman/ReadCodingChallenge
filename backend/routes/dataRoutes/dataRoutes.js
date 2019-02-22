const express = require('express')
const router = express.Router()
const isItEditted = require('../../config/helperFunctions')
const DataItem = require('../../models/dataModels') 

// Grab the data from the database
router.get('/', (req, res) => {
    DataItem.find({})
        .then((data) => { res.status(200).json(data) })
        .catch(err => { res.status(400).json(err) })
})
// Add an item to the database
router.post('/add', (req, res) => {
    const { title, imageUrl, userId } = req.body
    const newPost = new DataItem({
        title, 
        imageUrl, 
        counter: 0, 
        comments: [], 
        userId
    })
    newPost.save()
        .then((post) => { res.status(200).json(post) })
        .catch((err) => { res.status(400).json(err) })
})
// Edit an item in a database
router.patch('/edit', (req, res) => {
    const { title, imageUrl, _id } = req.body
    DataItem.findById(_id)
        .then((post) => {
            let edittedPost = {
                _id: post._id,
                userId: post.userId,
                title: isItEditted(post.title, title),
                imageUrl: isItEditted(post.imageUrl, imageUrl),
                counter: post.counter,
                comments: post.comments
            }
            DataItem.findOneAndUpdate(post._id, edittedPost, { new: true })
                .then((data) => { res.status(200).json(data) })
                .catch((err) => { res.status(400).json(err) })                
        })
        .catch((err) => { res.status(400).json(err) })
})
// Delete an item from a database
router.delete('/delete', (req, res) => {
    const { _id } = req.body
    DataItem.findOneAndDelete( _id )
        .then((post) => {
            if(post){ res.status(200).json(post._id)}
            res.status(400).json({ error: "ERROR: POST NOT FOUND" })
        })
        .catch((err) => { res.status(400).json(err) })
})
// Increment the counter 
router.post('/incrementCounter', (req, res) => {
    const { _id } = req.body
    DataItem.findById(_id)
        .then((post) => {
            let edittedPost = {
                _id: post._id,
                userId: post.userId,
                title: post.title,
                imageUrl: post.imageUrl,
                counter: post.counter + 1,
                comments: post.comments
            }

            DataItem.findOneAndUpdate(post._id, edittedPost, { new: true })
                .then((data) => { res.status(200).json(data) })
                .catch((err) => { res.status(400).json(err) })
        })
        .catch((err) => { res.status(400).json(err) })
})
// Decrement the counter 
router.post('/decrementCounter', (req, res) => {
    const { _id } = req.body
    DataItem.findById(_id)
        .then((post) => {
            let edittedPost = {
                _id: post._id,
                userId: post.userId,
                title: post.title,
                imageUrl: post.imageUrl,
                counter: post.counter - 1,
                comments: post.comments
            }

            DataItem.findOneAndUpdate(post._id, edittedPost, { new: true })
                .then((data) => { res.status(200).json(data) })
                .catch((err) => { res.status(400).json(err) })
        })
        .catch((err) => { res.status(400).json(err) })
})
// Adding Comment
router.post('/addComment', (req, res) => {
    const { _id, name, comment } = req.body
    DataItem.findById(_id)
        .then((post) => {
            let newComment = {
                name,
                comment,
                date: new Date()
            }

            DataItem.findOneAndUpdate(post._id, { $push: { comments: newComment } }, { new: true })
                .then((data) => { res.status(200).json(data) })
                .catch((err) => { res.status(400).json(err) })
        })
        .catch((err) => res.status(400).json(err))
})

module.exports = router 