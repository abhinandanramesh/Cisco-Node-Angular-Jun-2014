var fs = require('fs');
if (fs.existsSync('data.txt')){
	var data = fs.readFileSync('data.txt', {encoding : "utf8"});
	console.log(data);
} else {
	console.log("file doesnot exist.");
}
