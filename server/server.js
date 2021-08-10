const express = require('express');
const dbConfig = require("./config/db.config");
const mysql = require('mysql2')
var app = express();
var cors = require('cors')

app.use(cors()) // Use this after the variable declaration
//Configuring express server
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

//MySQL details
var mysqlConnection = mysql.createConnection({
    host: dbConfig.HOST,
    user: dbConfig.USER,
    password: dbConfig.PASSWORD,
    database: dbConfig.DB,
    port: dbConfig.PORT,
    multipleStatements: dbConfig.multipleStatements
});
exports.db = mysqlConnection
mysqlConnection.connect((err) => {
    if (!err)
        console.log('Connection Established Successfully');
    else
        console.log('Connection Failed!' + JSON.stringify(err, undefined, 2));
});

require("./routes/routes")(app);
//Establish the server connection
//PORT ENVIRONMENT VARIABLE
const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Listening on port ${port}..`));