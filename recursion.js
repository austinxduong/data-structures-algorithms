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


  
    
  
        var collector = 0
        
        

        for (i = 0; i < 9; i+= 3) {
            
            collector += i
        }

console.log(collector);

function getRandom(min, max) {
    return Math.random() * (max - min) + min
}

console.log(getRandom(50, 88))