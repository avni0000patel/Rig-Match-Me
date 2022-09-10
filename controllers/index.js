const router = require('express').Router();

const apiRoutes = require("./api");
const homeRoutes = require("./homeRoutes");
const newRigRoutes = require("./newRigRoutes");

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/newRig', newRigRoutes);

module.exports = router;
