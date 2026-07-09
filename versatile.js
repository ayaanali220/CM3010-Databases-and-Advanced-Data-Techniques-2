/**
 * routes/about.js — About / Dataset information page
 * CM3010 Database Coursework
 * Author: Written personally by Ayaan
 */

'use strict';

const express = require('express');
const router  = express.Router();

router.get('/', (req, res) => {
  res.render('about', {
    title: 'About — IMDb Explorer',
  });
});

module.exports = router;
