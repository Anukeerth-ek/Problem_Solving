// Problem: Given 2 arrays that are sorted [0,3,4,31] and [4,6,30]. Merge them and sort [0,3,4,4,6,30,31]

const handleMergeSortedArray = (arr1, arr2) => {
     const mergeArray = [...arr1, ...arr2];
    //  let newArr = [];
    //  for (let i = 0; i < mergeArray.length; i++) {
    //       for (let j = i + 1; j <= mergeArray.length; j++) {
    //            if (mergeArray[i] > mergeArray[j]) {
    //                 newArr.push(mergeArray[i]);
    //            } else {
    //                 continue
    //            }
    //       }
    //  }
    //  console.log("result", newArr);
    const sortedArray = mergeArray.sort((first, second)=> first - second)
    // console.log("sro", sortedArray)
    return sortedArray;
};
console.log(handleMergeSortedArray([1, 5, 9], [2, 6, 10]));

export {handleMergeSortedArray}