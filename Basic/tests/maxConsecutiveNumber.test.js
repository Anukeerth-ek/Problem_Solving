// import { getMaxConsecutiveOnes } from "../problems/maxConsecutiveNumber";

// describe("find max consecutive Ones", () => {
//      test("checking with 3 ones", () => {
//           expect(getMaxConsecutiveOnes([1, 1, 2, 3, 4, 1, 1, 1])).toBe(3);
//      });

//      test("checking with 2 ones", () => {
//           expect(getMaxConsecutiveOnes([1, 2, 2, 3, 4, 5, 1, 1])).toBe(2);
//      });
//      test("checking with 4 ones", () => {
//           expect(getMaxConsecutiveOnes([1, 1, 2, 3, 1, 1, 1, 1])).toBe(4);
//      });
//      test("checking with full ones", () => {
//           expect(getMaxConsecutiveOnes([1, 1, 1, 1, 1, 1, 1, 1])).toBe(8);
//      });
//      test('Simple case', () => {
//         expect(getMaxConsecutiveOnes([1, 1, 0, 1, 1, 1])).toBe(3);
//       });
    
//       test('Single element (1)', () => {
//         expect(getMaxConsecutiveOnes([1])).toBe(1);
//       });
    
//       test('Single element (0)', () => {
//         expect(getMaxConsecutiveOnes([0])).toBe(0);
//       });
    
//       test('No 1s in the array', () => {
//         expect(getMaxConsecutiveOnes([0, 0, 0, 0])).toBe(0);
//       });
    
//       test('All 1s in the array', () => {
//         expect(getMaxConsecutiveOnes([1, 1, 1, 1])).toBe(4);
//       });
    
//       test('Mixed case with single 1s', () => {
//         expect(getMaxConsecutiveOnes([0, 1, 0, 1, 0])).toBe(1);
//       });
    
//       test('Multiple streaks of 1s', () => {
//         expect(getMaxConsecutiveOnes([1, 1, 0, 1, 0, 1, 1, 1])).toBe(3);
//       });
    
//       test('Empty array', () => {
//         expect(getMaxConsecutiveOnes([])).toBe(0);
//       });
    
//       test('Edge case with large input', () => {
//         expect(getMaxConsecutiveOnes([1, 1, 0, 1, 1, 1, 1, 0, 0, 1, 1])).toBe(4);
//       });
    
//       test('Alternating 1s and 0s', () => {
//         expect(getMaxConsecutiveOnes([1, 0, 1, 0, 1, 0, 1])).toBe(1);
//       });
// });
