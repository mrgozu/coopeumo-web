/*
Copyright 2017 - 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at
    http://aws.amazon.com/apache2.0/
or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and limitations under the License.
*/




var express = require('express')
var bodyParser = require('body-parser')
var awsServerlessExpressMiddleware = require('aws-serverless-express/middleware')

// declare a new express app
var app = express()
app.use(bodyParser.json())
app.use(awsServerlessExpressMiddleware.eventContext())

// Enable CORS for all methods
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    next()
});

const mysql = require('mysql');
const con = mysql.createConnection({
    host: process.env.RDS_HOSTNAME,
    user: process.env.RDS_USERNAME,
    password: process.env.RDS_PASSWORD,
    port: process.env.RDS_PORT,
    database: process.env.RDS_DATABASE
});


/**********************
 * Example get method *
 **********************/

app.get('/', function(req, res) {
    // Add your code here
    res.json({ success: 'get call succeed!', url: req.url, header: req.headers });
});

app.get('//*', function(req, res) {
    // Add your code here
    res.json({ success: 'get call succeed!', url: req.url });
});

/****************************
 * Example post method *
 ****************************/

app.post('/', function(req, res) {
    // Add your code here
    res.json({ success: 'post call succeed!', url: req.url, body: req.body })
});

app.post('//*', function(req, res) {
    // Add your code here
    res.json({ success: 'post call succeed!', url: req.url, body: req.body })
});

/****************************
 * Example put method *
 ****************************/

app.put('/', function(req, res) {
    // Add your code here
    res.json({ success: 'put call succeed!', url: req.url, body: req.body })
});

app.put('//*', function(req, res) {
    // Add your code here
    res.json({ success: 'put call succeed!', url: req.url, body: req.body })
});

/****************************
 * Example delete method *
 ****************************/

app.delete('/', function(req, res) {
    // Add your code here
    res.json({ success: 'delete call succeed!', url: req.url });
});

app.delete('//*', function(req, res) {
    // Add your code here
    res.json({ success: 'delete call succeed!', url: req.url });
});


/**********************
 * Estacion metereologica
 *  get method 
 **********************/

app.get('/em', (req, res) => {
    // Add your code here
    let cantidad = req.headers.cantidad;
    // con.connect();
    let sql = `SELECT dateTime, from_unixtime(dateTime-10800,"%H:%i, %d/%m/%Y") as date, from_unixtime(dateTime-10800,"%Y-%m-%d") as date2, inHumidity, outHumidity, inTemp, outTemp, heatindex, pressure, rain, UV, windGustDir, windSpeed   FROM weewx.archive order by dateTime desc LIMIT ${cantidad}`;
    con.query(sql, (err, rows, fields) => {
        //  con.end();
        if (err) throw err;

        res.json(rows);

    });


});

app.get('/em/:id', (req, res) => {
    // Add your code here
    const id = req.params.id;
    if (id == '1') {
        //con.connect();
        let sql = `SELECT dateTime, from_unixtime(dateTime-10800,"%H:%i, %d/%m/%Y") as date, from_unixtime(dateTime-10800,"%Y-%m-%d") as dateGrafic, from_unixtime(dateTime-10800,"%d-%m-%y") as dateLabel , inHumidity, outHumidity, inTemp, outTemp, heatindex, pressure, rain, UV, windGustDir, windSpeed   FROM weewx.archive order by dateTime asc`;
        con.query(sql, (err, rows, fields) => {
            if (err) throw err;

            res.json(rows);

        });
        //res.json({ success: 'get call em 2!', url: req.url });

    }
});
con.connect(error => {
        if (error) throw error;
        console.log('Database server running');
    })
    /****************************
     *  Fin Estacion metereologica
     ****************************/



/**********************
 *  get method RFID *
 **********************/

 app.get('/rfid', function(req, res) {
    // Add your code here
    res.json({ success: 'get call succeed!', url: req.url, header: req.headers });
});

app.get('//*', function(req, res) {
    // Add your code here
    res.json({ success: 'get call succeed!', url: req.url });
});







app.listen(3000, function() {
    console.log("App started");
});

// Export the app object. When executing the application local this does nothing. However,
// to port it to AWS Lambda we will create a wrapper around that will load the app from
// this file
module.exports = app;