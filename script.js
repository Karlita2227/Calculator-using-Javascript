let operations = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "/": (a, b) => a / b,
    "*": (a, b) => a * b,
    "**": (a, b) => a ** b,   
    "%": (a, b) => a % b,
};

function calculate() {
	// stores the first number entered's value in our JavaScript
	// while converting it to a decimal using parseFloat()
	let num1 = parseFloat(document.getElementById("num1").value);
	// stores the second number entered's value in our JavaScript
	// while converting it to a decimal using parseFloat()
	let num2 = parseFloat(document.getElementById("num2").value);
	// stores the mathematical operator we've selected from the dropdown menu
	let operator = document.getElementById("operations").value;


	let result;

	
    if (isNaN(num1) || isNaN(num2)) {
	
        result = "Enter a valid number";
    } else {

        result = operations[operator](num1, num2);
    }


	// we then change that within our HTML using innerText
	document.getElementById("result").innerText = "Result: " + result;
}
