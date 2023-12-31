const router = require('express').Router();

const petRoutes = require('./petRoutes');
const userRoutes = require('./userRoutes');
const agencyRoutes = require('./agencyRoutes');
const favoritesRoutes = require('./favoritesRoutes');

/* UNCOMMENT UNTIL WE ARE USING THEM */
router.use('/pets', petRoutes);
router.use('/users', userRoutes);
router.use('/dashboard', favoritesRoutes);
/* router.use('/agencies', agencyRoutes); */

module.exports = router;
