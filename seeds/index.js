const seedRecipes = require('./recipe_seeds')

const sequelize = require('../config/connection')

const seedAll = async () => {
  await sequelize.sync({ force: true })
  console.log('\n----- DATABASE SYNCED -----\n')
  await seedRecipes()
  console.log('\n----- CATEGORIES SEEDED -----\n')

  process.exit(0)
}

seedAll()