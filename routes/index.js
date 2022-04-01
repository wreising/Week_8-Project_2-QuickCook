const router = require('express').Router()

router.use('/api', require('./recipeRoutes.js'))
router.use('/api', require('./userRoutes'))

module.exports = router