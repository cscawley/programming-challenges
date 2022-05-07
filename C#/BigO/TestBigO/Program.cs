using System;
using System.Collections.Generic;

class Program
{

    public static string[] getAllFaculty(string[] allTitles, int max, int upper)
    {
        var rnd = new Random();
        var allFaculty = new List<string>();
        for (int i = 1; i < upper; i++)
            if (i == 7)
            {
                allFaculty.Add("SpecialTitle");
            }
            else
            {
                allFaculty.Add(allTitles[rnd.Next(0, max)]);
            }
            return allFaculty.ToArray();
    }

    public static void findSpecialTitle(string[] returnedFaculty) 
    {
        for (int i = 0; i < returnedFaculty.Length; i++)
        {
            Console.WriteLine("Operation: " + i);
            if (returnedFaculty[i] == "SpecialTitle")
            {
                Console.WriteLine("Found the title.");
            }
        }
    }

    public static void Main(string[] args)
    {
        var allTitles = new string[]
        {
          "Prof.",
          "AssocProf.",
          "AssisProf.",
          "TA",
          "Adjunct",
        };
        var maxValue = allTitles.Length;
        var returnedFaculty = getAllFaculty(allTitles, maxValue, 10000);
        // Begin Here
        var t0 = DateTime.Now;
        findSpecialTitle(returnedFaculty);
        TimeSpan timeSpan = DateTime.Now - t0;
        Console.WriteLine("Time elapsed: " + timeSpan.TotalMilliseconds / 1000);
    }

}