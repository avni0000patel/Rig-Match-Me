const router = require("express").Router();
const userRoutes = require("./user_routes");
const genreRoutes = require("./genre_routes");

router.use("/users", userRoutes);
router.use("/genres", genreRoutes);
module.exports = router;
