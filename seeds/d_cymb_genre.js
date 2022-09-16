const { D_cymb_Genre } = require("../models");

const dcymbgenre = [
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
    accessory_id: 3,
  },
  {
    genre: "Rock",
    accessory_id: 4,
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
    accessory_id: 1,
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
    accessory_id: 8,
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
    accessory_id: 4,
  },
  {
    genre: "Metal",
    accessory_id: 5,
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
    accessory_id: 3,
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
    genre: "Alternative Rock",
    accessory_id: 1,
  },
  {
    genre: "Alternative Rock",
    accessory_id: 2,
  },
  {
    genre: "Alternative Rock",
    accessory_id: 3,
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
    accessory_id: 2,
  },
  {
    genre: "Punk Rock",
    accessory_id: 3,
  },
  {
    genre: "Punk Rock",
    accessory_id: 4,
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
    genre: "Reggae",
    accessory_id: 1,
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
    accessory_id: 8,
  },
];

const seedDcymbGenre = () => D_cymb_Genre.bulkCreate(dcymbgenre);

module.exports = seedDcymbGenre;
