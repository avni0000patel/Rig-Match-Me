const { G_amp_Genre } = require("../models");

const gampgenre = [
  {
    genre_id: 1,
    gamp_id: 1,
  },
  {
    genre_id: 1,
    gamp_id: 2,
  },
  {
    genre_id: 1,
    gamp_id: 4,
  },
  {
    genre_id: 1,
    gamp_id: 5,
  },
  {
    genre_id: 1,
    gamp_id: 6,
  },
  {
    genre_id: 1,
    gamp_id: 7,
  },
  {
    genre_id: 2,
    gamp_id: 1,
  },
  {
    genre_id: 2,
    gamp_id: 3,
  },
  {
    genre_id: 2,
    gamp_id: 4,
  },
  {
    genre_id: 2,
    gamp_id: 7,
  },
  {
    genre_id: 3,
    gamp_id: 1,
  },
  {
    genre_id: 3,
    gamp_id: 4,
  },
  {
    genre_id: 3,
    gamp_id: 5,
  },
  {
    genre_id: 3,
    gamp_id: 6,
  },
  {
    genre_id: 3,
    gamp_id: 7,
  },
  {
    genre_id: 4,
    gamp_id: 1,
  },
  {
    genre_id: 4,
    gamp_id: 2,
  },
  {
    genre_id: 4,
    gamp_id: 3,
  },
  {
    genre_id: 4,
    gamp_id: 4,
  },
  {
    genre_id: 4,
    gamp_id: 6,
  },
  {
    genre_id: 4,
    gamp_id: 7,
  },
  {
    genre_id: 5,
    gamp_id: 1,
  },
  {
    genre_id: 5,
    gamp_id: 2,
  },
  {
    genre_id: 5,
    gamp_id: 4,
  },
  {
    genre_id: 5,
    gamp_id: 5,
  },
  {
    genre_id: 5,
    gamp_id: 7,
  },
  {
    genre_id: 6,
    gamp_id: 1,
  },
  {
    genre_id: 6,
    gamp_id: 2,
  },
  {
    genre_id: 6,
    gamp_id: 4,
  },
  {
    genre_id: 6,
    gamp_id: 5,
  },
  {
    genre_id: 6,
    gamp_id: 6,
  },
  {
    genre_id: 6,
    gamp_id: 7,
  },
  {
    genre_id: 7,
    gamp_id: 1,
  },
  {
    genre_id: 7,
    gamp_id: 2,
  },
  {
    genre_id: 7,
    gamp_id: 3,
  },
  {
    genre_id: 7,
    gamp_id: 4,
  },
  {
    genre_id: 7,
    gamp_id: 7,
  },
];

const seedGampGenre = () => G_amp_Genre.bulkCreate(gampgenre);

module.exports = seedGampGenre;
