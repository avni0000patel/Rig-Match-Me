const router = require("express").Router();
const { Instrument_Genre } = require("../../models");

router.get("/", async (req, res) => {
  try {
    const instGen = await Instrument_Genre.findAll({
      //Comment
    });
    res.status(200).json(instGen);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/byGenre:id", async (req, res) => {
  const genreId = req.params.id.slice(1);
  try {
    const instruments = await Instrument_Genre.findAll({
      where: {
        genre_id: genreId,
      },
    });
    res.status(200).json(instruments);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/byInst:id", async (req, res) => {
  const instId = req.params.id.slice(1);
  try {
    const genres = await Instrument_Genre.findAll({
      where: {
        instrument_id: instId,
      },
    });
    res.status(200).json(genres);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
