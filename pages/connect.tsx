
// Import Express, MySQL BodyParser and Port and table name
const express = require("express");
const mysql = require("mysql2");
var bodyParser = require('body-parser');
const app = express();
const port = 3000;


// create the connection to database
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "rejay45", //change this into custom database name
});

app.listen(port, () => {
    console.log(`Server is running on port http://127.0.0.1:${port}`);
});

// Connection Handling Error
connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});

// call database table
const db_table = 'camerav2';


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


// insert time when motion is detected using opencv


app.post('/upload', (req, res) => {
    var var_time = req.body.var_time;
    var file_path = req.body.file_path;

    // save datetime, imgfile, into the db
    connection.query(`INSERT INTO ${db_table} (datetime, filename) VALUES (?, ?);`, [var_time, file_path],
        (err, result) => {
            try {
                if (result.affectedRows > 0) {
                    res.json({ data: "Success" });
                } else {
                    res.json({ message: "Something went wrong." });
                }
            } catch {
                res.json({ message: err });
            }
        })
})


app.get('/display', (req, res) => {
    // Select the last entry from the db
    connection.query(`SELECT * FROM ${db_table} ORDER BY id DESC LIMIT 1;`,
        (err, results) => {
            try {
                if (results.length > 0) {
                    // send a json response containg the image data (blob)
                    res.json({ 'imgData': results[0]['filename'] });
                } else {
                    res.json({ message: "Something went wrong." });
                }
            } catch {
                res.json({ message: err });
            }
        })
})