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

// ________________________________________________________________
// 8. Center Inverted Triangle

// const centerInvertedTriangle = (limit) => {
// ________FIRST APPROACH________
// for(let i = 0; i < limit; i++) {
//     let spaces = '-'.repeat(i );
//     let stars = '*'.repeat( (limit * 2 - 2*i) - 1 );
//     console.log(spaces + stars + spaces)
// }

// ________SECOND APPROACH________
//  for (let i = 0; i < limit; i++) {
//       for (let j = 1; j <= limit * 2 - 1; j++) {
//            if ((j >= i + 1 && j <= (limit*2 - 1) - i) ) {
//                 process.stdout.write("*");
//            }
//            else process.stdout.write('_')
//       }
//       console.log();
//  }
// };
// centerInvertedTriangle(5);
// ________________________________________________________________

// ________________________________________________________________

// 9. Full Triangle Start

// const fullTriangleStar = (limit) => {

//     // ________FIRST APPROACH________
//      let k = 0;
//      for (let i = 0; i < limit * 2 ; i++) {
//           for (let j = 1; j <= limit * 2 - 1; j++) {
//                if (j >= limit - k && j <= limit + k) {
//                     process.stdout.write("*");
//                } else {
//                     process.stdout.write("-");
//                }
//           }

//           console.log();
//           i > limit - 2 ? k-- : k++;
//      }

//     //  ________SECOND APPROACH________

//     // for(let i = 0; i < limit * 2 - 1; ++i) {
//     //     let spaces =
//     // }
// };

// fullTriangleStar(5);
// ________________________________________________________________

// ________________________________________________________________

// 10. SideTriangle

// const sideTriangle = (limit) => {
// ________FIRST APPROACH________
// let k = 1;
// for(let i = 1; i <= limit * 2 - 1; i++) {
//     for(let j = 1; j <= limit; j++) {
//         if(j <= k) {
//             process.stdout.write('*')
//         }
//     }
//     console.log()
//     i >= limit ? k-- : k++;
// }
// };

//  ________SECOND APPROACH________

//  for (let i = 1; i <= limit * 2 - 1; i++) {
//       const stars = i >= limit ? limit* 2 - i : i;

//       console.log("*".repeat(stars));
//  }

// sideTriangle(5);
// ________________________________________________________________

// ________________________________________________________________
// 11. Print binary Numbers

// const printBinaryNumber = (n) => {
//      let start = 1;
//      for (let i = 0; i < n; i++) {
//           if (i % 2 === 0) start = 1;
//           else start = 0;
//           for (let j = 0; j <= i; j++) {
//                process.stdout.write(`${start} `);
//                start = 1 - start;
//           }
//           console.log();
//      }
// };
// printBinaryNumber(5);
// ________________________________________________________________

// ________________________________________________________________
// 12. Twelfth problem

// const twelfthProblem = (limit) => {
//      for (let i = 1; i <= limit; i++) {
//           let k = "";

//           for (let j = 1; j <= i; j++) {
//                k += j;
//                // console.log(k)
//           }

//           let spaces = (limit - i) * 2;
//           k += " ".repeat(spaces);
//           // console.log(spaces)

//           for (let j = i; j >= 1; j--) {
//                k += j;
//           }
//           console.log(k);
//      }
// };

// twelfthProblem(4);

// ____________________________________________

// ____________________________________________
// 13. Thirteenth Problem

// const ThirteenthProblem = (limit)=> {
//     let k = 0;

//     for(let i = 1; i <= limit; i++) {
//         for(let j = 1; j <= i; j++) {
//             k+=1
//             process.stdout.write(`${k} `)
//         }
//         console.log()
//     }
// }
// ThirteenthProblem(5)
// ____________________________________________

// ____________________________________________
// 14.
// const fourteenProblem = (limit) => {

//      for (let i = 1; i <= limit; i++) {
//           for (let j = 0; j < i; j++) {
//                const alphabet = String.fromCharCode(97 + j).toUpperCase();
//                process.stdout.write(`${alphabet} `);
//           }
//           console.log();
//      }

// };
// fourteenProblem(5);
// ____________________________________________

// ____________________________________________
// 15.
// const fifteenthProblem = (limit) => {
//     for (let i = 0; i < limit; i++) {
//          let alphabet = 0;
//           for (let j = limit - i; j >= 1; j--) {
//               let  new_alphabet = String.fromCharCode(97 + alphabet).toUpperCase();
//                process.stdout.write(`${ new_alphabet} `);
//                alphabet++;
//           }
//           console.log();
//      }
// };

// fifteenthProblem(5);
// ____________________________________________

// ____________________________________________
// 16.
// const sixTeenthProblem = (limit)=> {
//     for(let i = 0; i < limit; i++) {
//         let alphabeticController = 1;

//         for(let j = 0; j <=i; j++) {
//             process.stdout.write(String.fromCharCode(97 + i).toUpperCase())
//         }
//         console.log()
//     }
// }

// sixTeenthProblem(5)
// ____________________________________________

// ____________________________________________
// 17.
// const seventeenthProblem = (limit) => {
//      for (let i = 0; i < limit; i++) {
//           let alphabetController = 0;
//           for (let j = 1; j <= limit * 2 - 1; j++) {
//                if (j >= limit - i && j <= limit + i) {
//                     process.stdout.write(String.fromCharCode(97 + alphabetController).toUpperCase());
//                     if (j >= limit) alphabetController--;
//                     else alphabetController++;
//                } else {
//                     process.stdout.write("_");
//                }
//           }
//           console.log();
//      }
// };
// seventeenthProblem(4);
// ____________________________________________

// ____________________________________________
// 18.
// const eighteenthProblem = (limit)=> {
//     let k;
//     for(let i = 0; i < limit; i++) {
//         k = limit - i;
//         for(let j = 0; j <= i; j++) {
//             process.stdout.write(`${String.fromCharCode(64+k)} `)
//             k++;
//         }
//         console.log()
//     }
// }
// eighteenthProblem(5)
// ____________________________________________

// ____________________________________________
// 19.
// const nineteenthProblem = (limit) => {
//      let spaceController, stars;
//      for (let i = 0; i < limit; i++) {
//           for (let j = 1; j <= limit * 2; j++) {
//                if(i >= limit +2) {
//                 spaceController = "-".repeat(i * 2);
//                 stars = "*".repeat(limit - i);
//                }
//           }
//           console.log(`${stars}${spaceController}${stars}`);
//      }
// };
// nineteenthProblem(5);
// ____________________________________________

// ____________________________________________
// 20.
// const twenteethProblem = (limit) => {
//     const totalRows = limit * 2;

//     for (let i = 1; i <= totalRows - 1; i++) {
//         let row = '';
//         const stars = i <= limit ? i : totalRows - i + 1;
//         const spaces = totalRows - stars * 2;

//         for (let j = 1; j <= stars + spaces + stars; j++) {
//             if (j <= stars || j > stars + spaces) {
//                 row += '*';
//             } else {
//                 row += '-';
//             }
//         }
//         console.log(row);
//     }
// };

// twenteethProblem(5);
// ____________________________________________

// ____________________________________________
// 21.
// const twentyOne = (limit)=> {
//     for(let i = 1; i <= limit; i++) {
//         for(let j = 1; j <= limit; j++) {
//             if(i === limit || j=== limit || j===1 || i === 1) {
//                 process.stdout.write('* ')
//             }
//             else {
//                 process.stdout.write('- ')
//             }
//         }
//         console.log()
//     }
// }
// twentyOne(5)

// const twentyOne = (limit) => {
//     for (let i = 1; i <= limit; i++) {
//         let line = '';
//         for (let j = 1; j <= limit; j++) {
//             line += (i === 1 || i === limit || j === 1 || j === limit) ? '* ' : '- ';
//         }
//         console.log(line);
//     }
// };

// twentyOne(5);
// ____________________________________________

// ____________________________________________
// 22.

const printPattern = (n) => {
    const size = 2 * n - 1;

    for (let i = 0; i < size; i++) {
        let row = '';
        for (let j = 0; j < size; j++) {
            const min = Math.min(i, j, size - 1 - i, size - 1 - j);
            // console.log("row", row)
            row += (n - min) + ' ';
        }
        console.log(row);
    }
};

printPattern(4);

// ____________________________________________
