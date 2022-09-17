const { Gamp, Gfx, Bamp, Bfx, Dpeds, Dcymb } = require("../../models");
const router = require("express").Router();
const { Op } = require("sequelize");
const { json } = require("express");

//Get all guitar amps
router.get("/gamp", async (req, res) => {
  try {
    const gampData = await Gamp.findAll();

    res.status(200).json(gampData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//Get all guitar amps by id
router.get("/gamp/:id", async (req, res) => {
  const gampId = req.params.id;
  try {
    const gampData = await Gamp.findAll({
      where: {
        id: gampId,
      },
    });

    res.status(200).json(gampData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//Get all guitar amps by id in Bulk
router.post("/bulkgampById", async (req, res) => {
  const gampIds = req.body.accArray;
  try {
    const guitarAmps = await Gamp.findAll({
      where: {
        id: gampIds,
      },
    });
    res.status(200).json(guitarAmps);
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

//Get all guitar fx pedals by id in Bulk
router.post("/bulkgfxById", async (req, res) => {
  const gfxIds = req.body.accArray;
  try {
    const guitarFx = await Gfx.findAll({
      where: {
        id: gfxIds,
      },
    });
    res.status(200).json(guitarFx);
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

//Get all guitar amps by id in Bulk
router.post("/bulkbampById", async (req, res) => {
  const bampIds = req.body.accArray;
  try {
    const bassAmps = await Bamp.findAll({
      where: {
        id: bampIds,
      },
    });
    res.status(200).json(bassAmps);
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

//Get all guitar amps by id in Bulk
router.post("/bulkbfxById", async (req, res) => {
  const bfxIds = req.body.accArray;
  try {
    const bassFx = await Bfx.findAll({
      where: {
        id: bfxIds,
      },
    });
    res.status(200).json(bassFx);
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

//Get all guitar amps by id in Bulk
router.post("/bulkdpedsById", async (req, res) => {
  const dpedsIds = req.body.accArray;
  try {
    const drumPeds = await Dpeds.findAll({
      where: {
        id: dpedsIds,
      },
    });
    res.status(200).json(drumPeds);
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

//Get all guitar amps by id in Bulk
router.post("/bulkdcymbById", async (req, res) => {
  const dcymbIds = req.body.accArray;
  try {
    const drumCymbals = await Dcymb.findAll({
      where: {
        id: dcymbIds,
      },
    });
    res.status(200).json(drumCymbals);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
