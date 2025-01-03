import { calculateFactorial } from "../problems/factorial";

describe('calculating factorials of a number', ()=> {
    test('checking with 2 digit number', ()=> {
        expect(calculateFactorial(10)).toBe(3628800)
    })
    test('checking with large number', ()=> {
        expect(calculateFactorial(12)).toBe(479001600)
    })
})