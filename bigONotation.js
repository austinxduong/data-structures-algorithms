const whatEvenIsBigONotation = 'a way to measure effciency, a way to rate a data structure';
console.log(whatEvenIsBigONotation);
// a way to measure effciency, a way to rate a data structure

function theEffciencyAndTheRatingOfWhat() {
    const effciencyOfThese4ThingsInADataStructure = ['acessing', 'searching', 'inserting', 'deleting'];

    if(true) {
        return console.log("how the data structure is .... ", `${effciencyOfThese4ThingsInADataStructure}`)
    }
}
theEffciencyAndTheRatingOfWhat();
// how the data structure is ....  acessing,searching,inserting,deleting.
// *sidenote.... in turn this helps us determine which data structure is "good" at what, or "bad" at what.

function butHowDoesBigONotationActuallyMeasureTheseFourThings() {
    const timeComplexityEquation = 'Time Complexity equation. This is 1 way "how" BigO measures the efficieny of these 4 things';

    if(true) {
        return console.log(`${timeComplexityEquation}`)
    }
}
butHowDoesBigONotationActuallyMeasureTheseFourThings();
// Time Complexity equation. This is 1 way BigO measures the efficieny of these 4 things.
// O() <---- this is what "BigO Time Complexity Equation" looks like.
// "O" <-- represents "growth rate", of the function.
// O(22) <-- this means it takes 22 operations (steps), the computer must run (for the function to finish executing). This is pronounced as "O of 22".
// 0(1) <--- this would be considered the "best" data structure, rating wise. It only takes 1 operation (step) to execute a function, no matter the size our our data set.
// ie. we can have an array of 1 element, or 222,222 elements, but it only takes 1 operation (step), for the function to execute.
// O(1) <-- is what we call "constant-time algorithm". it runs in "constant time"

// BigO notation also commonly has an "n", representing our the size of our dataset. For example, the number of elements within an array. 
// ie. const bigOArray= [1, 2, 3]
// n = 3 <--- the size of our dataset. the length of array to be looped through.
// O(n) <-- since "n" represents the size of our dataset, the size is how many operations(steps) it will loop through our data.
// from what I'm understanding... generally speaking if we see a loop. we pronounce this as it having a "run time of O(n)"
// a real-life analogy = if I take 22 steps on break, it will take me 22 minutes (not really true tho in this case lol)
// O(n) is what we call "linear-time algorithm". it runs in "linear time". as the dataset size grows, efficieny decreases, because processing time increases. so bigger, is not so much better....