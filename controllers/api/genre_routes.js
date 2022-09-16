const router = require("express").Router();
const { response } = require("express");
const { User, Genre, Instrument } = require("../../models");

// The `/api/genres` endpoint

// Get all genres
router.get("/", async (req, res) => {
  try {
    const genreData = await Genre.findAll({
      // include: [
      //     {
      //         model: User,
      //         attributes: ['username']
      //     },
      //     {
      //         model: Instrument,
      //         attributes: ['id', 'instrument_type', 'model', 'image', 'description', 'budget', 'genre_id'],
      //         include: {
      //             model: User,
      //             attributes: ['username']
      //         }
      //     }
      // ]
    });

    res.status(200).json(genreData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Get genre by ID
router.get("/genre/:id", async (req, res) => {
  const instId = req.params.id;
  try {
    const genreData = await Genre.findByPk(instId);
    res.status(200).json(genreData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// get genre id by genre name
router.get("/byName/:name", async (req, res) => {
  const genreName = req.params.name;
  try {
    const genreData = await Genre.findAll({
      where: {
        genre: genreName,
      },
    });
    res.status(200).json(genreData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
