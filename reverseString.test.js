const reverseString = require("./reverseString.js")

test('Reverses string', () => {
    expect(reverseString('Hello world!')).toBe('!dlrow olleH')
})