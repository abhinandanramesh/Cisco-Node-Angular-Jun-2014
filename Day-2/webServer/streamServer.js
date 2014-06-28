var http = require("http");
var path = require("path");
var url = require("url");
var fs = require("fs");
var qs = require("querystring");

function requestListener(req,res){
	var urlObj = url.parse(req.url);
	var filePath = (path.join(__dirname, urlObj.pathname));
	if (fs.existsSync(filePath)){
		/*fs.readFile(filePath,{encoding : "utf8"},function(err,data){
			res.write(data);
			res.end();
		});*/
		var stream = fs.createReadStream(filePath, {encoding : "utf8"});
		/*var readCount = 0;
		stream.on("data",function(data){
			++readCount;
			res.write(data);
		});
		stream.on("end",function(){
			console.log(readCount);
			res.end();
		});
		stream.on("error",function(){
			res.statusCode = 500;
			res.end();
		})*/
		stream.pipe(res);

	}
}
var server = http.createServer(requestListener);
server.listen(8080);
console.log("Server listening on port 8080..!!!");