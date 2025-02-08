
import findWords from "../Arrays/Keyboard_Row";

describe('Checking the sample case', ()=> {
    test('checking with small test case', ()=> {
        expect(findWords(['wire', 'angry', 'lad', 'Max', 'john', 'anu' ])).toStrictEqual(['wire', 'lad'])
    })

    test('checking with test case', ()=> {
        expect(findWords(['check', 'now', '', 'das'])).toStrictEqual( [ 'das'])
    })

    test('Edge case Testin', ()=> {
        expect(findWords(['again', 'now', 'anu', 'john', 'add', 'top', 'bmx'])).toStrictEqual(['add', 'top', 'bmx'])
    })
})