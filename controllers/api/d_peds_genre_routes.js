const { D_peds_Genre } = require("../../models");
const router = require("express").Router();

// get all Drum pedals data
router.get("/", async (req, res) => {
  try {
    const dpedsData = await D_peds_Genre.findAll();

    res.status(200).json(dpedsData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// get all Drum pedals by genre id
router.get("/genreId/:id", async (req, res) => {
  const genreId = req.params.id;
  try {
    const genreData = await D_peds_Genre.findAll({
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
