function add(a, b) {
	return a + b;
}

function subtract(a, b) {
	return a - b;
}

function sum(a) {
	if (a.length == 0) return 0;
	return a.reduce((acc, current) => acc + current);
}

function multiply(a) {
	if (a.length == 0) return 0;
	return a.reduce((acc, current) => acc * current);
}

function power(a, b) {
	return Math.pow(a, b);
}

function factorial(a) {
	let total = 1;
	while (a > 1) {
		total *= a;
		a--;
	}
	return total;
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
	power,
	factorial,
};
