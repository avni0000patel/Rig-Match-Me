const { Instrument_Genre } = require("../models");

const instrumentgenre = [
  {
    genre_id: 1,
    instrument_id: 1,
  },
  {
    genre_id: 1,
    instrument_id: 2,
  },
  {
    genre_id: 1,
    instrument_id: 3,
  },
  {
    genre_id: 1,
    instrument_id: 4,
  },
  {
    genre_id: 1,
    instrument_id: 5,
  },
  {
    genre_id: 1,
    instrument_id: 6,
  },
  {
    genre_id: 1,
    instrument_id: 7,
  },
  {
    genre_id: 1,
    instrument_id: 8,
  },
  {
    genre_id: 1,
    instrument_id: 10,
  },
  {
    genre_id: 1,
    instrument_id: 11,
  },
  {
    genre_id: 1,
    instrument_id: 12,
  },
  {
    genre_id: 1,
    instrument_id: 13,
  },
  {
    genre_id: 1,
    instrument_id: 14,
  },
  {
    genre_id: 1,
    instrument_id: 15,
  },
  {
    genre_id: 1,
    instrument_id: 16,
  },
  {
    genre_id: 1,
    instrument_id: 17,
  },
  {
    genre_id: 1,
    instrument_id: 19,
  },
  {
    genre_id: 1,
    instrument_id: 20,
  },
  {
    genre_id: 1,
    instrument_id: 22,
  },
  {
    genre_id: 1,
    instrument_id: 23,
  },
  {
    genre_id: 1,
    instrument_id: 24,
  },
  {
    genre_id: 1,
    instrument_id: 25,
  },
  {
    genre_id: 2,
    instrument_id: 2,
  },
  {
    genre_id: 2,
    instrument_id: 3,
  },
  {
    genre_id: 2,
    instrument_id: 5,
  },
  {
    genre_id: 2,
    instrument_id: 6,
  },
  {
    genre_id: 2,
    instrument_id: 7,
  },
  {
    genre_id: 2,
    instrument_id: 11,
  },
  {
    genre_id: 2,
    instrument_id: 13,
  },
  {
    genre_id: 2,
    instrument_id: 14,
  },
  {
    genre_id: 2,
    instrument_id: 15,
  },
  {
    genre_id: 2,
    instrument_id: 17,
  },
  {
    genre_id: 2,
    instrument_id: 18,
  },
  {
    genre_id: 2,
    instrument_id: 19,
  },
  {
    genre_id: 2,
    instrument_id: 20,
  },
  {
    genre_id: 2,
    instrument_id: 21,
  },
  {
    genre_id: 2,
    instrument_id: 22,
  },
  {
    genre_id: 2,
    instrument_id: 23,
  },
  {
    genre_id: 2,
    instrument_id: 24,
  },
  {
    genre_id: 3,
    instrument_id: 2,
  },
  {
    genre_id: 3,
    instrument_id: 3,
  },
  {
    genre_id: 3,
    instrument_id: 7,
  },
  {
    genre_id: 3,
    instrument_id: 8,
  },
  {
    genre_id: 3,
    instrument_id: 9,
  },
  {
    genre_id: 3,
    instrument_id: 10,
  },
  {
    genre_id: 3,
    instrument_id: 12,
  },
  {
    genre_id: 3,
    instrument_id: 13,
  },
  {
    genre_id: 3,
    instrument_id: 14,
  },
  {
    genre_id: 3,
    instrument_id: 18,
  },
  {
    genre_id: 3,
    instrument_id: 19,
  },
  {
    genre_id: 3,
    instrument_id: 20,
  },
  {
    genre_id: 3,
    instrument_id: 23,
  },
  {
    genre_id: 3,
    instrument_id: 24,
  },
  {
    genre_id: 3,
    instrument_id: 25,
  },
  {
    genre_id: 4,
    instrument_id: 1,
  },
  {
    genre_id: 4,
    instrument_id: 2,
  },
  {
    genre_id: 4,
    instrument_id: 4,
  },
  {
    genre_id: 4,
    instrument_id: 5,
  },
  {
    genre_id: 4,
    instrument_id: 6,
  },
  {
    genre_id: 4,
    instrument_id: 7,
  },
  {
    genre_id: 4,
    instrument_id: 8,
  },
  {
    genre_id: 4,
    instrument_id: 11,
  },
  {
    genre_id: 4,
    instrument_id: 15,
  },
  {
    genre_id: 4,
    instrument_id: 16,
  },
  {
    genre_id: 4,
    instrument_id: 17,
  },
  {
    genre_id: 4,
    instrument_id: 19,
  },
  {
    genre_id: 4,
    instrument_id: 20,
  },
  {
    genre_id: 4,
    instrument_id: 22,
  },
  {
    genre_id: 4,
    instrument_id: 23,
  },
  {
    genre_id: 4,
    instrument_id: 24,
  },
  {
    genre_id: 5,
    instrument_id: 1,
  },
  {
    genre_id: 5,
    instrument_id: 2,
  },
  {
    genre_id: 5,
    instrument_id: 4,
  },
  {
    genre_id: 5,
    instrument_id: 5,
  },
  {
    genre_id: 5,
    instrument_id: 6,
  },
  {
    genre_id: 5,
    instrument_id: 7,
  },
  {
    genre_id: 5,
    instrument_id: 11,
  },
  {
    genre_id: 5,
    instrument_id: 12,
  },
  {
    genre_id: 5,
    instrument_id: 13,
  },
  {
    genre_id: 5,
    instrument_id: 15,
  },
  {
    genre_id: 5,
    instrument_id: 16,
  },
  {
    genre_id: 5,
    instrument_id: 17,
  },
  {
    genre_id: 5,
    instrument_id: 19,
  },
  {
    genre_id: 5,
    instrument_id: 20,
  },
  {
    genre_id: 5,
    instrument_id: 22,
  },
  {
    genre_id: 5,
    instrument_id: 23,
  },
  {
    genre_id: 5,
    instrument_id: 24,
  },
  {
    genre_id: 6,
    instrument_id: 1,
  },
  {
    genre_id: 6,
    instrument_id: 2,
  },
  {
    genre_id: 6,
    instrument_id: 4,
  },
  {
    genre_id: 6,
    instrument_id: 8,
  },
  {
    genre_id: 6,
    instrument_id: 9,
  },
  {
    genre_id: 6,
    instrument_id: 11,
  },
  {
    genre_id: 6,
    instrument_id: 12,
  },
  {
    genre_id: 6,
    instrument_id: 13,
  },
  {
    genre_id: 6,
    instrument_id: 15,
  },
  {
    genre_id: 6,
    instrument_id: 17,
  },
  {
    genre_id: 6,
    instrument_id: 21,
  },
  {
    genre_id: 6,
    instrument_id: 22,
  },
  {
    genre_id: 6,
    instrument_id: 23,
  },
  {
    genre_id: 6,
    instrument_id: 24,
  },
  {
    genre_id: 7,
    instrument_id: 1,
  },
  {
    genre_id: 7,
    instrument_id: 2,
  },
  {
    genre_id: 7,
    instrument_id: 4,
  },
  {
    genre_id: 7,
    instrument_id: 5,
  },
  {
    genre_id: 7,
    instrument_id: 6,
  },
  {
    genre_id: 7,
    instrument_id: 7,
  },
  {
    genre_id: 7,
    instrument_id: 8,
  },
  {
    genre_id: 7,
    instrument_id: 12,
  },
  {
    genre_id: 7,
    instrument_id: 15,
  },
  {
    genre_id: 7,
    instrument_id: 17,
  },
  {
    genre_id: 7,
    instrument_id: 18,
  },
  {
    genre_id: 7,
    instrument_id: 19,
  },
  {
    genre_id: 7,
    instrument_id: 20,
  },
  {
    genre_id: 7,
    instrument_id: 21,
  },
  {
    genre_id: 7,
    instrument_id: 22,
  },
  {
    genre_id: 7,
    instrument_id: 23,
  },
  {
    genre_id: 7,
    instrument_id: 24,
  },
];
const seedInstrumentGenre = () => Instrument_Genre.bulkCreate(instrumentgenre);

module.exports = seedInstrumentGenre;
