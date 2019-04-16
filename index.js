const express = require('express')
const app = express()
 
var realtimeMetrics ={};
const WebSocketClient = require('websocket').client;
 
const wsAddress = process.env.WSADDRESS || "ws://localhost:7890/"
const client = new WebSocketClient();
 
client.on('connectFailed', function(error) {
    console.log('Connect Error: ' + error.toString());
});
 
client.on('connect', function(connection) {
    console.log('WebSocket Client Connected');
    connection.on('error', function(error) {
        console.log("Connection Error: " + error.toString());
    });
    connection.on('close', function() {
        console.log('echo-protocol Connection Closed');
    });
    connection.on('message', function(message) {
        if (message.type === 'utf8') {
            console.log("Received: '" + message.utf8Data + "'");
            realtimeMetrics = message.utf8Data;
        }
    });
});
 
client.connect(wsAddress);
app.get('/', function (req, res) {
    res.contentType("application/json")
    res.send(realtimeMetrics)
})
 
app.listen(3000)