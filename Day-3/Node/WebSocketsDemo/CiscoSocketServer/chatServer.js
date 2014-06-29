var socketModule = require("nodejs-websocket");
var server = socketModule.createServer(function(con){
	con.on("text",function(msg){
		server.connections.forEach(function(c){
			c.sendText(msg);
		});
	});
}).listen(9090);
console.log("Chat server running on port 9090..");