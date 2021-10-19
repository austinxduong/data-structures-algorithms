// For-loops; what are they? 
// a statement, a code block keeps running repeadedly ("iterates/loops"), until a "condition is met". until the condition is a "falsey"

for (let i = 0; i < 4; i++) {
    console.log('lets loop 4 times');
}
// lets loop 4 times
// lets loop 4 times
// lets loop 4 times
// lets loop 4 times

// i = represents the "index"
// 4 = represents the "condition"
// i++ = is our "incrementer"

// this reads, starting at index 0, if index is below 4, keep incrementing
/*

for (starting at index 0; if index is below 4; keep incrementing) 
    console.log('lets loop 4 times');
    } 

*/

for (let i = 0; i < 4; i++) {
    console.log('lets loop 4 times' + i);
}
/*  
lets loop 4 times0
lets loop 4 times1
lets loop 4 times2
lets loop 4 times3 
*/

// we can see the their indentified indexes

// we can use "break", to stop at specicfic index, like so:

for (let i = 0; i <4 ; i++ ) {
    console.log("loop 4 times, buttt wait. lets stop at a specific index" + ' ' + i);
    if (i === 2) break;
}

/*
loop 4 times, buttt wait. lets stop at a specific index 0
loop 4 times, buttt wait. lets stop at a specific index 1
loop 4 times, buttt wait. lets stop at a specific index 2
*/

// looping through an array of strings
// we replace i<5 with "iceCream.length"
const iceCream = ['strawberry', 'half baked', 'oreo', 'peanut butter', 'classic vanilla'];

for (i = 0; i < iceCream.length; i++) {
    console.log(iceCream[i] + ' ' + i);
}

/*
strawberry 0
half baked 1
oreo 2
peanut butter 3
classic vanilla 4
*/

// we can decontruct the iceCream array 
// to do that, we just assign a new variable name "from" the name of our array
// the caveat.... while there is less code written, the "for of" loop is much slower, than the classic for loop used above

const iceCream0 = ['strawberry', 'half baked', 'oreo', 'peanut butter', 'classic vanilla']; {

for (flavors of iceCream0) {
    console.log(flavors);
}
}

// "for in" loop, using an object of key/value pairs
const plant = {'name': 'stanley', 'type': 'plant', 'age': 2}

for (valueFromKey in plant) {
    console.log(plant[valueFromKey]);
}
// below, we just returned our value of the key, from the plant array
/*
stanley
plant
2
*/

// "continue" statement.
// "continue" statement skips the current specific iteration, doesn't print, and isn't counted in the iteration/loop

for (let i = 0; i < 22; i++) {
    if (i === 9) { continue; }
    console.log("hello im iterating: " + i);
  }
