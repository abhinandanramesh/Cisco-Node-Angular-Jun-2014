var calculate = function(){
		var gross = this.basic + this.hra + this.da;
		var net = gross * ((100-this.tax)/100);
		this.salary = net;
	}
function SalaryCalculator(){
	this.basic = this.hra = this.da = this.tax = this.salary = 0;
	this.process = calculate;
}
