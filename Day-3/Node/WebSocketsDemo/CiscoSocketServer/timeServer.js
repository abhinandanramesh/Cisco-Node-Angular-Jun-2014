var webSocketModule = require("nodejs-websocket");
var timer;
var wsServer = webSocketModule.createServer(function(connection){
	connection.on("text",function(msg){
		if (msg === "time"){
			timer = setInterval(function(){
				connection.sendText(new Date().toString());
			},5000);
		}
		if (msg === "stop"){
			clearInterval(timer);
			connection.sendText("timer stopped");
		}
	});
});
wsServer.listen(9090);
console.log("the web socket server is listening on port 9090");