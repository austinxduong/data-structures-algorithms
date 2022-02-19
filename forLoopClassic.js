//iterative solution, traversing through integers
function iterativeSolutionDemo() {

    // we start at 0, and keep iterating by 3, until 22 is met. 
    // 

    for (i = 0; i < 22; i+=3) {
    
       console.log(i) 
        
    }   

    return i;
    console.log(i)
}
iterativeSolutionDemo()


// function iterativeSolutionDemo(num) {

//     var collector = 0

//     for (i = 0; i < 9; i+= 3) {

//        collector += i 
    
//        console.log("local scope --> ", collector)
    
//     }
//     console.log("global scope: ", collector)
// }

// console.log(iterativeSolutionDemo())

module.exports = iterativeSolutionDemo