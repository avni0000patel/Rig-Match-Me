const router = require('express').Router();
const { User, Genre, Instrument } = require('../../models');

// The `/api/instruments` endpoint

// Get all instruments
router.get('/', async (req, res) => {
    try {
        const instrumentData = await Instrument.findAll({
            // include: [{ model: User }, { model: Genre }]
        });
        console.log(instrumentData);

        res.status(200).json(instrumentData);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
})

module.exports = router;