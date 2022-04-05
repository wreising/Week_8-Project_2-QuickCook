const { Model, DataTypes } = require('sequelize')
const sequelize = require('../config')

class Recipe extends Model { }

Recipe.init({
  // id: {
  //   type: DataTypes.INTEGER,
  //   allowNull: false,
  //   primaryKey: true,
  //   autoIncrement: true,
  // },
  recipe_name: {
    type: DataTypes.STRING(1000),
    allowNull: false
  },
  description: {
    type: DataTypes.STRING(1000),
    allowNull: false
  },
  ingredient1: {
    type: DataTypes.STRING,
    allowNull: false
  },
  ing1quantity: {
    type: DataTypes.STRING,
    allowNull: true
  },
  ingredient2: {
    type: DataTypes.STRING,
    allowNull: true
  },
  ing2quantity: {
    type: DataTypes.STRING,
    allowNull: true
  },
  ingredient3: {
    type: DataTypes.STRING,
    allowNull: true
  },
  ing3quantity: {
    type: DataTypes.STRING,
    allowNull: true
  },
  ingredient4: {
    type: DataTypes.STRING,
    allowNull: true
  },
  ing4quantity: {
    type: DataTypes.STRING,
    allowNull: true
  },
  ingredient5: {
    type: DataTypes.STRING,
    allowNull: true
  },
  ing5quantity: {
    type: DataTypes.STRING,
    allowNull: true
  },
  instructions: {
    type: DataTypes.STRING(5000),
    allowNull: false
  },
  meal: {
    type: DataTypes.STRING,
    allowNull: false
  },
}, {
  // hooks: {
  //   beforeCreate: (newRecipe) => {
  //     newRecipe.recipe_name += ' Hi'
  //   }
  // },
  sequelize,
  freezeTableName: true,
  underscored: true,
  modelName: 'recipe'
})

module.exports = Recipe