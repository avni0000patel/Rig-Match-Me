const { B_amp_Genre } = require("../models");

const bampgenre = [
  {
    genre_id: 1,
    bamp_id: 1,
  },
  {
    genre_id: 1,
    bamp_id: 2,
  },
  {
    genre_id: 1,
    bamp_id: 3,
  },
  {
    genre_id: 1,
    bamp_id: 4,
  },
  {
    genre_id: 1,
    bamp_id: 5,
  },
  {
    genre_id: 2,
    bamp_id: 3,
  },
  {
    genre_id: 2,
    bamp_id: 4,
  },
  {
    genre_id: 2,
    bamp_id: 5,
  },
  {
    genre_id: 3,
    bamp_id: 1,
  },
  {
    genre_id: 3,
    bamp_id: 2,
  },
  {
    genre_id: 3,
    bamp_id: 3,
  },
  {
    genre_id: 3,
    bamp_id: 4,
  },
  {
    genre_id: 3,
    bamp_id: 5,
  },
  {
    genre_id: 4,
    bamp_id: 1,
  },
  {
    genre_id: 4,
    bamp_id: 2,
  },
  {
    genre_id: 4,
    bamp_id: 3,
  },
  {
    genre_id: 4,
    bamp_id: 4,
  },
  {
    genre_id: 4,
    bamp_id: 5,
  },
  {
    genre_id: 5,
    bamp_id: 1,
  },
  {
    genre_id: 5,
    bamp_id: 3,
  },
  {
    genre_id: 5,
    bamp_id: 4,
  },
  {
    genre_id: 5,
    bamp_id: 5,
  },
  {
    genre_id: 6,
    bamp_id: 1,
  },
  {
    genre_id: 6,
    bamp_id: 2,
  },
  {
    genre_id: 6,
    bamp_id: 3,
  },
  {
    genre_id: 6,
    bamp_id: 4,
  },
  {
    genre_id: 6,
    bamp_id: 5,
  },
  {
    genre_id: 7,
    bamp_id: 3,
  },
  {
    genre_id: 7,
    bamp_id: 4,
  },
  {
    genre_id: 7,
    bamp_id: 5,
  },
];

const seedBampGenre = () => B_amp_Genre.bulkCreate(bampgenre);

module.exports = seedBampGenre;
