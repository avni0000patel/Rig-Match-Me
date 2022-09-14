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
        //   attributes: ['instrument_type']
        // }
      ],
    });

    const genres = genreData.map((genre) => genre.get({ plain: true }));
    console.log(genres);

    // const instrumentData = await Instrument.findAll({
    //   include: [
    //     {
    //       model: User,
    //     },
    //   ],
    // });

    // const instruments = instrumentData.map((instrument) => instrument.get({ plain: true }));
    // console.log(instruments);

    res.render("new_rig", {
      genres,
      logged_in: req.session.logged_in
      // instruments
    });

  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }

});

router.get("/", async (req, res) => {
  try {

    const instrumentData = await Instrument.findAll({
      include: [
        {
          model: User,
        },
      ],
    });

    const instruments = instrumentData.map((instrument) => instrument.get({ plain: true }));
    console.log(instruments);

    res.render("new_rig", {
      instruments,
      logged_in: req.session.logged_in
    });

  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
