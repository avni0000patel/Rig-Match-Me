const { B_fx_Genre } = require("../../models");
const router = require("express").Router();

// get all bass guitar effects pedal data
router.get("/", async (req, res) => {
  try {
    const bfxData = await B_fx_Genre.findAll();

    res.status(200).json(bfxData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// get all bass guitar effects pedal by genre id
router.get("/genreId/:id", async (req, res) => {
  const genreId = req.params.id;
  try {
    const genreData = await B_fx_Genre.findAll({
      where: {
        genre_id: genreId,
      },
    });
    res.status(200).json(genreData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
