// reminder: this function generates a random number betweeen 50 and 88, inclusive of both min & max inputs.
function getRandom(min, max) {
    return Math.random() * (max - min) + min
}

console.log(getRandom(50, 88))

module.exports = getRandom;