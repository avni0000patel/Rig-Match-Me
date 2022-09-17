const { G_fx_Genre } = require("../../models");
const router = require("express").Router();

// get all guitar effects pedal data
router.get("/", async (req, res) => {
  try {
    const gfxData = await G_fx_Genre.findAll();

    res.status(200).json(gfxData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// get all guitar effects pedal by genre id
router.get("/genreId/:id", async (req, res) => {
  const genreId = req.params.id;
  try {
    const genreData = await G_fx_Genre.findAll({
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
