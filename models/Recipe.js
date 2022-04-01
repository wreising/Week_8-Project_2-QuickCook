const { Model, DataTypes } = require('sequelize')
const sequelize = require('../config')

class Recipe extends Model { }

Recipe.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  recipe_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.STRING,
    allowNull: true
  },
  q1quantity: {
    type: DataTypes.STRING,
    allowNull: true
  },
  ingredient1: {
    type: DataTypes.STRING,
    allowNull: false
  },
  q2quantity: {
    type: DataTypes.STRING,
    allowNull: true
  },
  ingredient2: {
    type: DataTypes.STRING,
    allowNull: false
  },
  q3quantity: {
    type: DataTypes.STRING,
    allowNull: true
  },
  ingredient3: {
    type: DataTypes.STRING,
    allowNull: false
  },
  q4quantity: {
    type: DataTypes.STRING,
    allowNull: true
  },
  ingredient4: {
    type: DataTypes.STRING,
    allowNull: false
  },
  q5quantity: {
    type: DataTypes.STRING,
    allowNull: true
  },
  ingredient5: {
    type: DataTypes.STRING,
    allowNull: false
  },
  instructions: {
    type: DataTypes.STRING,
    allowNull: false
  },
  vegetarian: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  },
  difficultyHard: {
    type: DataTypes.BOOLEAN,
    default: false
  },
  photoLink: {
    type: DataTypes.STRING,
    allowNull: true
  },
  source: {
    type: DataTypes.STRING,
    allowNull: true
  },
  meal: {
    type: DataTypes.STRING,
    allowNull: true
  },
}, {
  hooks: {
    beforeCreate: async (newRecipe) => {
      newRecipe.recipe_name = "# " + recipe_name,
        newRecipe.description = "## **" + description + "**",
        newRecipe.q1quantity = "#### " + q1quantity,
        newRecipe.ingredient1 = "#### " + ingredient1,
        newRecipe.q2quantity = "#### " + q2quantity,
        newRecipe.ingredient2 = "#### " + ingredient2,
        newRecipe.q3quantity = "#### " + q3quantity,
        newRecipe.ingredient3 = "#### " + ingredient3,
        newRecipe.q4quantity = "#### " + q4quantity,
        newRecipe.ingredient4 = "#### " + ingredient4,
        newRecipe.q5quantity = "#### " + q5quantity,
        newRecipe.ingredient5 = "#### " + ingredient5,
        newRecipe.instructions = "### " + instructions,
        newRecipe.meal = "####" + meal,
      return newRecipe
    },
  },
  sequelize,
  freezeTableName: true,
  underscored: true,
  modelName: 'recipe'
})

module.exports = Recipe