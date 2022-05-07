// M = 1000
// CM = 900 -100
// C = 100
/// XC = 90 -10
// L = 50
// XL = 40 -10
// X = 10
// V = 5
/// IV = 4 -1
// I = I 
int RomanToInt(string roman) {
    roman = roman.ToUpper();
    var result = 0;
    foreach(var numeral in roman){
        result += ConvertLetterToNumber(numeral);
    }
    // Handle subtractions for subtracted value sequences e.g. IV, XC, etc.
    // Use reflection on the string to see if it contains a subtracted value sequence.
    // The amount subtracted is twice as much as the small value character. 
    if (roman.Contains("IV")|| roman.Contains("IX"))
        result -= 2;
    if (roman.Contains("XL")|| roman.Contains("XC"))
        result -= 20;
    if (roman.Contains("CD")|| roman.Contains("CM"))
        result -= 200;
    return result;
}
int ConvertLetterToNumber(char numeral)
{
    switch (numeral)
    {
        case 'M':
            return 1000;
        case 'D':
            return 500;
        case 'C':
            return 100;
        case 'L':
            return 50;
        case 'X':
            return 10;
        case 'V':
            return 5;
        case 'I':
            return 1;
        default:
            throw new ArgumentException("Invalid character");
    }
}
var res = RomanToInt("XIV");
System.Console.WriteLine(res);