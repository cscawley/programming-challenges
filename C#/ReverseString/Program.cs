String ReverseString(String s)
{
    string[] sArray = new string[s.Length];
    var length = s.Length;
    for (int i = 0; i < length; i++){
        int reverseIndex = length - (i+1);
        sArray[i] = s[reverseIndex].ToString();
    }
    string result = string.Join("",sArray);
    return result;
}

var reverseString = ReverseString("Hi my name is Andrei");

System.Console.WriteLine(reverseString);