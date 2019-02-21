const mongoose = require('mongoose')
const Schema = mongoose.Schema 

const DataSchema = ({
    title: {
        type: String,
        required: true
    }
})

const Data = mongoose.model('data', DataSchema)

module.exports = Data