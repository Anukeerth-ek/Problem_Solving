import { calculateFactorial } from "../problems/factorial";

describe('calculating factorials of a number', ()=> {
    test('checking with 2 digit number', ()=> {
        expect(calculateFactorial(10)).toBe(3628800)
    })
    test('checking with large number', ()=> {
        expect(calculateFactorial(12)).toBe(479001600)
    })
    test('checking with large number', ()=> {
        expect(calculateFactorial(15)).toBe(1307674368000)
    })
    test('checking with medium number', ()=> {
        expect(calculateFactorial(7)).toBe(5040)
    })
    test('checking with large number', ()=> {
        expect(calculateFactorial(20)).toBe(2432902008176640000)
    })
})