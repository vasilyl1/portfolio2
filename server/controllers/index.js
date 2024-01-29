const router = require('express').Router();

const homeRoutes = require('./homeRoutes');
const apiRoutes = require('./htmlRoutes');
router.use('/api', apiRoutes);
router.use('/', homeRoutes);


module.exports = router;