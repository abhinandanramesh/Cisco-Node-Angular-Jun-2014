function Task(name,isCompleted){
	this.id = new Date().getTime();
	this.name = name;
	this.isCompleted = isCompleted;
}
Task.prototype.toggleCompletion = function(){
	this.isCompleted = !this.isCompleted;
}
module.exports = Task;