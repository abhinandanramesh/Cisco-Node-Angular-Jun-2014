var webSocketModule = require("nodejs-websocket");
var wsServer = webSocketModule.createServer(function(connection){
	connection.on("text",(function(){
		var timer;
		return function(msg){
			if (msg === "time"){
				console.log(msg);
				timer = setInterval(function(){
					console.log("timeSent");
					connection.sendText(new Date().toString());
				},5000);
				console.log(timer);
			}
			if (msg === "stop"){
				clearInterval(timer);
				connection.sendText("timer stopped");
				console.log(timer);
			}
		};
	})());
});
wsServer.listen(9090);
console.log("the web socket server is listening on port 9090");