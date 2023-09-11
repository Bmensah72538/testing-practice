const Calculator = require("./calculator.js")
const calculator = new Calculator();

test('Calculator add', function(){
    expect(calculator.add(2, 4)).toBe(6);
})

test('Calculator subtract', function(){
    expect(calculator.subtract(6, 3)).toBe(3);
})

test('Calculator multiply', function(){
    expect(calculator.multiply(2, 4)).toBe(8);
})

test('Calculator divide', function(){
    expect(calculator.divide(6, 3)).toBe(2);
})