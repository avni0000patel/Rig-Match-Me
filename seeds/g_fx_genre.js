const { G_fx_Genre } = require("../models");

const gfxgenre = [
  {
    genre: "Rock",
    accessory_id: 1,
  },
  {
    genre: "Rock",
    accessory_id: 2,
  },
  {
    genre: "Rock",
    accessory_id: 4,
  },
  {
    genre: "Rock",
    accessory_id: 6,
  },
  {
    genre: "Rock",
    accessory_id: 7,
  },
  {
    genre: "Rock",
    accessory_id: 8,
  },
  {
    genre: "Rock",
    accessory_id: 9,
  },
  {
    genre: "Hip-Hop",
    accessory_id: 4,
  },
  {
    genre: "Hip-Hop",
    accessory_id: 5,
  },
  {
    genre: "Hip-Hop",
    accessory_id: 6,
  },
  {
    genre: "Hip-Hop",
    accessory_id: 7,
  },
  {
    genre: "Hip-Hop",
    accessory_id: 8,
  },
  {
    genre: "Hip-Hop",
    accessory_id: 9,
  },
  {
    genre: "Metal",
    accessory_id: 1,
  },
  {
    genre: "Metal",
    accessory_id: 2,
  },
  {
    genre: "Metal",
    accessory_id: 3,
  },
  {
    genre: "Metal",
    accessory_id: 6,
  },
  {
    genre: "Metal",
    accessory_id: 8,
  },
  {
    genre: "Country",
    accessory_id: 1,
  },
  {
    genre: "Country",
    accessory_id: 2,
  },
  {
    genre: "Country",
    accessory_id: 4,
  },
  {
    genre: "Country",
    accessory_id: 5,
  },
  {
    genre: "Country",
    accessory_id: 6,
  },
  {
    genre: "Country",
    accessory_id: 7,
  },
  {
    genre: "Country",
    accessory_id: 8,
  },
  {
    genre: "Country",
    accessory_id: 9,
  },
  {
    genre: "Alternative Rock",
    accessory_id: 1,
  },
  {
    genre: "Alternative Rock",
    accessory_id: 2,
  },
  {
    genre: "Alternative Rock",
    accessory_id: 4,
  },
  {
    genre: "Alternative Rock",
    accessory_id: 5,
  },
  {
    genre: "Alternative Rock",
    accessory_id: 6,
  },
  {
    genre: "Alternative Rock",
    accessory_id: 7,
  },
  {
    genre: "Alternative Rock",
    accessory_id: 8,
  },
  {
    genre: "Alternative Rock",
    accessory_id: 9,
  },
  {
    genre: "Punk Rock",
    accessory_id: 1,
  },
  {
    genre: "Punk Rock",
    accessory_id: 2,
  },
  {
    genre: "Punk Rock",
    accessory_id: 3,
  },
  {
    genre: "Reggae",
    accessory_id: 4,
  },
  {
    genre: "Reggae",
    accessory_id: 5,
  },
  {
    genre: "Reggae",
    accessory_id: 6,
  },
  {
    genre: "Reggae",
    accessory_id: 7,
  },
  {
    genre: "Reggae",
    accessory_id: 8,
  },
  {
    genre: "Reggae",
    accessory_id: 9,
  },
];

const seedGfxGenre = () => G_fx_Genre.bulkCreate(gfxgenre);

module.exports = seedGfxGenre;
