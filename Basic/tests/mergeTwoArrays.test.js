import { handleMergeSortedArray } from "../problems/mergeTwoArrays"

describe("Merge and sort the array", ()=> {
    test('with sample test', ()=> {
        expect(handleMergeSortedArray([1, 5, 9], [2, 6, 10])).toEqual([1, 2, 5, 6, 9, 10])
    })

    test('with some hard test cases', ()=> {
        expect(handleMergeSortedArray([0, 0, 10, 100], [100, 10, 0, 0])).toEqual([0, 0, 0, 0, 10, 10, 100, 100])
    })


    test('Sort large list already sorted', () => {
        const sortedInput = Array.from({ length: 1000 }, (_, i) => i);
        expect(handleMergeSortedArray(sortedInput)).toEqual(sortedInput);
      });
    
      test('Sort large list with all same elements', () => {
        const largeInput = Array(1000).fill(100);
        expect(handleMergeSortedArray(largeInput)).toEqual(largeInput);
      });

})