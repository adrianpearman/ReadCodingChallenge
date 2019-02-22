const mongoose = require('mongoose')
const Schema = mongoose.Schema 

const DataSchema = new Schema({
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
        type: [],
        required: true
    },
    userId: {
        type: String,
        required: true
    }
})

const DataItem = mongoose.model('data', DataSchema)

module.exports = DataItem