'use strict';
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    res.render('index', { title: 'Nodejs-Express-Moshe.' });
});

//router.get('/info', function (req, res) {
//    res.render('index', { title: 'Express' });
//});

module.exports = router;
