const { B_fx_Genre } = require("../models");

const bfxgenre = [
  {
    genre_id: 1,
    bfx_id: 1,
  },
  {
    genre_id: 1,
    bfx_id: 3,
  },
  {
    genre_id: 1,
    bfx_id: 5,
  },
  {
    genre_id: 1,
    bfx_id: 6,
  },
  {
    genre_id: 1,
    bfx_id: 7,
  },
  {
    genre_id: 2,
    bfx_id: 2,
  },
  {
    genre_id: 2,
    bfx_id: 4,
  },
  {
    genre_id: 2,
    bfx_id: 6,
  },
  {
    genre_id: 3,
    bfx_id: 1,
  },
  {
    genre_id: 3,
    bfx_id: 3,
  },
  {
    genre_id: 3,
    bfx_id: 5,
  },
  {
    genre_id: 3,
    bfx_id: 6,
  },
  {
    genre_id: 3,
    bfx_id: 7,
  },
  {
    genre_id: 4,
    bfx_id: 1,
  },
  {
    genre_id: 4,
    bfx_id: 2,
  },
  {
    genre_id: 4,
    bfx_id: 6,
  },
  {
    genre_id: 4,
    bfx_id: 7,
  },
  {
    genre_id: 5,
    bfx_id: 1,
  },
  {
    genre_id: 5,
    bfx_id: 2,
  },
  {
    genre_id: 5,
    bfx_id: 4,
  },
  {
    genre_id: 5,
    bfx_id: 5,
  },
  {
    genre_id: 5,
    bfx_id: 6,
  },
  {
    genre_id: 5,
    bfx_id: 7,
  },
  {
    genre_id: 6,
    bfx_id: 1,
  },
  {
    genre_id: 6,
    bfx_id: 3,
  },
  {
    genre_id: 6,
    bfx_id: 5,
  },
  {
    genre_id: 6,
    bfx_id: 6,
  },
  {
    genre_id: 6,
    bfx_id: 7,
  },
  {
    genre_id: 7,
    bfx_id: 2,
  },
  {
    genre_id: 7,
    bfx_id: 4,
  },
  {
    genre_id: 7,
    bfx_id: 6,
  },
];

const seedBfxGenre = () => B_fx_Genre.bulkCreate(bfxgenre);

module.exports = seedBfxGenre;
