const router = require('express').Router()
const bcrypt = require('bcrypt')
const { User } = require('../models')

//Create a new user
router.post('/users', async (req, res) => {
  try {
    const data = req.body
    data.password = await bcrypt.hash(req.body.password, 10)
    const user = await User.create(data)
    res.status(200).json(user)
  } catch (err) {
    res.status(400).json(err)
  }
})

//User login
router.post('/users/login', async ({ body: { email, password } }, res) => {
  try {
    const user = await User.findOne({ where: { email } })

    if (!user) {
      res.status(404).json({ message: 'Invalid Email or Password' })
      return
    }

    const isValid = await bcrypt.compare(password, user.password)

    if (!isValid) {
      res.status(400).json({ message: 'Invalid Email or Password' })
      return
    }

    res.status(200).json({
      id: user.id,
      username: user.username,
      email: user.email
    })
  } catch (err) {
    res.status(500).json(err)
  }
})

router.put('/users/:id', async ({ body, params: { id } }, res) => {
  try {
    const user = await User.update(body, { where: { id }, individualHooks: true })

    if (!user[0]) {
      res.status(404).json({ message: 'No user with this id.' })
      return
    }

    res.status(200).json(user)
  } catch (err) {
    res.status(500).json(err)
  }
})

router.post('/', async (req, res) => {
  try {
    const userData = await User.create(req.body)

    req.session.save(() => {
      req.session.user_id = userData.id
      req.session.logged_in = true
      res.status(200).json(userData)
    })
  } catch (err) {
    res.status(400).json(err)
  }
})

router.post('/login', async (req, res) => {
  try {
    const userData = await User.findOne({ where: { email: req.body.email } })

    if (!userData) {
      res.status(400).json({ message: 'Incorrect email and/or password, please try again.' })
      return
    }

    const userPassword = await userData.checkPassword(req.body.password)

    if (!userPassword) {
      res.status(400).json({ message: 'Incorrect email and/or password, please try again.' })
      return
    }

    req.session.save(() => {
      req.session.user_id = userData.id
      req.session.logged_in = true
      res.json({ user: userData, message: 'User has successfully logged in.' })
    })

  } catch (err) {
    res.status(400).json(err)
  }
})

router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end()
    })
  } else {
    res.status(404).end
  }
})

module.exports = router