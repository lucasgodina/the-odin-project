const add = (a, b) => a + b;
const substract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

const display = document.querySelector('#display');
let total = 0;
display.textContent = '0';
let error = false;
let decimalValue = false;
let operated = false; //check, clear screen after operator input
let operator = '';

const numberButton = (number) => {
	if (error == false) {
		if (operated == true) {
			display.textContent = '';
			operated = false;
		}
		display.textContent == '0' ? (display.textContent = number) : (display.textContent += number);
		if (display.textContent.length > 10) {
			error = true;
			display.textContent = 'NO.LIMIT';
		}
	}
};
document.querySelector('#one').addEventListener('click', function () {
	numberButton('1');
});
document.querySelector('#two').addEventListener('click', function () {
	numberButton('2');
});
document.querySelector('#three').addEventListener('click', function () {
	numberButton('3');
});
document.querySelector('#four').addEventListener('click', function () {
	numberButton('4');
});
document.querySelector('#five').addEventListener('click', function () {
	numberButton('5');
});
document.querySelector('#six').addEventListener('click', function () {
	numberButton('6');
});
document.querySelector('#seven').addEventListener('click', function () {
	numberButton('7');
});
document.querySelector('#eight').addEventListener('click', function () {
	numberButton('8');
});
document.querySelector('#nine').addEventListener('click', function () {
	numberButton('9');
});

document.querySelector('#zero').addEventListener('click', function () {
	if (error == false) {
		if (operated == true) {
			display.textContent = '';
		}
		if (display.textContent != '0') {
			display.textContent += '0';
		}
		if (display.textContent.length > 10) {
			error = true;
			display.textContent = 'NO.LIMIT';
		}
	}
});

document.querySelector('#clear').addEventListener('click', function () {
	total = 0;
	display.textContent = '0';
	error = false;
	decimalValue = false;
	operated = false;
	operator = '';
});

document.querySelector('#decimal').addEventListener('click', function () {
	if (error == false) {
		if (decimalValue == false) {
			display.textContent += '.';
			decimalValue = true;
		}
	}
	if (display.textContent.length > 10) {
		error = true;
		display.textContent = 'NO.LIMIT';
	}
});

const operate = () => {
	if (operator == '') {
		total = parseFloat(display.textContent);
	}
	if (operator == '+') {
		total = add(total, parseFloat(display.textContent));
		total = Math.round(total * 10) / 10;
	}
	if (operator == '-') {
		total = substract(total, parseFloat(display.textContent));
		total = Math.round(total * 10) / 10;
	}
	if (operator == '*') {
		total = multiply(total, parseFloat(display.textContent));
		total = Math.round(total * 10) / 10;
	}
	if (operator == '/') {
		if (display.textContent == '0') {
			error = true;
			display.textContent = 'ERROR';
		} else {
			total = divide(total, parseFloat(display.textContent));
			total = Math.round(total * 10) / 10;
		}
	}
	display.textContent = total;
};
document.querySelector('#add').addEventListener('click', function () {
	if (error == false) {
		operate();
		if (display.textContent.length > 10) {
			error = true;
			display.textContent = 'NO.LIMIT';
		}
		operator = '+';
		operated = true;
		decimalValue = false;
	}
});
document.querySelector('#minus').addEventListener('click', function () {
	if (error == false) {
		operate();
		if (display.textContent.length > 10) {
			error = true;
			display.textContent = 'NO.LIMIT';
		}
		operator = '-';
		operated = true;
		decimalValue = false;
	}
});
document.querySelector('#multiply').addEventListener('click', function () {
	if (error == false) {
		operate();
		if (display.textContent.length > 10) {
			error = true;
			display.textContent = 'NO.LIMIT';
		}
		operator = '*';
		operated = true;
		decimalValue = false;
	}
});
document.querySelector('#divide').addEventListener('click', function () {
	if (error == false) {
		operate();
		if (display.textContent.length > 10) {
			error = true;
			display.textContent = 'NO.LIMIT';
		}
		operator = '/';
		operated = true;
		decimalValue = false;
	}
});
document.querySelector('#equals').addEventListener('click', function () {
	if (error == false) {
		if (operator == '/' && display.textContent == '0') {
			error = true;
			display.textContent = 'ERROR';
		} else {
			operate();
			operator = '';
			operated = true;
			decimalValue = false;
			if (display.textContent.length > 10) {
				error = true;
				display.textContent = 'NO.LIMIT';
			}
		}
	}
});
