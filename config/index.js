const { Sequelize } = require('sequelize')

const sequelize = require(".db/schema");
const Customer = require(",/models/customer");

sequelize
  .sync()
  .then((result)=> {
    console.log(result);
  })
  .cathc((err) => {
    console.log(err);
  });


//make sure to create your .env with user and pass and change to @localhost/quickcook_db
module.exports = new Sequelize(process.env.JAWSDB_URL ? process.env.JAWSDB_URL : process.env.LOCAL_URL)