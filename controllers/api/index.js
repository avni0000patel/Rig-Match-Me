const router = require('express').Router();
const userRoutes = require('./userRoutes');
const genreRoutes = require('./genreRoutes');

router.use('/users', userRoutes);
router.use('/genres', genreRoutes);
module.exports = router;