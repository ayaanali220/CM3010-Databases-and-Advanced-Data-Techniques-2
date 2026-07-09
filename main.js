/**
 * db.js — MySQL Connection Pool
 * CM3010 Database Coursework
 * Author: Written personally by Ayaan
 *
 * Uses mysql2/promise for async/await support.
 * A connection pool is used (not a single connection) so the app
 * can handle concurrent requests without blocking.
 */

'use strict';

const mysql = require('mysql2/promise');
require('dotenv').config();

// Create a pool of connections — mysql2 manages them automatically
const pool = mysql.createPool({
  host:               process.env.DB_HOST     || 'localhost',
  port:               parseInt(process.env.DB_PORT, 10) || 3306,
  user:               process.env.DB_USER     || 'root',
  password:           process.env.DB_PASSWORD || '',
  database:           process.env.DB_NAME     || 'imdb_coursework',
  waitForConnections: true,     // Queue requests when all connections are in use
  connectionLimit:    10,       // Max simultaneous connections
  queueLimit:         0,        // No limit on queued requests
  charset:            'utf8mb4',
});

/**
 * Test the connection on startup.
 * Throws if the database is unreachable so the problem is surfaced immediately.
 */
async function testConnection() {
  let conn;
  try {
    conn = await pool.getConnection();
    console.log(`✅ MySQL connected — database: ${process.env.DB_NAME}`);
  } catch (err) {
    console.error('❌ MySQL connection failed:', err.message);
    console.error('   Check your .env file and ensure MySQL is running.');
    process.exit(1);   // Exit so the server does not start in a broken state
  } finally {
    if (conn) conn.release();
  }
}

module.exports = { pool, testConnection };
