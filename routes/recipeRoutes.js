const router = require('express').Router()
const { Recipe } = require('../models')

router.get('/recipes', async (req, res) => {
  try {
    const recipeData = await Recipe.findAll()
    res.status(200).json(recipeData);
  } catch (err) {
    res.status(500).json(err)
  }
})

router.get('/recipes/meal/:meal', async (req, res) => {
  try {
    const recipeData = await Recipe.findAll()
    res.status(200).json(recipeData);
  } catch (err) {
    res.status(500).json(err)
  }
})

router.get('/recipes/:id', async (req, res) => {
  try {
    const recipeData = await Recipe.findByPk(req.params.id)

    if (!recipeData) {
      res.status(404).json({ message: 'No recipe found with this id!' })
      return
    }

    res.status(200).json(recipeData);
  } catch (err) {
    res.status(500).json(err)
  }
})

router.post('/recipes', async (req, res) => {
  try {
    const recipeData = await Recipe.create(req.body)
    res.status(200).json(recipeData);
    // res.redirect('../public/display12.html')
  } catch (err) {
    res.status(400).json(err)
  }
})

router.delete('/recipes/:id', async (req, res) => {
  try {
    const recipeData = await Recipe.destroy({
      where: {
        id: req.params.id
      }
    })
    if (!recipeData) {
      res.status(404).json({ message: 'No recipe found with this id!' })
      return;
    }
    res.status(200).json(recipeData);
  } catch (err) {
    res.status(500).json(err)
  }
})

module.exports = router