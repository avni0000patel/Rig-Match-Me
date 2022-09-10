router = require('express').Router();
// const { User, Genre } = require('../models');

router.get('/', (req, res) => {
    // try {
    //     const genreData = await Genre.findAll({
    //         where: {
    //             user_id: req.session.user_id
    //         },
    //         include: [{
    //             model: User
    //         }]
    //     });

    //     const genres = genreData.map((genre) => genre.get({ plain: true }));

    //     res.render('newRig', {
    //         genres
    //     });
    // } catch {
    //     console.log(err);
    //     res.status(500).json(err);
    // }
    res.render('newRig');
});

module.exports = router;
