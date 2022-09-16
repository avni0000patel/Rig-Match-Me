const { D_peds_Genre } = require("../models");

const dpedsgenre = [
  {
    genre_id: 1,
    dpeds_id: 1,
  },
  {
    genre_id: 1,
    dpeds_id: 2,
  },
  {
    genre_id: 1,
    dpeds_id: 3,
  },
  {
    genre_id: 1,
    dpeds_id: 4,
  },
  {
    genre_id: 1,
    dpeds_id: 5,
  },
  {
    genre_id: 1,
    dpeds_id: 6,
  },
  {
    genre_id: 2,
    dpeds_id: 1,
  },
  {
    genre_id: 2,
    dpeds_id: 2,
  },
  {
    genre_id: 2,
    dpeds_id: 3,
  },
  {
    genre_id: 3,
    dpeds_id: 4,
  },
  {
    genre_id: 3,
    dpeds_id: 5,
  },
  {
    genre_id: 3,
    dpeds_id: 6,
  },
  {
    genre_id: 4,
    dpeds_id: 1,
  },
  {
    genre_id: 4,
    dpeds_id: 2,
  },
  {
    genre_id: 4,
    dpeds_id: 3,
  },
  {
    genre_id: 5,
    dpeds_id: 1,
  },
  {
    genre_id: 5,
    dpeds_id: 2,
  },
  {
    genre_id: 5,
    dpeds_id: 3,
  },
  {
    genre_id: 6,
    dpeds_id: 1,
  },
  {
    genre_id: 6,
    dpeds_id: 2,
  },
  {
    genre_id: 6,
    dpeds_id: 3,
  },
  {
    genre_id: 6,
    dpeds_id: 4,
  },
  {
    genre_id: 6,
    dpeds_id: 5,
  },
  {
    genre_id: 6,
    dpeds_id: 6,
  },
  {
    genre_id: 7,
    dpeds_id: 1,
  },
  {
    genre_id: 7,
    dpeds_id: 2,
  },
  {
    genre_id: 7,
    dpeds_id: 3,
  },
];

const seedDpedsGenre = () => D_peds_Genre.bulkCreate(dpedsgenre);

module.exports = seedDpedsGenre;
