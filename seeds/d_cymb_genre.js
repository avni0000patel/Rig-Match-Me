const { D_cymb_Genre } = require("../models");

const dcymbgenre = [
  {
    genre_id: 1,
    dcymb_id: 1,
  },
  {
    genre_id: 1,
    dcymb_id: 2,
  },
  {
    genre_id: 1,
    dcymb_id: 3,
  },
  {
    genre_id: 1,
    dcymb_id: 4,
  },
  {
    genre_id: 1,
    dcymb_id: 5,
  },
  {
    genre_id: 1,
    dcymb_id: 6,
  },
  {
    genre_id: 1,
    dcymb_id: 7,
  },
  {
    genre_id: 2,
    dcymb_id: 1,
  },
  {
    genre_id: 2,
    dcymb_id: 4,
  },
  {
    genre_id: 2,
    dcymb_id: 5,
  },
  {
    genre_id: 2,
    dcymb_id: 6,
  },
  {
    genre_id: 2,
    dcymb_id: 8,
  },
  {
    genre_id: 3,
    dcymb_id: 2,
  },
  {
    genre_id: 3,
    dcymb_id: 3,
  },
  {
    genre_id: 3,
    dcymb_id: 4,
  },
  {
    genre_id: 3,
    dcymb_id: 5,
  },
  {
    genre_id: 3,
    dcymb_id: 7,
  },
  {
    genre_id: 4,
    dcymb_id: 1,
  },
  {
    genre_id: 4,
    dcymb_id: 2,
  },
  {
    genre_id: 4,
    dcymb_id: 3,
  },
  {
    genre_id: 4,
    dcymb_id: 4,
  },
  {
    genre_id: 4,
    dcymb_id: 5,
  },
  {
    genre_id: 4,
    dcymb_id: 6,
  },
  {
    genre_id: 5,
    dcymb_id: 1,
  },
  {
    genre_id: 5,
    dcymb_id: 2,
  },
  {
    genre_id: 5,
    dcymb_id: 3,
  },
  {
    genre_id: 5,
    dcymb_id: 4,
  },
  {
    genre_id: 5,
    dcymb_id: 5,
  },
  {
    genre_id: 5,
    dcymb_id: 6,
  },
  {
    genre_id: 5,
    dcymb_id: 7,
  },
  {
    genre_id: 6,
    dcymb_id: 1,
  },
  {
    genre_id: 6,
    dcymb_id: 2,
  },
  {
    genre_id: 6,
    dcymb_id: 3,
  },
  {
    genre_id: 6,
    dcymb_id: 4,
  },
  {
    genre_id: 6,
    dcymb_id: 5,
  },
  {
    genre_id: 6,
    dcymb_id: 6,
  },
  {
    genre_id: 7,
    dcymb_id: 1,
  },
  {
    genre_id: 7,
    dcymb_id: 4,
  },
  {
    genre_id: 7,
    dcymb_id: 5,
  },
  {
    genre_id: 7,
    dcymb_id: 6,
  },
  {
    genre_id: 7,
    dcymb_id: 8,
  },
];

const seedDcymbGenre = () => D_cymb_Genre.bulkCreate(dcymbgenre);

module.exports = seedDcymbGenre;
