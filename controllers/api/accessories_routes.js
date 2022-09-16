const { Gamp, Gfx, Bamp, Bfx, Dpeds, Dcymb } = require("../../models");
const router = require("express").Router();

router.get("/gamp", async (req, res) => {
  try {
    const gampData = await Gamp.findAll();

    res.status(200).json(gampData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/gfx", async (req, res) => {
  try {
    const gfxData = await Gfx.findAll();

    res.status(200).json(gfxData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/bamp", async (req, res) => {
  try {
    const bampData = await Bamp.findAll();

    res.status(200).json(bampData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/bfx", async (req, res) => {
  try {
    const bfxData = await Bfx.findAll();

    res.status(200).json(bfxData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/dpeds", async (req, res) => {
  try {
    const dpedsData = await Dpeds.findAll();

    res.status(200).json(dpedsData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/dcymb", async (req, res) => {
  try {
    const dcymbData = await Dcymb.findAll();

    res.status(200).json(dcymbData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
