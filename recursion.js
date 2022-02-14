function recursionPattern(num) {
    // base case
    if(num <= 0) {
    return "We made it back up to 0. Wheeww!!" 
    } else {
    return "Oops, type in a smaller number!"
    // recursion execution
    return recursionPattern(num  - 1)
    console.log(recursionPattern)
    }}

    console.log(recursionPattern(-11))
    