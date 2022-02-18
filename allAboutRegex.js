// because i was asked on this during an interview once, and didnt know what I was doing.

// const REGEX = /austiMatch/

// const REGEX = /austiMatch/i 

const REGEX = /austiMatch/g

// const REGEX = /austiMatch/ig

function regexDemo(str) {
    return str.match(REGEX).length //<--- im using REGEX heheh
    
}

module.exports = regexDemo

console.log(regexDemo("where did austi go? was austiMatch found using REGEX?. A second austiMatch is found. This is s demo! Hiiiiii"))



