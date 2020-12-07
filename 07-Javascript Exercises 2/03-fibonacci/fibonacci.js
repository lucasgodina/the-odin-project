const fibonacci = function (xth) {
	if (xth <= 0) return 'OOPS';
	let sequence = [1, 1];
	for (let i = 1; i < xth - 1; i++) {
		sequence.push(sequence[i] + sequence[i - 1]);
	}
	return sequence[xth - 1];
};

module.exports = fibonacci;
