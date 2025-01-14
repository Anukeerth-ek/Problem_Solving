// problem: Create a function which will accepts two arrays arr1 and arr2. The function should return true if every value in arr1 has its
// corresponding value squared in array2. The frequency of values must be same.

const findCorresspondingArraySquare = (arr, arr1) => {
    if(!arr.length || !arr1.length) {
        return undefined
    }
    // const mergedArry = [...arr, ...arr1]
    //  const firstArraySquare = mergedArry.map((item) => item * item);
    //  return firstArraySquare
    //  console.log(firstArraySquare);
    //  console.log(arr1);
    let flag
     for (let i = 0; i < arr1.length; i++) {
        if(arr1[i] === firstArraySquare[i]) {
            flag = true
        }
        else {
            return false

        }
     }
     return flag
};
console.log(findCorresspondingArraySquare([1, 2, 3, 4], [1, 2, 3, 0]))
// export {findCorresspondingArraySquare}
