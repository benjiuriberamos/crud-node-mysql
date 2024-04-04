const mysql = require('mysql2/promise')

const path = require('path')
require('dotenv').config({ path: path.resolve('_dirname', '../.env') })

const connection = mysql.createPool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD
});

module.exports = connection;