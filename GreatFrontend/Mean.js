// Implement a function mean(array) that returns the mean (also known as average) of the values inside array, which is an array of numbers.

// Arguments
// array (Array): Array of numbers.
// Returns
// (Number): Returns the mean of the values in array.

// Examples

// mean([4, 2, 8, 6]); // => 5
// mean([1, 2, 3, 4]); // => 2.5
// mean([1, 2, 2]); // => 1.6666666666666667
// The function should return NaN if array is empty.

// mean([]); // => NaN

const findMean = (arr) => {
    
    const sum = arr.reduce((acc, num)=> acc + num, 0)

    return sum / arr.length
}

console.log(findMean([4, 2, 8, 6]))
console.log(findMean([1, 2, 3, 4]))
console.log(findMean([1, 2, 2]))
