const repeatString = function (string, repeatTimes) {
    if (repeatTimes < 0) return "ERROR";

    let repeatedString = "";
    let counter = 0;

    while (counter != repeatTimes) {
        repeatedString += string;
        counter++;
    }

    return repeatedString;
};

module.exports = repeatString;
