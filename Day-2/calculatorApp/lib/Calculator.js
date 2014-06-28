function Calculator(){
	var result = 0;
	this.add = function(n){
		result += n;
	};
	this.subtract = function(n){
		result -= n;
	};
	this.result = function(){
		return result;
	};
	this.reset = function(){
		result = 0;
	}
}
function SciCalculator(){
	this.sine = function(){
		console.log("sine invoked")
	}
}
module.exports = {
	Calculator : Calculator,
	SciCalculator : SciCalculator
};
