var http = require("http");
var path = require("path");
var url = require("url");
var fs = require("fs");
var qs = require("querystring");

function requestListener(req,res){
	var urlObj = url.parse(req.url);
	var filePath = (path.join(__dirname, urlObj.pathname));

	if (fs.existsSync(filePath)){
		var resultObj = {
			number1 : 0,
			number2 : 0,
			result : 0
		};
	
		if (urlObj.query){
			var qsObj = qs.parse(urlObj.query);
			resultObj.number1 = parseInt(qsObj.number1,10);
			resultObj.number2 = parseInt(qsObj.number2,10);
			resultObj.result = resultObj.number1 + resultObj.number2;
		}
		fs.readFile(filePath,{encoding : "utf8"}, function(err,fileContents){
			if (!err){
				res.end(fileContents.replace("{number1}",resultObj.number1).replace("{number2}", resultObj.number2).replace("{result}", resultObj.result));
			} else {
				res.statusCode = 500;
				res.end();	
			}
			
		});
	} else {
		res.statusCode = 404;
		res.end();
	}

}
var server = http.createServer(requestListener);
server.listen(8080);
console.log("Server listening on port 8080..!!!");