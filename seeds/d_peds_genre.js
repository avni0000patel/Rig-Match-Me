const { Deds_Genre } = require("../models");

const dpedsgenre = [
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
        genre: "Hip-Hop",
        accessory_id: 1,
    },
    {
        genre: "Hip-Hop",
        accessory_id: 2,
    },
    {
        genre: "Hip-Hop",
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
        accessory_id: 6,
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
        genre: "Punk Rock",
        accessory_id: 2,
    },
    {
        genre: "Punk Rock",
        accessory_id: 3,
    },
];

const seedDpedsGenre = () => Dpeds_Genre.bulkCreate(dpedsgenre);

module.exports = seedDpedsGenre;