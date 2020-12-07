const palindromes = function (word) {
	word = word.toLowerCase();
	word = word.replaceAll(' ', '');
	word = word.replaceAll(',', '');
	word = word.replaceAll('!', '');
	word = word.replaceAll('.', '');

	let reversedWord = [...word].reverse().join('');

	return reversedWord === word;
};

module.exports = palindromes;
