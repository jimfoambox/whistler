const path = require('path');
const express = require('express');
const app = express();
// const morgan = require('morgan')
// const bodyParser = require('body-parser')


// app.use(morgan('dev'));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '../public')));

app.get('*', function (req, res, next) {
    res.sendFile(path.join(__dirname, '../public/index.html'))
});

app.use(function (err, req, res, next) {
    console.error(err);
    console.error(err.stack);
    res.status(err.status || 500).send(err.message || 'Internal Sever Error.')
});

module.exports = app