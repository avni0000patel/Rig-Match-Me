router = require('express').Router();
const { User, Genre } = require('../models');

router.get('/', async (req, res) => {
    try {
        const genreData = await Genre.findAll({
            include: [{
                model: User
            }]
        });

        const genres = genreData.map((genre) => genre.get({ plain: true }));
        console.log(genres);

        res.render('newRig', {
            genres
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
    // res.render('newRig');
});

module.exports = router;
