const router = require('express').Router()

router.use('/api/recipes', require('./recipeRoutes.js'))
router.use('/api/users', require('./userRoutes'))

module.exports = router