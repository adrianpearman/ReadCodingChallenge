const express = require('express')
const router = express.Router()

// GITHUB USER
router.use(require('./githubUserRoutes'))
// REGISTERING AND LOG-IN FOR NON GITHUB USER
router.use(require('./userRoutes'))

module.exports = router