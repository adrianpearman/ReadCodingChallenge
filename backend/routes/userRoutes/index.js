const express = require('express')
const router = express.Router()

// GITHUB USER
router.use(require('./githubUserRoutes'))
router.use(require('./userRoutes'))

module.exports = router