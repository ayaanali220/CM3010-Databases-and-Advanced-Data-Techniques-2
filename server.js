/**
 * routes/directors.js — RQ2: Top directors by average rating
 * CM3010 Database Coursework
 * Author: Written personally by Ayaan
 *
 * Performance fix: pre-filter director nconst values in a subquery
 * before joining to the large person + rating tables.
 */

'use strict';

const express = require('express');
const { pool } = require('../db');
const router  = express.Router();

router.get('/', async (req, res) => {
  const minFilms = parseInt(req.query.min_films, 10) || 5;
  const limit    = Math.min(parseInt(req.query.limit, 10) || 10, 50);

  // Step 1: find director nconst values and their stats — only touch principal + rating + title
  // Step 2: join to person just for the name (much smaller join)
  const [rows] = await pool.query(
    `SELECT
        p.primaryName                  AS director_name,
        d.films_directed,
        d.avg_rating,
        d.highest_rated,
        d.lowest_rated
     FROM (
         SELECT
             pr.nconst,
             COUNT(DISTINCT t.tconst)       AS films_directed,
             ROUND(AVG(r.averageRating), 2) AS avg_rating,
             MAX(r.averageRating)           AS highest_rated,
             MIN(r.averageRating)           AS lowest_rated
         FROM principal pr
         JOIN title  t ON t.tconst = pr.tconst
         JOIN rating r ON r.tconst = t.tconst
         WHERE pr.category = 'director'
         GROUP BY pr.nconst
         HAVING COUNT(DISTINCT t.tconst) >= ?
         ORDER BY avg_rating DESC
         LIMIT ?
     ) AS d
     JOIN person p ON p.nconst = d.nconst
     ORDER BY d.avg_rating DESC`,
    [minFilms, limit]
  );

  res.render('directors', {
    title:    'RQ2 — Top Directors by Average Rating',
    rows,
    minFilms,
    limit,
  });
});

module.exports = router;
