// Create a function which will accepts two arrays arr1 and arr2. The function should return true if every value in arr1 has its corresponding 
// value squared in array2. The frequency of values must be same.

const frequencySquaredMatch = (arr1, arr2)=> {
    console.log("arr1, arr2", arr1, arr2)
    // without es6 feature
    for(let i = 0; i < arr1.length; i++) {
        for(let j = i; j <= i; j++) {
            if(arr1[i]*arr1[i] === arr2[i])
                console.log("true", i, j)
        else if(arr1 === arr2) console.log("true")
        else console.log("false", i , j)
        }
    }

    // with es6 feature
    const duplicateArray = arr1
}

// console.log(frequencySquaredMatch([1, 2, 3, 4, 5], [1, 4, 9, 16, 25])) // true
// console.log(frequencySquaredMatch([-1, -2, 3], [1, 4, 9])); // true
console.log(frequencySquaredMatch([], []));// true
// console.log(frequencySquaredMatch([], [1, 4, 9])); // false
// console.log(frequencySquaredMatch([1, 2, 3, 3], [1, 4, 9, 16])); // false
// console.log(frequencySquaredMatch([4, 5, 6], [16, 25, 37])); // false

