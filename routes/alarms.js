'use strict';
const fs = require('fs');

var express = require('express');
var router = express.Router();
var GAlarms =
[
    { alarmName: "A1", time: '06:00:00', active: true },
    { alarmName: "A2",time: '22:00:00', active: false }
];

/* GET users listing. */
router.get('/list', function (req, res) {
    res.json(GAlarms);
});
router.get('/read', function (req, res) {
   
    try {
      let rawdata = fs.readFileSync('alarms.json');
        let alarms = JSON.parse(rawdata);
        res.json(alarms);
     
    } catch (error) {
        res.json([]);
        console.log(error);
    }
 });

router.post('/save', function (req, res) {
    const _alarms = req.body;
    try {
        const _json = JSON.stringify(_alarms, null, 2);
        fs.writeFileSync('alarms.json', _json);
        console.log('/save\n' + _json);
        res.send('OK\n');
        
    } catch (error) {
        console.log(error);
    }
});


router.post('/add', function (req, res) {
    let _alarm = req.body;
    _alarm.active = _alarm.active || true;
    if (!_alarm || !_alarm.alarm)
        res.send('Unespected body');
    else if (_alarm.time.split(':').length != 3)
        res.send('Unespected time  format');
    else {
        _alarm.alarm = _alarm.alarm.trim();
        let arr = GAlarms.map(function (e) { return e.alarm; });
        let idx = arr.indexOf(_alarm.alarm);
        if (idx > 0) {
            GAlarms[idx] = _alarm;
        } else {
            GAlarms.push(_alarm);
        }

        res.send('OK\n' + JSON.stringify(GAlarms, null, 2));
    }

});
//router.post('/remove', function (req, res) {
//    let _alarm = req.body;
//    _alarm.active = _alarm.active || true;
//    if (!_alarm || !_alarm.alarm)
//        res.send('Unespected body');
//    else if (_alarm.time.split(':').length != 3)
//        res.send('Unespected time  format');
//    else {
//        _alarm.alarm = _alarm.alarm.trim();
//        let arr = GAlarms.map(function (e) { return e.alarm; });
//        let idx = arr.indexOf(_alarm.alarm);
//        if (idx > 0) {
//            GAlarms = GAlarms.splice(idx, 1);
//        } 
     

//        res.send('OK\n' + JSON.stringify(GAlarms, null, 2));
//    }

//});

module.exports = router;
