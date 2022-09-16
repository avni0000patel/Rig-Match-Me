const router = require("express").Router();
const userRoutes = require("./user_routes");
const genreRoutes = require("./genre_routes");
const instrumentRoutes = require("./instrument_routes");
const rigRoutes = require("./rig_routes");
const instrumentGenreRoutes = require("./instrument_genres_routes");
const accessoriesRoutes = require("./accessories_routes");

router.use("/users", userRoutes);
router.use("/genres", genreRoutes);
router.use("/instruments", instrumentRoutes);
router.use("/rigs", rigRoutes);
router.use("/instgenre", instrumentGenreRoutes);
router.use("/accessories", accessoriesRoutes);

module.exports = router;
