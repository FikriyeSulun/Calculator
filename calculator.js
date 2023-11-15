function getResult(value) {
	document.getElementById("result").value += value;
}

function clearResult() {
	document.getElementById("result").value = "";
}

// function calculateResult() {
// 	var result = eval(document.getElementById("result").value);
// 	document.getElementById("result").value = result;
// }

function calculateResult() {
    var resultStr = document.getElementById("result").value;
    var resultArr = resultStr.split(/(\+|\-|\*|\/)/);
    var result = parseFloat(resultArr[0]);
    for (var i = 1; i < resultArr.length; i += 2) {
        var operator = resultArr[i];
        var operand = parseFloat(resultArr[i + 1]);
        if (operator === "+") {
            result += operand;
        } else if (operator === "-") {
            result -= operand;
        } else if (operator === "*") {
            result *= operand;
        } else if (operator === "/") {
            result /= operand;
        }
    }
    document.getElementById("result").value = result;
}

function getPercentage() {
    let result = document.getElementById('result').value;
    result = eval(result);
    document.getElementById('result').value = result / 100;
}

function toggleSign() {
    let result = document.getElementById('result').value;
    result = eval(result);
    document.getElementById('result').value = -1 * result;
}