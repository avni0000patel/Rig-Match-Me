const router = require("express").Router();
const userRoutes = require("./user_routes");
const genreRoutes = require("./genre_routes");
const instrumentRoutes = require("./instrument_routes")

router.use("/users", userRoutes);
router.use("/genres", genreRoutes);
router.use("/instruments", instrumentRoutes)
module.exports = router;
