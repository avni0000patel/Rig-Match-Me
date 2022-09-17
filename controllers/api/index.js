const router = require("express").Router();
const userRoutes = require("./user_routes");
const genreRoutes = require("./genre_routes");
const instrumentRoutes = require("./instrument_routes");
const rigRoutes = require("./rig_routes");
const instrumentGenreRoutes = require("./instrument_genres_routes");
const accessoriesRoutes = require("./accessories_routes");
const gampGenreRoutes = require("./g_amp_genre_routes");
const gfxGenreRoutes = require("./g_fx_genre_routes");
const bampGenreRoutes = require("./b_amp_genre_routes");
const bfxGenreRoutes = require("./b_fx_genre_routes");
const dpedsGenreRoutes = require("./d_peds_genre_routes");
const dcymbGenreRoutes = require("./d_cymb_genre_routes");

router.use("/users", userRoutes);
router.use("/genres", genreRoutes);
router.use("/instruments", instrumentRoutes);
router.use("/rigs", rigRoutes);
router.use("/instgenre", instrumentGenreRoutes);
router.use("/accessories", accessoriesRoutes);
router.use("/gamp", gampGenreRoutes);
router.use("/gfx", gfxGenreRoutes);
router.use("/bamp", bampGenreRoutes);
router.use("/bfx", bfxGenreRoutes);
router.use("/dpeds", dpedsGenreRoutes);
router.use("/dcymb", dcymbGenreRoutes);

module.exports = router;
