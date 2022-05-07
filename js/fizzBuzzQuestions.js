
// Write a program that prints the numbers from 1 to 100. But for multiples of three
// print "Fizz" instead of the number and for the multiples of five print "Buzz". For
// numbers which are multiples of both three and five print "FizzBuzz".

// Hint if struggling
// [1,2,3,...,100]
// Should last 5 minutes

function printFizzBuzz(){
    var FBarray = []
    for(i=1;i<=100;i++){
        if(i%3==0&&i%5==0){
          FBarray.push("FizzBuzz")
        }else
        if(i%3==0){
          FBarray.push("Fizz")
        }else
        if(i%5==0){
          FBarray.push("Buzz")
        }else{
        FBarray.push(i)
        }
    }
    console.log(FBarray)
}
printFizzBuzz()