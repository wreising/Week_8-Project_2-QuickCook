const router = require('express').Router()

<<<<<<< HEAD
router.use('/api/recipes', require('./recipeRoutes.js'))
router.use('/api/users', require('./userRoutes'))
=======
router.use('/api', require('./recipeRoutes.js'))
router.use('/api', require('./userRoutes'))
>>>>>>> 77d1b0fc0dc67d2346694d691343e1b56d8db63a

module.exports = router