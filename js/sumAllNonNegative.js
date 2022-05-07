// Recursion:

// Write a recursive function that given an input n sums all nonnegative integers up to n.
// 1. What is the simplest possible input?
// Base Case: sum(0) -> 0
// 2. Play with examples and visualize.
// ???
// 3. Relate hard cases to simpler cases.
//
var n = 0
function sum(num){
    for(i=0;i<num;i++){
        n = n+i
    }
    console.log(n)
}
sum()