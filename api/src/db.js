const mysql = require('mysql2/promise');


const pool = mysql.createPool({
host: 'localhost',
user: 'CrislaineL',
password: '13151211',
database: 'turmas_db',
waitForConnections: true,
connectionLimit: 10,
});


module.exports = pool;