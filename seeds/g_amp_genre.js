const { Gamp_Genre } = require("../models");

const gampgenre = [
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
        accessory_id: 3,
    },
    {
        genre: "Hip-Hop",
        accessory_id: 4,
    },
    {
        genre: "Hip-Hop",
        accessory_id: 7,
    },
    {
        genre: "Metal",
        accessory_id: 1,
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
        genre: "Punk Rock",
        accessory_id: 7,
    },
    {
        genre: "Reggae",
        accessory_id: 1,
    },
    {
        genre: "Reggae",
        accessory_id: 2,
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
        accessory_id: 7,
    },
];

const seedGampGenre = () => Gamp_Genre.bulkCreate(gampgenre);

module.exports = seedGampGenre;