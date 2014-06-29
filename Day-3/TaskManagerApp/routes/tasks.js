var express = require('express');
var router = express.Router();
var Task = require('../models/Task');

/* GET users listing. */
var tasksList = [
	new Task("Learn jQuery", false),
	new Task("Explore JavaScript", false)
];
router.get('/', function(req, res) {
	setTimeout(function(){
		res.statusCode = 500;
		res.end();
	},5000);
});

module.exports = router;
