// You are given an array of strings names, and an array heights that consists of distinct positive integers. Both arrays are of length n.

// For each index i, names[i] and heights[i] denote the name and height of the ith person.

// Return names sorted in descending order by the people's heights.

// ans

var sortPeople = function (names, heights) {
     let people = names.map((name, index) => ({ name: name, height: heights[index] }));
     const results = people.sort((a, b) => b.height - a.height);
     const finalResult = [];

     for (let result of results) {
          finalResult.push(result.name);
     }
     return finalResult;
};

sortPeople(["Mary", "John", "Emma"], [180, 165, 170]);
