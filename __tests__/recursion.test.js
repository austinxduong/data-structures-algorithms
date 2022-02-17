const getRandom  = require ('../recursion');

test('finds a integer between 50 and 88, including both inputs', () => {
    
    expect(getRandom(50, 88)).toBeGreaterThanOrEqual(50)
    expect(getRandom(50, 88)).toBeLessThanOrEqual(88)
});