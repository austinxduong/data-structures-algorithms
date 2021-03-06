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
    console.log('classic--> lets loop 4 times' + i);
}
/*  
lets loop 4 times0
lets loop 4 times1
lets loop 4 times2
lets loop 4 times3 
*/
// we can see the their indentified indexes


// looping through an array of strings
// we replace i<5 with "iceCream.length"
const iceCream = ['strawberry', 'half baked', 'oreo', 'peanut butter', 'classic vanilla'];

for (i = 0; i < iceCream.length; i++) {
    console.log("iceCream.length-->",iceCream[i] + ' ' + i);
}
/*
strawberry 0
half baked 1
oreo 2
peanut butter 3
classic vanilla 4
*/

// "for-of" loops
// designed to loop/iterate through arrays
// we can decontruct the iceCream array 
// to do that, we just assign a new variable name "from" the name of our array
// the caveat.... while there is less code written, the "for of" loop is much slower, than the classic for loop used above
const iceCream0 = ['strawberry', 'half baked', 'oreo', 'peanut butter', 'classic vanilla']; {

    for (flavors of iceCream0) {
        console.log("for-of loop-->", flavors);
    }
}

// "for in" loops 
// designed to loop/iterate through objects
// can be used to loop through arrays, but "for-of loops" are designed for arrays
const plant = {'name': 'stanley', 'type': 'plant', 'age': 2}

for (valueFromKey in plant) {
    console.log("for-in loops-->",plant[valueFromKey]);
}
// below, we just returned our value of the key, from the plant array
/*
stanley
plant
2
*/

// "continue" statement.
// "continue" statement skips the current specific iteration, doesn't print, and isn't counted in the iteration/loop
// the output will show "1 less" in the output, since element 9 is removed

for (let i = 0; i < 22; i++) {
    if (i === 9) { continue; }
    console.log("continue--> hello im iterating: " + i);
  }
/*
hello im iterating: 0
hello im iterating: 1
hello im iterating: 2
hello im iterating: 3
hello im iterating: 4
hello im iterating: 5
hello im iterating: 6
hello im iterating: 7
hello im iterating: 8
hello im iterating: 10
hello im iterating: 11
hello im iterating: 12
hello im iterating: 13
hello im iterating: 14
hello im iterating: 15
hello im iterating: 16
hello im iterating: 17
hello im iterating: 18
hello im iterating: 19
hello im iterating: 20
hello im iterating: 21
*/

// "break" statement usually lives inside a conditional statement
// if the condition is met, the loops stops at the specific condition (element), and removes it self from the iteration.
for (let i = 0; i < 7; i++) {
    if( i === 3 ) { break };
    console.log("break at element 3, and get out of loop", i);
}

/*
break at element 3, and get out of loop 0
break at element 3, and get out of loop 1
break at element 3, and get out of loop 2
*/

// "break" statement, playing/practicing some more 
for (let i = 0; i <4 ; i++ ) {
    console.log("loop 4 times, buttt wait. lets break at a specific index" + ' ' + i);
    if (i === 2) break;
}
/*
loop 4 times, buttt wait. lets stop at a specific index 0
loop 4 times, buttt wait. lets stop at a specific index 1
loop 4 times, buttt wait. lets stop at a specific index 2
*/


