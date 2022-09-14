const router = require("express").Router();
const userRoutes = require("./user_routes");
const genreRoutes = require("./genre_routes");
const instrumentRoutes = require("./instrument_routes");
const rigRoutes = require("./rig_routes");

router.use("/users", userRoutes);
router.use("/genres", genreRoutes);
router.use("/instruments", instrumentRoutes);
router.use("/rigs", rigRoutes);

module.exports = router;
