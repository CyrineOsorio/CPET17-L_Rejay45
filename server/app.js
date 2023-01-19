// Import Express, MySQL BodyParser and Port and table name

const express = require("express");
const mysql = require("mysql2");
var bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const fs = require('fs');
const saltRounds = 10;
const cors = require('cors')
const sessions = require('express-session')
const { PythonShell } = require('python-shell')
const app = express();
const port = 4000;
var session;

// listen to port
app.listen(port);

// create the connection to database
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "rejay45", //change this into custom database name
});

// Connection Handling Error
connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});

// call database table
const db_table = 'camerav2';
const db_table1 = 'auth';


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    limit: '50mb',
    extended: true,
    parameterLimit: 50000
}))

// parse application/json
app.use(bodyParser.json({ limit: '50mb' }))

// use cors
app.use(cors());

// app session 
app.use(sessions({
    secret: 'keyboardcat',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 100000 },
}))


// SignUp Form
app.post('/register', async(req, res) => {
    const username = req.body.username
    const password = req.body.password;

    bcrypt.hash(password, saltRounds, function(err, hash) {
        connection.query(`INSERT INTO ${db_table1} (username, password) VALUES (?, ?);`, [username, hash],
            (err, result) => {
                try {
                    res.json({ username: req.body.username });
                } catch {
                    res.json({ error_code: err.code, message: "Username has already existed" });
                }
            }
        )
    });
});


app.get('/Login', (req, res) => {
    if (session == undefined) {
        res.json({ is_logged_in: false });
    } else if (session != undefined) {
        res.json({ is_logged_in: true });
    }
});



app.get('/signup', (req, res) => {
    if (session == undefined) {
        res.json({ is_logged_in: false });
    } else if (session != undefined) {
        res.json({ is_logged_in: true });
    }
});



// LogIn FORM
app.post('/login', async(req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    connection.query(`SELECT * FROM ${db_table1} WHERE username=?`, [username],
        (err, results) => {
            try {
                if (results == []) {
                    res.json({ message: "Username doesn't exists" });
                } else {
                    bcrypt.compare(password, results[0].password, function(err, result) {
                        if (err) throw err;
                        if (result == true) {
                            session = req.session;
                            session.logged_in = true;
                            session.username = username;
                            console.log(session);
                            res.json({ message: 'Success' });
                        } else {
                            res.json({ message: 'Wrong Password', comment: 'Wrong password' });
                        }
                    })
                }
            } catch {
                res.json({ message: "Username doesn't exist.", comment: err });
            }
        });
});


// Logout
app.get('/logout', (req, res) => {
    session = undefined;
    res.redirect('http://localhost:3000');
});




// Motion PAge
// insert time when motion is detected using opencv
app.post('/upload', (req, res) => {

    var { var_time, file_path } = req.body;

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

// Display Image on our web page
app.get('/display', (req, res) => {
    console.log(session)
    if (session == undefined) {
        res.json({ is_logged_in: false });
    } else if (session != undefined) {
        let pyshell = new PythonShell('capture.py')
        pyshell.kill()

        PythonShell.run('capture.py', null, function(err) {
            if (err) {
                throw err
            }
            console.log('Motion Detector Terminated');
        });
        // Select the last entry from the db
        let array = [];
        connection.query(`SELECT * FROM ${db_table} ORDER BY id DESC LIMIT 10;`,
            (err, results) => {
                try {
                    if (results.length > 0) {
                        for (i = 0; i < results.length; i++) {
                            array.unshift(results[i])
                        }
                        // send a json response containg the image data (blob)
                        res.json({ 'imgData': array });
                    } else {
                        res.json(null);
                    }
                } catch {
                    res.json({ message: err });
                }
            });
    }

});