const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    const data = { 
        data1: 'sjkgfjkshgfljhagslfdjkg',
        data2: CLIENT_ID,
        data3: CLIENT_SECRET,
        data4: redirect_uri,
    }
    res.status(200).json(data)
})

// REGISTERING AND LOG-IN FOR NON GITHUB USER
router.post('/register', (req, res) => {
    console.log(req.body)
})
router.post('/login', (req, res) => {
    console.log(req.body)
})


module.exports = router 
