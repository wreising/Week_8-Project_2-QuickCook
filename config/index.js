const { Sequelize } = require('sequelize')

require('dotenv').config()

//make sure to create your .env with user and pass and change to @localhost/quickcook_db
module.exports = new Sequelize(process.env.JAWSDB_URL ? process.env.JAWSDB_URL : process.env.LOCAL_URL)