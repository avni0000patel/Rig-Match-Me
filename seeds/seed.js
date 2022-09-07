const sequelize = require('../config/connection');
const seedGenre = require('./genreData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedGenre();

  process.exit(0);
};

seedAll();