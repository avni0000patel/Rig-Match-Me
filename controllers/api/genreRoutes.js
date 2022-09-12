const router = require('express').Router();
const { User, Genre } = require('../../models');

// The `/api/genres` endpoint

// Get all genres
router.get('/', async (req, res) => {
    try {
        const genreData = await Genre.findAll({
            include: [
                {
                    model: User,
                    attributes: ['username']
                }
            ]
        });

        res.status(200).json(genreData);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
})

module.exports = router;