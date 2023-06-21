const router = require('express').Router();

const petRoutes = require('./petRoutes');
const userRoutes = require('./userRoutes');
const agencyRoutes = require('./agencyRoutes');

router.use('/pets', petRoutes);
router.use('/users', userRoutes);
router.use('/agencies', agencyRoutes);

module.exports = router;
