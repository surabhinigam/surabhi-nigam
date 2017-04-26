'use strict';

const router = require('express').Router();
module.exports = router;

router.use('/artists', require('./artists'));

router.use(function (req, res) {
  res.status(404).end();
});
