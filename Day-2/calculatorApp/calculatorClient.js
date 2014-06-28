var Calculator = require("./lib/Calculator");
var calc = new Calculator();
calc.add(10);
calc.add(20);
calc.subtract(5);
calc.subtract(15);
console.log(calc.result());