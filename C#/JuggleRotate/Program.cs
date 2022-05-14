//Rotate an array to the left (n) number of times
//Use a recursive function that returns greatest common denominator to solve the rotate
int GCD(int a, int b)
{
    if (b == 0)
        return a;
    System.Console.WriteLine(a % b);
    return GCD(b, a % b);
}

var myGCD = GCD(9, 7);
System.Console.WriteLine(myGCD);

void leftArrayRotate(int[] arr, int d, int n)
{

}