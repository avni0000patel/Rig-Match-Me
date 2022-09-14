router = require("express").Router();
const { User, Genre, Instrument } = require("../models");

router.get("/", async (req, res) => {
  try {
    const genreData = await Genre.findAll({
      include: [
        {
          model: User,
          attributes: ['username']
        },
        // {
        //   model: Instrument,
        //   attributes: ['id', 'instrument_type', 'model', 'image', 'description', 'budget', 'genre_id'],
        //   include: {
        //     model: User,
        //     attributes: ['username']
        //   }
        // }
      ]
    });

    const genres = genreData.map((genre) => genre.get({ plain: true }));
    console.log(genres);

    res.render("new_rig", {
      genres,
      logged_in: req.session.logged_in
    });

  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }

});

module.exports = router;
