const { Bamp_Genre } = require("../models");

const bampgenre = [
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
        genre: "Hip-Hop",
        accessory_id: 3,
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
        accessory_id: 4,
    },
    {
        genre: "Metal",
        accessory_id: 5,
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
        genre: "Alternative Rock",
        accessory_id: 1,
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
        genre: "Reggae",
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
];

const seedBampGenre = () => Bamp_Genre.bulkCreate(bampgenre);

module.exports = seedBampGenre;