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
/*for (starting at index 0; if index is below 4; keep incrementing) 
    console.log('lets loop 4 times');
    }*/

for (let i = 0; i < 4; i++) {
    console.log('lets loop 4 times' + i);
}
/*  lets loop 4 times0
    lets loop 4 times1
    lets loop 4 times2
    lets loop 4 times3 */

// we can see the their indentified indexes
