const getRandom  = require ('../recursion');
const regexDemo = require ('../allAboutRegex')

test('finds a integer between 50 and 88, including both inputs', () => {
    
    expect(getRandom(50, 88)).toBeGreaterThanOrEqual(50)
    expect(getRandom(50, 88)).toBeLessThanOrEqual(88)
});

test('finds all instances that match /"austiMatch/", and returns how many ', () => {
    expect(regexDemo("Hello is austiMatch here?, There should be two. See austiMatch :)")).toBe(2)
})