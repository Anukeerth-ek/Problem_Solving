// Problem: Given 2 arrays that are sorted [0,3,4,31] and [4,6,30]. Merge them and sort [0,3,4,4,6,30,31]

const handleMergeSortedArray = (arr1, arr2) => {
     const mergeArray = [...arr1, ...arr2];

     const sortedArray = mergeArray.sort((first, second) => first - second);

     return sortedArray;
};
console.log(handleMergeSortedArray([1, 5, 9], [2, 6, 10]));

export { handleMergeSortedArray };
