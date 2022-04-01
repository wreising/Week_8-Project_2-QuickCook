const { Sequelize } = require('sequelize')

//make sure to create your .env with user and pass and change to @localhost/quickcook_db
module.exports = new Sequelize(process.env.JAWSDB_URL ? process.env.JAWSDB_URL : process.env.LOCAL_URL)
db.recipe = require("./Recipe.js")(sequelize, Sequelize);
module.exports = db;
