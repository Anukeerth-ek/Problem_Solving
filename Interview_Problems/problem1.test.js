import handleSort from "./problems1";

describe('check the sorted array', ()=> {
    test('check the sample case', ()=> {
        expect(handleSort([10, 1, 2, 3, 20])).toStrictEqual([1, 2, 3, 10, 20])
    })
    test('checking some hard case', ()=> {
        expect(handleSort([1, 2, 1, 2, 90])).toStrictEqual([1, 1, 2, 2, 90])
    })
})