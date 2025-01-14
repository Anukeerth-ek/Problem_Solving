
import { findCorresspondingArraySquare } from "../problems/findCorrespondingArraySquare";

describe("Testing for finding the corresponding array square",()=> {
    test("Empty array test case",()=> {
        expect(findCorresspondingArraySquare([], [])).toBe(undefined)
    })  

    test("Different array size", ()=> {
        expect(findCorresspondingArraySquare([1, 2, 3, 4], [1, 2, 3, 0])).toBe([1, 4, 9, 0])
    })
})