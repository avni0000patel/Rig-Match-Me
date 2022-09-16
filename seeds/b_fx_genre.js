const { B_fx_Genre } = require("../models");

const bfxgenre = [
  {
    genre: "Rock",
    accessory_id: 1,
  },
  {
    genre: "Rock",
    accessory_id: 3,
  },
  {
    genre: "Rock",
    accessory_id: 5,
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
    genre: "Hip-Hop",
    accessory_id: 2,
  },
  {
    genre: "Hip-Hop",
    accessory_id: 4,
  },
  {
    genre: "Hip-Hop",
    accessory_id: 6,
  },
  {
    genre: "Metal",
    accessory_id: 1,
  },
  {
    genre: "Metal",
    accessory_id: 3,
  },
  {
    genre: "Metal",
    accessory_id: 5,
  },
  {
    genre: "Metal",
    accessory_id: 6,
  },
  {
    genre: "Metal",
    accessory_id: 7,
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
    accessory_id: 6,
  },
  {
    genre: "Country",
    accessory_id: 7,
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
    genre: "Punk Rock",
    accessory_id: 1,
  },
  {
    genre: "Punk Rock",
    accessory_id: 3,
  },
  {
    genre: "Punk Rock",
    accessory_id: 5,
  },
  {
    genre: "Punk Rock",
    accessory_id: 6,
  },
  {
    genre: "Punk Rock",
    accessory_id: 7,
  },
  {
    genre: "Reggae",
    accessory_id: 2,
  },
  {
    genre: "Reggae",
    accessory_id: 4,
  },
  {
    genre: "Reggae",
    accessory_id: 6,
  },
];

const seedBfxGenre = () => B_fx_Genre.bulkCreate(bfxgenre);

module.exports = seedBfxGenre;
