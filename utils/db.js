const mysql2 = require('mysql2/promise');

const pool = mysql2.createPool({
    host: 'localhost',
    port: '8889',
    user: 'root',
    password: 'root',
    database: 'solvd_shop',
    namedPlaceholders: true,
    decimalNumbers: true,
});

module.exports = {
    pool,
};