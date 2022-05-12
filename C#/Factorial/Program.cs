// Return the factorial of a given number
// !5 aka 5 * 4 * 3 * 2 * 1
// Base = calcFactorial(1)
// calcFactorial = d * calcFactorial(d-1)
// consider INT can't store numbers high enough to calculate a factorial larger than 12
// ulong can't store numbers high enough to calculate a factorial larger than 22
// TODO: try implimenting BigInteger struct
// int number = 23;
//             long fact;
//             factorial(number, out  fact);
//     static void factorial(int events, out  BigInteger eventfact)
//     {
//         eventfact = 1;
//         for (int tt = 1; tt <= events; tt++)
//         {
//             eventfact = BigInteger.Multiply(eventfact, tt); }
//     }
int calcFactorial (int d) {
    if (d == 1){
        return d;
    }
    return d * calcFactorial(d-1);
}//O(n) time
//O(n) space
// var factorial = calcFactorial(1000000);
// System.Console.WriteLine(factorial);

// Another approach could be iterative with a for loop

ulong loopFactorial (ulong d) {
    ulong factHolder = d;
    for (ulong i = d-1; i >= 1; i--) {
        System.Console.WriteLine(factHolder);
        factHolder = factHolder * i;
    }
    return factHolder;
}//O(n) time
//O(1) space
var loop = loopFactorial(22);
System.Console.WriteLine(loop);