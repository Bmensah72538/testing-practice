const caesar = require("./caesar")

test('Offsets a string',() => {
    expect(caesar('abc', 3)).toBe('def');
    expect(caesar('cat', 1)).toBe('dbu');
})

test('Offsets a string past z', () => {
    expect(caesar('xyz', 3)).toBe('abc');
})
