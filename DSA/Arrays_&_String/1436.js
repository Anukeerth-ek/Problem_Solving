// You are given the array paths, where paths[i] = [cityAi, cityBi] means there exists a direct path going from cityAi to cityBi. Return the 
// destination city, that is, the city without any path outgoing to another city.
// It is guaranteed that the graph of paths forms a line without any loop, therefore, there will be exactly one destination city.

// ans:

var destCity = function(paths) {

    let destination;
    for(let i = 0; i < paths.length; i++) {
        const arrayLastIndex = paths[paths.length - 1];
        destination = arrayLastIndex[arrayLastIndex.length - 1]
    }
    return destination;
};

console.log(destCity([["London","New York"],["New York","Lima"],["Lima","Sao Paulo"]])) // Sao Paulo
console.log(destCity([["B","C"],["D","B"],["C","A"]])) // A
console.log(destCity([["A","Z"]])) // Z