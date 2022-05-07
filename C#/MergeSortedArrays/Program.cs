﻿static void mergeArrays(int[] arr1, int[] arr2, int n1, int n2, int[] arr3)
{
    int i = 0, j = 0, k = 0;
    
    // Traverse both array
    while (i < n1 && j < n2)
    {
        // Check if current element
        // of first array is smaller
        // than current element
        // of second array. If yes,
        // store first array element
        // and increment first array
        // index. Otherwise do same
        // with second array
        if (arr1[i] < arr2[j]){
            System.Console.WriteLine("storign arr1");
            System.Console.WriteLine(arr1[i]);
            arr3[k++] = arr1[i++];
        }
        else{
            System.Console.WriteLine("storign arr2");
            System.Console.WriteLine(arr2[j]);
            arr3[k++] = arr2[j++];
        }
    }
    
    // Store remaining
    // elements of first array
        while (i < n1){
            System.Console.WriteLine("store remaining arr1");
            System.Console.WriteLine(i);
        arr3[k++] = arr1[i++];
        }
    
    // Store remaining elements
    // of second array
    while (j < n2){
            System.Console.WriteLine("store remaining arr2");
            System.Console.WriteLine(arr2[i]);
        arr3[k++] = arr2[j++];}
}

int[] arr1 = {1, 3, 5, 7, 30, 50, 800};
int n1 = arr1.Length;

int[] arr2 = {2, 4, 6, 8, 20, 89, 90, 5207};
int n2 = arr2.Length;

int[] arr3 = new int[n1+n2];

mergeArrays(arr1, arr2, n1, n2, arr3);

Console.Write("Array after merging\n");
for (int i = 0; i < n1 + n2; i++)
    Console.Write(arr3[i] + " ");