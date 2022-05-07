// Recursion:

// Write a recursive function that given an input of 'n', sums all nonnegative integers up to n.
// 1. What is the simplest possible input?
// Base Case: sum(0) -> 0
// 2. Play with examples and visualize.
// ???
// 3. Relate hard cases to simpler cases.
//
// n = 0
// sum = n+sum(n-1)
function sum(n){
    // because this is a recursion problem we want to try this without using a for loop
    // for(i=0;i<=num;i++){
    //     n = n+i
    // }
    // handle negative inputs return 0 
    if (n<0) {
        return 0
    } else if (n<=1) { // handle 0 and 1
        console.log("final call", n)
        return n
    } else {
        console.log("continue recursion", n)
        return n + sum(n-1)
    }
};

var mySum = sum(3)

console.log(mySum)