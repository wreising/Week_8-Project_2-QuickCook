const router = require('express').Router()

router.use('/recipes', require('./recipeRoutes.js'))
router.use('/users', require('./userRoutes'))

module.exports = router