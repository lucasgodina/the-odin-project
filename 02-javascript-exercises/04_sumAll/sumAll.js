const sumAll = function (initial, final) {
    if (initial < 0 || final < 0) return "ERROR";
    if (typeof initial != "number" || typeof final != "number") return "ERROR";
    let sum = 0;

    if (initial > final) {
        while (final <= initial) {
            sum += final;
            final++;
        }
        return sum;
    }

    if (initial <= final) {
        while (initial <= final) {
            sum += initial;
            initial++;
        }
        return sum;
    }
    return "ERROR";
};

module.exports = sumAll;
