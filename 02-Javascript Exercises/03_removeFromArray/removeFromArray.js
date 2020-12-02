const removeFromArray = function (
    array,
    removeThis1,
    removeThis2,
    removeThis3,
    removeThis4
) {
    if (arguments.length >= 2) {
        if (array.indexOf(removeThis1) != -1) {
            array.splice(array.indexOf(removeThis1), 1);
        }
    }
    if (arguments.length >= 3) {
        if (array.indexOf(removeThis2) != -1) {
            array.splice(array.indexOf(removeThis2), 1);
        }
    }
    if (arguments.length >= 4) {
        if (array.indexOf(removeThis3) != -1) {
            array.splice(array.indexOf(removeThis3), 1);
        }
    }
    if (arguments.length >= 5) {
        if (array.indexOf(removeThis4) != -1) {
            array.splice(array.indexOf(removeThis4), 1);
        }
    }
    return array;
};
module.exports = removeFromArray;
