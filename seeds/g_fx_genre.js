const { G_fx_Genre } = require("../models");

const gfxgenre = [
  {
    genre_id: 1,
    gfx_id: 1,
  },
  {
    genre_id: 1,
    gfx_id: 2,
  },
  {
    genre_id: 1,
    gfx_id: 4,
  },
  {
    genre_id: 1,
    gfx_id: 6,
  },
  {
    genre_id: 1,
    gfx_id: 7,
  },
  {
    genre_id: 1,
    gfx_id: 8,
  },
  {
    genre_id: 1,
    gfx_id: 9,
  },
  {
    genre_id: 2,
    gfx_id: 4,
  },
  {
    genre_id: 2,
    gfx_id: 5,
  },
  {
    genre_id: 2,
    gfx_id: 6,
  },
  {
    genre_id: 2,
    gfx_id: 7,
  },
  {
    genre_id: 2,
    gfx_id: 8,
  },
  {
    genre_id: 2,
    gfx_id: 9,
  },
  {
    genre_id: 3,
    gfx_id: 1,
  },
  {
    genre_id: 3,
    gfx_id: 2,
  },
  {
    genre_id: 3,
    gfx_id: 3,
  },
  {
    genre_id: 3,
    gfx_id: 6,
  },
  {
    genre_id: 3,
    gfx_id: 8,
  },
  {
    genre_id: 4,
    gfx_id: 1,
  },
  {
    genre_id: 4,
    gfx_id: 2,
  },
  {
    genre_id: 4,
    gfx_id: 4,
  },
  {
    genre_id: 4,
    gfx_id: 5,
  },
  {
    genre_id: 4,
    gfx_id: 6,
  },
  {
    genre_id: 4,
    gfx_id: 7,
  },
  {
    genre_id: 4,
    gfx_id: 8,
  },
  {
    genre_id: 4,
    gfx_id: 9,
  },
  {
    genre_id: 5,
    gfx_id: 1,
  },
  {
    genre_id: 5,
    gfx_id: 2,
  },
  {
    genre_id: 5,
    gfx_id: 4,
  },
  {
    genre_id: 5,
    gfx_id: 5,
  },
  {
    genre_id: 5,
    gfx_id: 6,
  },
  {
    genre_id: 5,
    gfx_id: 7,
  },
  {
    genre_id: 5,
    gfx_id: 8,
  },
  {
    genre_id: 5,
    gfx_id: 9,
  },
  {
    genre_id: 6,
    gfx_id: 1,
  },
  {
    genre_id: 6,
    gfx_id: 2,
  },
  {
    genre_id: 6,
    gfx_id: 3,
  },
  {
    genre_id: 7,
    gfx_id: 4,
  },
  {
    genre_id: 7,
    gfx_id: 5,
  },
  {
    genre_id: 7,
    gfx_id: 6,
  },
  {
    genre_id: 7,
    gfx_id: 7,
  },
  {
    genre_id: 7,
    gfx_id: 8,
  },
  {
    genre_id: 7,
    gfx_id: 9,
  },
];

const seedGfxGenre = () => G_fx_Genre.bulkCreate(gfxgenre);

module.exports = seedGfxGenre;
