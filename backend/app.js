const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const cors = require('cors')

const PORT = process.env.PORT || 4000
const databaseConnection = require('./config/database')

// Initializing to the DB
mongoose.connect(databaseConnection, { useNewUrlParser: true })
    .then(() => {
        console.log('Database Connected: Successful')
    })
    .catch(err => {
        console.log('Database Connected: False')
    })

// Middlewares 
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Routes 
app.use('/api/user', require('./routes/userRoutes'))
app.use('/api/data', require('./routes/dataRoutes'))

// Listening on Server Port
app.listen(PORT, (err) => {
    if(err){
        console.error(err)
    }
    console.log(`Running on PORT: ${PORT}`)
})
