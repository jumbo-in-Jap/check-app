var WebSocketServer = require("ws").Server
var http = require("http")
var express = require("express")
var app = express()
var port = process.env.PORT || 5000

// make web socket server
app.use(express.static(__dirname + "/"))
var server = http.createServer(app)
server.listen(port)
console.log("http server listening on %d", port)
var wss = new WebSocketServer({server: server})

// save clients
var connections = [];

wss.on("connection", function(ws) {
	console.log("websocket connection open")
	connections.push(ws);
	  // 受信部
	  ws.on('message', function(data){
	  	console.log("get massage");
	  	console.log(data)
		broadcast(data)
	  })
		
	  // var id = setInterval(function() {
	    // ws.send(JSON.stringify(new Date()), function() {  })
	  // }, 1000)
	
	
	  ws.on('close', function () {
	    connections = connections.filter(function (conn, i) {
	        return (conn === ws) ? false : true;
	    });
	    console.log("websocket connection close")
	    clearInterval(id)
	  });
})

function broadcast(message) {
    connections.forEach(function (con, i) {
        con.send(message);
    });
};
