const mongoose = require('mongoose')
const Schema = mongoose.Schema 

const CommentSchema = new Schema({
    name: {
        type: String
    },
    comment: {
        type: String
    },
    date: {
        type: String
    }
})

const DataSchema = ({
    title: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
    counter: {
        type: Number,
        required: true
    },
    comments: {
        type: [CommentSchema],
        required: true
    },
    userId: {
        type: String,
        required: true
    }
})

const Data = mongoose.model('data', DataSchema)

module.exports = Data