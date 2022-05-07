// Given an array, return the first recurring character
// [2,5,1,2,3,5,1,2,4]
// returns 2

// [2,1,1,2,3,5,1,2,4]
// returns 1

// [2,3,4,5]
// returns undefined

static int FirstRecurring(int[] array){
   HashSet<int> RecurringSet = new HashSet<int>();
   int firstRecurring = -1;
   foreach(int i in array){
       if (RecurringSet.Contains(i)){
           firstRecurring = i;
           return firstRecurring;
       }else {
           RecurringSet.Add(i);
       }
    }
    return firstRecurring;
} // 0(n)

int[] array1 = {2,5,1,2,3,5,1,2,4};
int[] array2 = {2,1,1,2,3,5,1,2,4};
int[] array3 = {2,3,4,5};
var first = FirstRecurring(array3);
System.Console.WriteLine(first);