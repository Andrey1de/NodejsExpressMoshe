# NodejsExpressMoshe

## Threre is Nodejs + express server For Store and retrieve alarms.json local file;

Payload format of json:
[
{
"alarmName": "111",
"time": "05:00:23",
"active": true
},
{
"alarmName": "A23",
"time": "23:00:00",
"active": true
}
]
#API :

## POST http://localhost:4100/alarms/save (payload json)

## GET http://localhost:4100/alarms/read (payload json)
