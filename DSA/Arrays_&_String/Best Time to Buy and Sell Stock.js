// // You are given an array prices where prices[i] is the price of a given stock on the ith day.

// // You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// // Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

// // Example 1:

// // Input: prices = [7,1,5,3,6,4]
// // Output: 5
// // Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// // Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
// // Example 2:

// // Input: prices = [7,6,4,3,1]
// // Output: 0
// // Explanation: In this case, no transactions are done and the max profit = 0.

// // Constraints:

// // 1 <= prices.length <= 105
// // 0 <= prices[i] <= 104

// // ans:

// // const handleMaxProfile = (prices) => {
// //      let stockBUy = 0;
// //      let stockSell = 0;
// //      let broughtIndex = 0;
// //      for (let i = 0; i < prices.length; i++) {
// //           if (stockBUy === 0) {
// //                if (prices[i] < prices[i + 1]) {
// //                     stockBUy = prices[i];
// //                     broughtIndex = 0;
// //                } else {
// //                     stockBUy = prices[i + 1];
// //                     broughtIndex = 1;
// //                }
// //           }
// //      }

// //      if (stockBUy !== 0) {
// //           for (let i = broughtIndex + 1; i < prices.length; i++) {
// //                if (prices[i] > prices[i + 1]) {
// //                     stockSell = prices[i];
// //                }
// //           }
// //      }

// //      if (stockBUy > stockSell) return 0;
// //      else return stockSell - stockBUy;
// // };

// // console.log(handleMaxProfile([7,6,4,3,1]));



// // const handleMaxProfile = (prices) => {
// //     // 1. Handle edge cases: If prices array is empty or has only one element, no profit can be made.
// //     if (!prices || prices.length < 2) {
// //         return 0;
// //     }

// //     // Initialize stockBUy to the first day's price. This assumes we might buy on day 0.
// //     // This variable will now track the 'minimum price seen so far'.
// //     let stockBUy = prices[0]; // This is now our 'minPrice' tracker
// //     let maxOverallProfit = 0; // This will store the maximum profit found across all buy/sell pairs.

// //     // Iterate through the prices starting from the second day (index 1)
// //     // because we've already considered prices[0] as a potential buy point.
// //     for (let i = 1; i < prices.length; i++) {
// //         const currentPrice = prices[i]; // The price on the current day

// //         // Calculate the profit if we were to buy at the lowest price seen so far (stockBUy)
// //         // and sell at the current price (currentPrice).
// //         let currentPotentialProfit = currentPrice - stockBUy;

// //         // Update maxOverallProfit if the current potential profit is higher.
// //         // This effectively finds the maximum difference (sell - buy) encountered.
// //         if (currentPotentialProfit > maxOverallProfit) {
// //             maxOverallProfit = currentPotentialProfit;
// //         }

// //         // If the current price is lower than our current 'stockBUy' (minPrice),
// //         // then this current price becomes our new best potential buying point for future days.
// //         if (currentPrice < stockBUy) {
// //             stockBUy = currentPrice;
// //         }
// //     }
// //     // After iterating through all prices, maxOverallProfit will hold the greatest profit.
// //     return maxOverallProfit;
// // };
// // console.log(handleMaxProfile([7, 6, 4, 3, 1])); // Expected: 0 (Correctly handled by the fixed logic)
// // console.log(handleMaxProfile([7, 1, 5, 3, 6, 4])); // Expected: 5
// // console.log(handleMaxProfile([2, 4, 1]));       // Expected: 2
// // console.log(handleMaxProfile([1, 2]));           // Expected: 1
// // console.log(handleMaxProfile([3, 3, 5, 0, 0, 3, 1, 4])); // Expected: 4
// // console.log(handleMaxProfile([]));               // Expected: 0
// // console.log(handleMaxProfile([1]));              // Expected: 0




// function merge(nums1, m, nums2, n) {
  
//  let splittedNum1 = nums1.slice(0, m)
//  let splittedNum2 = nums2.slice(0, n)
//  let mergedArray = [...splittedNum1, ...splittedNum2]
//   let resultArr = []

//   for(let i = 0; i < m+n; i++) {
//     resultArr.push(mergedArray[i])
//   }
// //   console.log('result', resultArr.sort())

// return resultArr.sort()
// }

// console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 3, 4], 3))
// console.log(merge([1], 1, [], 0))
// console.log(merge([0], 0, [1], 1))