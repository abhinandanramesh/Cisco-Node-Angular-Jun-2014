var http = require("http");
var path = require("path");
var url = require("url");
var fs = require("fs");
var qs = require("querystring");

function requestListener(req,res){
	var urlObj = url.parse(req.url);
	var filePath = (path.join(__dirname, urlObj.pathname));

	if (fs.existsSync(filePath)){
		console.log(qs.parse(urlObj.query));
		fs.readFile(filePath,{encoding : "utf8"}, function(err,data){
			res.write(data);
			res.end();
		});
	} else {
		res.statusCode = 404;
		res.end();
	}

}
var server = http.createServer(requestListener);
server.listen(8080);
console.log("Server listening on port 8080..!!!");