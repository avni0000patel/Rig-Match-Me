const router = require("express").Router();

const apiRoutes = require("./api");
const homeRoutes = require("./home_routes");
const newRigRoutes = require("./new_rig_routes");

router.use("/", homeRoutes);
router.use("/api", apiRoutes);
router.use("/new_rig", newRigRoutes);

module.exports = router;
