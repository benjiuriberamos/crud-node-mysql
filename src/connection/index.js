const mysql = require('mysql2/promise')

const connection = mysql.createPool({
    host: "localhost",
    port: "3306",
    database: "sakila",
    user: "root",
    password: "98738534"
});

module.exports = connection;