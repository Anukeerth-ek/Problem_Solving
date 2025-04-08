// 1. Basic Start Pattern

// const printBasicPattern = (limit)=> {
//     let starLimit = '*'.repeat(limit)
//     for(let i = 0; i < limit; i++) {
//         process.stdout.write(starLimit)
//         console.log()
//     }
// }

// printBasicPattern(5)
// ________________________________________________________________

// 2. Second Star Pattern

// const printBasicStarPattern = (limit) => {
//      for (let i = 1; i <= limit; i++) {
//           process.stdout.write("* ".repeat(i));

//           console.log();
//      }
// };

// printBasicStarPattern(5);
// ________________________________________________________________

// 3. Third Number Pattern

// const printNumberPatter = (limit) => {
//      for (let i = 1; i <= limit; i++) {
//           let row = "";
//           for (let j = 1; j <= i; j++) {
//                row += j ;
//             //    console.log('row', row)
//             }
//             // console.log('seocnd row', row)
//             console.log(row.trim() );
//      }
// };

// printNumberPatter(5);
// ________________________________________________________________

// 4. Number Pattern Problem

// const printBasicNumberPattern = (limit) => {

// First Approach
// let sum = ''
//   for(let i = 1; i <= limit; i++) {
//      for(let j = 1; j <= i; j++) {
//         sum += i+''
//     }
//     console.log(sum.trim())
//     sum = ''
//   }

// Second Approach

//  for (let i = 1; i <= limit; i++) {
//       let limitController = i.toString();
//       process.stdout.write(limitController.repeat(i))
//       console.log()
//  }
// };
// printBasicNumberPattern(5);
// ________________________________________________________________

// 5. Inverted Triangle Start Pattern

// const invertedTriangleStart = (limit) => {
     // FIRST APPROACH
     //  for (let i = limit; i >= 1; --i) {
     //       for (let j = i; j >= 1; --j) {
     //            process.stdout.write("*");
     //       }
     //       console.log();
     //  }
     // SECOND APPROACH
     //  for (let i = limit; i >= 1; --i) {
     //       process.stdout.write("*".repeat(i));
     //       console.log();
     //  }

     // THIRD APPROACH
    //  if (limit < 1) return;

    //  process.stdout.write("* ".repeat(limit));
    //  console.log()
    //  invertedTriangleStart(limit - 1);
// };

// invertedTriangleStart(5);

// ________________________________________________________________

// 6. Inverted Triangle Start Pattern

// const invertedTriangleStart = (limit) => {
     
//     if(limit < 1) return;

//     let limitController = limit + '';
//     process.stdout.write(limitController.repeat(limit))
//     console.log()
//     invertedTriangleStart(limit - 1);
// };

// invertedTriangleStart(5);

// ________________________________________________________________

// 7. Center Triangle

// const centerTriangle = (limit)=> {
    // ________FIRST APPROACH________
    // for(let i = 0; i < limit ; i++) {
    //     for(let j = 1; j <= limit * 2 - 1; j++) {
    //         if(j >= limit - i && j <= limit + i || j === limit) {
    //             process.stdout.write('*')
    //         }
    //         else 
    //         process.stdout.write('_')
    //     }
    //     console.log()
    // }

    // ________SECOND APPROACH________
//     for(let i = 1; i <= limit; i++) {
//         let spaces = '-'.repeat(limit - i);
//         let stars = '*'.repeat(2 * i - 1);
//         console.log(`${spaces}${stars}${spaces}`)
//     }
// }
// centerTriangle(5)
// ________________________________________________________________
