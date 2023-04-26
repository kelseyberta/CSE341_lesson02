const express = require('express');
const router = express.Router();

router.use('/', require('./swagger'));
router.use('/Contacts', require('./Contacts'));

module.exports = router;