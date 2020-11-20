const reverseString = function (string) {
    let reversedString = "";
    let letterCounter = string.length;

    while (letterCounter > 0) {
        reversedString += string.slice(letterCounter - 1, letterCounter);
        letterCounter--;
    }

    return reversedString;
};

module.exports = reverseString;
