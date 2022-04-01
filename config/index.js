require('dotenv').config()

const { Sequelize } = require('sequelize')

//make sure to create your .env with user and pass and change to @localhost/quickcook_db
module.exports = new Sequelize(process.env.JAWSDB_URL ? process.env.JAWSDB_URL : process.env.LOCAL_URL)

//DO NOT ADD ANYTHING ELSE TO THIS PLEASE LOL
