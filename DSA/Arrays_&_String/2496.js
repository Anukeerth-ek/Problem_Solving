
// The value of an alphanumeric string can be defined as:

// The numeric representation of the string in base 10, if it comprises of digits only.
// The length of the string, otherwise.
// Given an array strs of alphanumeric strings, return the maximum value of any string in strs.

// ans:

var maximumValue = function(strs) {
    let maxVal = 0;

    for (let str of strs) {
        if (/^\d+$/.test(str)) {  // If the string contains only digits
            maxVal = Math.max(maxVal, Number(str));
        } else {  // If it contains letters
            maxVal = Math.max(maxVal, str.length);
        }
    }

    return maxVal;
};