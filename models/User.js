const { Model, DataTypes } = require('sequelize')
const sequelize = require('../config')
const bcrypt = require('bcrypt')

class User extends Model { }

User.init({
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true
    },
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: [8]
    },
  },

}, {
  hooks: {
    beforeCreate: async (newUserData) => {
      newUserData.password = await bcrypt.hash(newUserData.password, 10)
      return newUserData
    },

    //Ensure user's email is lowercase
    beforeCreate: async (user) => {
      user.email = await user.email.toLowerCase()
      return user
    },
    
    beforeUpdate: async (user) => {
      user.email = await user.email.toLowerCase()
      return user
    },

    beforeUpdate: async (updatedUserData) => {
      if (updatedUserData.password) {
        updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10)
      }
      return updatedUserData
    }
  },
  sequelize,
  timestamps: false,
  freezeTableName: true,
  underscored: true,
  modelName: 'user'
})

module.exports = User