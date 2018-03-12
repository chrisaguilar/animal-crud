var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'a',
    database: 'animal_db'
});

connection.connect(function(err) {
    if (err) {
        console.error(err);
        process.exit(1);
    }
});

module.exports = connection;
