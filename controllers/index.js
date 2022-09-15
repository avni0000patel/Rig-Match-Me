const router = require("express").Router();

const apiRoutes = require("./api");
const homeRoutes = require("./home_routes");
const newRigRoutes = require("./new_rig_routes");
const contactRoutes = require("./contact_routes");

router.use("/", homeRoutes);
router.use("/api", apiRoutes);
router.use("/new_rig", newRigRoutes);
router.use("/contact", contactRoutes);

module.exports = router;
