function recursionPattern(num) {
    // base case
    if(num <= 0) {
    return 0 
    } else {
    return "Oops, type in a smaller number!"
    // recursion execution
    return recursionPattern(num  - 1)
    console.log(recursionPattern)
    }}

    console.log(recursionPattern(-11))
/*--------------------------------------------------------------------- */
  module.exports = recursionPattern;

//iterative solution, traversing through objects
function iterativeSolutionDemo2() {

    var objectsOfToys = { id: 1, name: 'ollie', talent: 'flying', color:'green'}

    var elementStringCollector = [];

    for (const index in objectsOfToys) {

       elementStringCollector.push(objectsOfToys[index])
    
       console.log("local scope --> ", elementStringCollector)
    
    }
    console.log("global scope: ", elementStringCollector)
}


console.log(iterativeSolutionDemo2())


