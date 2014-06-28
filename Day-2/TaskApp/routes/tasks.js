var express = require('express');
var router = express.Router();

/* GET users listing. */

var tasks = [];

router.get('/', function(req, res) {
  res.render("tasks/index",{title : "Task Management", tasks : tasks});
});

router.get('/toggle', function(req, res) {
  var taskId = parseInt(req.query.id,10);
  var task = tasks.filter(function(t){ return t.id === taskId})[0];
  task.isCompleted = !task.isCompleted;
  res.render("tasks/index",{title : "Task Management", tasks : tasks});
});

router.post('/', function(req, res) {
  if (req.body.btnOperation === "Add Task"){
  	var taskName = req.body.taskName;
	  var newId = tasks.reduce(function(seed, task){ return seed > task.id ? seed : task.id }, 0) + 1;
	  var newTask = {
	  	id : newId,
	  	name : taskName,
	  	isCompleted : false
	  };
	  tasks.push(newTask);
	} else {
		for(var i=tasks.length	-1	;i>=0;i--)
			if (tasks[i].isCompleted)
				tasks.splice(i,1);
	}
  res.render("tasks/index",{tasks : tasks, message : "A new task is successfully added"});
});

module.exports = router;
