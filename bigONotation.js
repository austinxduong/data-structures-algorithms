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
// O(22) <-- this means it takes 22 operations (steps), the computer must run (for the function to finish executing). This is pronounced as "O of 22".
// 0(1) <--- this would be considered the "best" data structure, rating wise. It only takes 1 operation (step) to execute a function