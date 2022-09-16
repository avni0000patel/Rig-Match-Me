const { G_amp_Genre } = require("../../models");
const router = require("express").Router();

router.get("/gamp", async (req, res) => {
  try {
    const gampData = await G_amp_Genre.findAll();

    res.status(200).json(gampData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
