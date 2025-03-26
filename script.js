let operations = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "/": (a, b) => a / b,
    "*": (a, b) => a * b,
    "**": (a, b) => a ** b,   
    "%": (a, b) => a % b,
    "=": (a, b) => a = b,
    "==": (a, b) => a == b,
    "===": (a, b) => a === b,
    "!=": (a, b) => a != b,
    ">": (a, b) => a > b,
    "<": (a, b) => a < b,
};

function calculate() {
	let num1 = parseFloat(document.getElementById("num1").value);
	let num2 = parseFloat(document.getElementById("num2").value);
        let operator = document.getElementById("operator").value;
	
	let result;
	
        if (isNaN(num1) || isNaN(num2)) {
	
            result = "Enter a valid number";
    } else {
        result = operations[operator](num1, num2);
	}
	
document.getElementById("result").innerText = "Result: " + result;
}
		
