// Return the factorial of a given number
// !5 aka 5 * 4 * 3 * 2 * 1
// Base = calcFactorial(1)
// calcFactorial = d * calcFactorial(d-1)

int calcFactorial (int d) {
    if (d == 1){
        return d;
    }
    return d * calcFactorial(d-1);
}
var factorial = calcFactorial(5);
System.Console.WriteLine(factorial);