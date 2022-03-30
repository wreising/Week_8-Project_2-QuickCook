const { Sequelize } = require('sequalize')

//process.env TO BE DETERMINED(TBD)
module.exports = new Sequalize(process.env.LOCAL_URL)