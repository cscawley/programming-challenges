﻿
// Write a program that prints the numbers from 1 to 100. But for multiples of three
// print "Fizz" instead of the number and for the multiples of five print "Buzz". For
// numbers which are multiples of both three and five print "FizzBuzz".
void FizzBuzz(){
    for(int i = 1; i <= 100; i++){
        if((i%3)==0){
            System.Console.WriteLine("Fizz");
        }else if((i%5)==0){
            System.Console.WriteLine("Buzz");
        }else if((i%3)==0 && (i%5)==0){
            System.Console.WriteLine("FizzBuzz");
        }else{
            System.Console.WriteLine(i);
        }
    }
}
FizzBuzz();