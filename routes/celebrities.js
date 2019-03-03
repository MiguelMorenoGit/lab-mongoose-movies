'use strict';

const express = require('express');
const router = express.Router();
const Celebrity = require('../models/celebrity.js');

/* GET home page. */
router.get('/', async (req, res, next) => {
  try {
    const arrayCelebrities = await Celebrity.find();
    res.render('celebrities/index', { allCelebrities: arrayCelebrities });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
