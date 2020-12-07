const caesar = function (word, shift) {
	//convert string to array of ascii codes
	let wordAscii = [];
	for (let i = 0; i < word.length; i++) {
		wordAscii.push(word.charCodeAt(i));
	}

	//shift ascii codes, convert to chars, join array to string
	let cipher = [];
	for (let i = 0; i < wordAscii.length; i++) {
		//check if letter doesnt need to be converted
		if (!(wordAscii[i] == 32 || wordAscii[i] == 33 || wordAscii[i] == 44 || wordAscii[i] == 46)) {
			//Shifts Uppercase
			if (wordAscii[i] >= 65 && wordAscii[i] <= 90) {
				wordAscii[i] += shift;
				//positive shift wraps
				if (shift > 0) {
					while (wordAscii[i] > 90) {
						wordAscii[i] -= 26;
					}
				}
				//negative shift wraps
				if (shift < 0) {
					while (wordAscii[i] < 65) {
						wordAscii[i] += 26;
					}
				}
			}
			//Shifts Lowercase
			if (wordAscii[i] >= 97 && wordAscii[i] <= 122) {
				wordAscii[i] += shift;
				//positive shift wraps
				if (shift > 0) {
					while (wordAscii[i] > 122) {
						wordAscii[i] -= 26;
					}
				}
				//negative shift wraps
				if (shift < 0) {
					while (wordAscii[i] < 97) {
						wordAscii[i] += 26;
					}
				}
			}
		}
		cipher.push(String.fromCharCode(wordAscii[i]));
	}
	cipher = cipher.join('');
	return cipher;
};

module.exports = caesar;
