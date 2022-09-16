const { G_amp_Genre } = require("../../models");
const router = require("express").Router();

// get all guitar amp data
router.get("/", async (req, res) => {
  try {
    const gampData = await G_amp_Genre.findAll();

    res.status(200).json(gampData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// get all guitar amps by genre id
router.get("/genreId/:id", async (req, res) => {
  const genreId = req.params.id;
  try {
    const genreData = await G_amp_Genre.findAll({
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
