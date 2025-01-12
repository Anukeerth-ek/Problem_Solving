
import { findCorresspondingArraySquare } from "../problems/findCorrespondingArraySquare";

describe("Testing for finding the corresponding array square",()=> {
    test("Empty array test case",()=> {
        expect(findCorresspondingArraySquare([], [])).toBe(undefined)
    })  
})