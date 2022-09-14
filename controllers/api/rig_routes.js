const router = require('express').Router();
const { User, Genre, Instrument, Rig } = require('../../models');
// const withAuth = require('../../utils/auth');

// Get all rigs
router.get('/', async (req, res) => {
    try {
        const rigData = await Rig.findAll({
            // include: [{ model: User }, { model: Genre }, { model: Instrument }]
        });

        res.status(200).json(rigData);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// Get one rig
router.get('/:id', async (req, res) => {
    try {
        const rigData = await Rig.findByPk(req.params.id, {
            where: {
                id: req.params.id
            },
            // include: [{ model: User }, { model: Genre }, { model: Instrument }]
        });

        if (!rigData) {
            res.status(404).json({ message: "No rig found with this id!" });
            return;
        }

        res.status(200).json(rigData);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// Create new rig
router.post('/', async (req, res) => {
    try {
        const rigData = await Rig.create({
            genre: req.body.genre,
            instrument: req.body.instrument,
            accessory1: req.body.accessory1,
            accessory2: req.body.accessory2
        });

        res.status(200).json(rigData);
    } catch (err) {
        console.log(err);
        res.status(400).json(err);
    }
});

// Update
router.put('/:id', async (req, res) => {
    try {
        const rigData = await Rig.update(req.body, {
            where: {
                id: req.params.id
            },
        });

        if (!rigData) {
            res.status(404).json({ message: 'No rig found with this id!' });
            return;
        }

        res.status(200).json(rigData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// Delete
router.delete('/:id', async (req, res) => {
    try {
        const rigData = await Rig.destroy({
            where: {
                id: req.params.id
            }
        });

        if (!rigData) {
            res.status(404).json({ message: "No rig found with this id" });
            return;
        }

        res.status(200).json(rigData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
