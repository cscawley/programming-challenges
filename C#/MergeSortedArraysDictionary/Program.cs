using System;
//[0,3,4,31] [4,6,30]
// [0, 3, 4, 4, 6, 30, 31]
// The arrays sort by order
// Function that returns an array
// If an array is empty return the other array or sort that array by order

int[] MergeSortedArrays(int[] array1, int[] array2){
    // Check if any param's empty. Return other array assuming the params
    // are pre-sorted as per the function name.
    if (array1.Length == 0) {
        return array2;
    }
    if (array2.Length == 0) {
        return array1;
    }
    SortedDictionary<int, Boolean> mp = new SortedDictionary<int, Boolean>();
    for(int i = 0; i < array1.Length; i++)
        mp.Add(array1[i], true);
    for(int i = 0; i < array2.Length; i++)
        mp.Add(array2[i], true);
    foreach(KeyValuePair<int, Boolean> k in mp)
        Console.WriteLine(k.Key + " ");
    return mp.ToArray();
}
int[] array1 = {1, 3, 5, 7};
int[] array2 = {2, 4, 6, 8};
MergeSortedArrays(array1, array2);
for (int i = 0; i < merged.Length; i++)
    Console.WriteLine(merged[i] + " ");