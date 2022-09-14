const sequelize = require("../config/connection");
const seedUsers = require("./user_data");
const seedGenre = require("./genre_data");
const seedInstruments = require("./instrument_data");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log("\n----- DATABASE SYNCED -----\n");

  await seedUsers();
  console.log("\n----- USERS SEEDED -----\n");

  await seedGenre();
  console.log("\n----- GENRES SEEDED -----\n");

  await seedInstruments();
  console.log("\n----- INSTRUMENTS SEEDED -----\n");

  process.exit(0);
};

seedAll();
