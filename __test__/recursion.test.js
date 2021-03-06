const getRandom  = require ('../randomNumber');
const regexDemo = require ('../allAboutRegex')
const recursionPattern = require ('../recursion')
const iterativeSolutionDemo = require ('../forLoopClassic')


test('finds an integer between 50 and 88, including both inputs', () => {
    
    expect(getRandom(50, 88)).toBeGreaterThanOrEqual(50)
    expect(getRandom(50, 88)).toBeLessThanOrEqual(88)
});

test('finds all instances that match "austiMatch", and returns how many ', () => {
    expect(regexDemo("Hello is austiMatch here?, There should be two. See austiMatch :)")).toBe(2)
});

test('recursively decrements when an interger is passed in as argument', () => {
    expect(recursionPattern(-11)).toBe(0)
    expect(recursionPattern(-4)).toBe(0)
    expect(recursionPattern(0)).toBe(0)
    expect(recursionPattern(12)).toBe("Oops, type in a smaller number!")
    expect(recursionPattern(100)).toBe("Oops, type in a smaller number!")
});

test('increments by odd intergers, until condition is met, ', ()  => {
    const result = iterativeSolutionDemo();
    expect(result).toBe(24)
})