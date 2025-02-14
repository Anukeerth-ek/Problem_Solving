// 599. Given two arrays of strings list1 and list2, find the common strings with the least index sum.

// A common string is a string that appeared in both list1 and list2.

// A common string with the least index sum is a common string such that if it appeared at list1[i] and list2[j] then i + j should be the minimum value
//  among all the other common strings.

// Return all the common strings with the least index sum. Return the answer in any order.

// ans:

var findRestaurant = function (list1, list2) {
     let newArr = [];
     let largeList;
     if (list1 > list2) largeList = list1;
     else return (largeList = list2);

     console.log("large", largeList, list1, list2)
};

console.log(
     findRestaurant(
          ["Shogun", "Tapioca Express", "Burger King", "KFC"],
          ["Piatti", "The Grill at Torrey Pines", "Hungry Hunter Steakhouse", "Shogun"]
     )
);
