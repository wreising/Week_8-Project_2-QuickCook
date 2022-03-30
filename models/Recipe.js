const { Model, DataTypes } = require('sequelize')
const sequelize = require('../config')

class Recipe extends Model { }

Recipe.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    recipe_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    ingredient1: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    q1quantity: {
      type: DataType.STRING
      allowNull: true
    },
    ingredient2: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    q1quantity: {
      type: DataType.STRING
      allowNull: true
    },
    ingredient3: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    q3quantity: {
      type: DataType.STRING
      allowNull: true
    },
    ingredient4: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    q4quantity: {
      type: DataType.STRING
      allowNull: true
    },
    q5quantity: {
      type: DataType.STRING
      allowNull: true
    },
    ingredient5: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    instructions: {
      type: DataTypes.STRING
      allowNull: false
    },
    vegetarian: {
      type: DataTypes.BOOLEAN
      allowNull: false
    },
    difficultyHard: {
      type: DataTypes.BOOLEAN
      default: false
    }
    photoLink: {
      type: DataTypes.STRING
      allowNull: true
    },
    source: {
      type: DataTypes.STRING
      allowNull: true
    },
    meal: {
      type: DataTypes.STRING
      allowNull: true
    }
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'dish',
  }
)

module.exports = Recipe