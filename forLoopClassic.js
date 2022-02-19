//iterative solution, traversing through integers
function iterativeSolutionDemo() {

    var collector = 0

    for (i = 0; i < 9; i+= 3) {

       collector += i 
    
       console.log("local scope --> ", collector)
    
    }
    console.log("global scope: ", collector)
}

console.log(iterativeSolutionDemo(10000))

module.exports = iterativeSolutionDemo;