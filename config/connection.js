require('dotenv').config()

const Sequelize = require('sequelize')

const sequelize = new Sequelize(process.env.JAWSDB_URL ? process.env.JAWSDB_URL : process.env.LOCALDB_URL)

module.exports = sequelize
