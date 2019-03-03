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
// ---------iteration 4 ---------
router.get('/new', (req, res, next) => {
  res.render('celebrities/new');
});

router.post('/', async (req, res, next) => {
  const { name, ocupation, catchPhrase } = req.body;
  const newCelebrity = { name, ocupation, catchPhrase };
  try {
    await Celebrity.create(newCelebrity);
    res.redirect('/');
  } catch (error) {
    res.render('celebrities/new');
  }
});
// ---------iteration 3 ---------
router.get('/:id', async (req, res, next) => {
  const { id } = req.params;
  try {
    const arrayCelebrity = await Celebrity.findById(id);
    res.render('celebrities/show', { theCelebrity: arrayCelebrity });
  } catch (error) {
    next(error);
  }
});

// ---------iteration 5 ---------

router.post('/:id/delete', async (req, res, next) => {
  const { id } = req.params;
  try {
    await Celebrity.findByIdAndDelete(id);
    res.redirect('/');
  } catch (error) {
    next(error);
  }
});

module.exports = router;
