const sequelize = require("../config/connection");
const seedUsers = require("./user_data");
const seedGenre = require("./genre_data");
const seedInstruments = require("./instrument_data");

const seedInstrumentGenre = require("./instrument_genre");
const seedGampGenre = require("./g_amp_genre");
const seedGfxGenre = require("./g_fx_genre");
const seedBampGenre = require("./b_amp_genre");
const seedBfxGenre = require("./b_fx_genre");
const seedDpedsGenre = require("./d_peds_genre");
const seedDcymbGenre = require("./d_cymb_genre");

const seedGamp = require("./g_amp");
const seedGfx = require("./g_fx");
const seedBamp = require("./b_amp");
const seedBfx = require("./b_fx");
const seedDpeds = require("./d_peds");
const seedDcymb = require("./d_cymb");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log("\n----- DATABASE SYNCED -----\n");

  await seedUsers();
  console.log("\n----- USERS SEEDED -----\n");

  await seedGenre();
  console.log("\n----- GENRES SEEDED -----\n");

  await seedInstruments();
  console.log("\n----- INSTRUMENTS SEEDED -----\n");

  await seedInstrumentGenre();
  console.log("\n----- INSTRUMENT_GENRE SEEDED -----\n");

  await seedGamp();
  console.log("\n----- GAMP SEEDED -----\n");

  await seedGfx();
  console.log("\n----- GFX SEEDED -----\n");

  await seedBamp();
  console.log("\n----- BAMP SEEDED -----\n");

  await seedBfx();
  console.log("\n----- BFX SEEDED -----\n");

  await seedDpeds();
  console.log("\n----- DPEDS SEEDED -----\n");

  await seedDcymb();
  console.log("\n----- DCYMB SEEDED -----\n");

  process.exit(0);
};

seedAll();
