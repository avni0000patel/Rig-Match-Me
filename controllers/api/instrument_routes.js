const router = require("express").Router();
const { User, Genre, Instrument, Instrument_Genre } = require("../../models");
const { restore } = require("../../models/genre");
const { Op } = require("sequelize");

// The `/api/instruments` endpoint

// Get all instruments
router.get("/", async (req, res) => {
  try {
    const instrumentData = await Instrument.findAll({
      //   include: [{ model: Instrument_Genre }],
    });
    console.log(instrumentData);

    res.status(200).json(instrumentData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Get instrument by id
router.get("/byId:id", async (req, res) => {
  const instrumentId = req.params.id.slice(1);
  try {
    const instrumentData = await Instrument.findByPk(instrumentId);
    res.status(200).json(instrumentData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get Instrument Types
router.get("/types", async (req, res) => {
  try {
    const instrumentTypes = await Instrument.findAll();
    let types = [];
    for (instrument of instrumentTypes) {
      if (!types.includes(instrument.instrument_type)) {
        types.push(instrument.instrument_type);
      }
    }
    res.status(200).json(types);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get instruments in bulk
router.post("/bulkGetById", async (req, res) => {
  let ids = req.body.instruments;
  const type = req.body.instrumentType;
  console.log(ids);
  try {
    const instruments = await Instrument.findAll({
      where: {
        id: ids,
        instrument_type: type,
      },
    });
    res.status(200).json(instruments);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
