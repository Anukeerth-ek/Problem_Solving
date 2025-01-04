// Problem: Given 2 arrays that are sorted [0,3,4,31] and [4,6,30]. Merge them and sort [0,3,4,4,6,30,31] 

const handleMergeSortedArray = (arr1, arr2)=> {
    const mergeArray = [...arr1, ...arr2];
    for(let i = mergeArray.length; i >= 0; i--) {
            console.log(mergeArray[i])
    }
    console.log(mergeArray)
}
console.log(handleMergeSortedArray([0,3,4,31], [4,6,30]))