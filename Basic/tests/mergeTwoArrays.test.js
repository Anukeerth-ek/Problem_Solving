import { handleMergeSortedArray } from "../problems/mergeTwoArrays"

describe("Merge and sort the array", ()=> {
    test('with sample test', ()=> {
        expect(handleMergeSortedArray([1, 5, 9], [2, 6, 10])).toEqual([1, 2, 5, 6, 9, 10])
    })
})