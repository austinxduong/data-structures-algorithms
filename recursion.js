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
/*--------------------------------------------------------------------- */
  

//iterative solution, traversing through integers
function iterativeSolutionDemo() {

    var collector = 0

    for (i = 0; i < 9; i+= 3) {

       collector += i 
    
       console.log("local scope --> ", collector)
    
    }
    console.log("global scope: ", collector)
}

console.log(iterativeSolutionDemo())

//iterative solution, traversing through objects
function iterativeSolutionDemo2() {

    var objectsOfToys = { id: 1, name: 'ollie', talent: 'flying', color:'green'}

    var elementStringCollector = [];

    for (const index in objectsOfToys) {

       elementStringCollector.push(index)
    
       console.log("local scope --> ", elementStringCollector)
    
    }
    console.log("global scope: ", elementStringCollector)
}


console.log(iterativeSolutionDemo2())


// reminder: this function generates a random number betweeen 50 and 88, inclusive of both min & max inputs.
function getRandom(min, max) {
    return Math.random() * (max - min) + min
}

console.log(getRandom(50, 88))