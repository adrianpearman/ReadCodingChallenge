const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    const data = { data: 'sjkgfjkshgfljhagslfdjkg' }
    res.status(200).json(data)
})

router.post('/register', (req, res) => {
    console.log(req.body)
})

router.post('/login', (req, res) => {
    console.log(req.body)
})

module.exports = router 