
const toFixed = require('./test04-toFixed.js');

    test('toFixed(123456.52,5)  to equals "123456.52000" )', () => {
    // Arrange
    var toBe =  "123456.52000";

    // Act
    var result = toFixed(123456.52,5);

    // Assert
    expect(result).toBe(toBe);
    });         


const toString = require('./test04-toString.js');

    test('toString(789) to equals "789" )', () => {
    // Arrange
    var expected = "789";

    // Act
    var result = toString(789);

    // Assert
    expect(result).toBe(expected);
    });
