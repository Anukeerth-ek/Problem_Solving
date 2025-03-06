// You are given an array of strings names, and an array heights that consists of distinct positive integers. Both arrays are of length n.

// For each index i, names[i] and heights[i] denote the name and height of the ith person.

// Return names sorted in descending order by the people's heights.

// ans

var sortPeople = function (names, heights) {
     let resultArr = [];

     const arrayLength = names.length;
     for (let i = 0; i < arrayLength; i++) {
          resultArr[names[i]] = heights[i];
     }
     const sortedResult = resultArr.sort()
     console.log(resultArr)

     const finalResult = Object.values(sortedResult);
    return finalResult;
};

sortPeople(["Mary", "John", "Emma"], [180, 165, 170])


















































































































