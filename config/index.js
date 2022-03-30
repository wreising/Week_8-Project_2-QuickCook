const { Sequelize } = require('sequalize')

//make sure to create your .env with user and pass and change to @localhost/quickcook_db
module.exports = new Sequalize(process.env.LOCAL_URL)