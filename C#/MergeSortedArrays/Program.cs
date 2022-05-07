using System;
int[] mergeArrays(int[] arr1, int[] arr2)
{
    if(arr1==null||arr2==null)
        throw new ArgumentException(message: "Array missing.");
    int i = 0, j = 0, k = 0;
    int n1 = arr1.Length;
    int n2 = arr2.Length;
    int[] arr3 = new int[n1+n2];
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
        if (arr1[i] < arr2[j])
            arr3[k++] = arr1[i++];
        else
            arr3[k++] = arr2[j++];
    }
    // Store remaining
    // elements of first array
    while (i < n1)
        arr3[k++] = arr1[i++];
    // Store remaining elements
    // of second array
    while (j < n2)
        arr3[k++] = arr2[j++];
    return arr3;
}

int[] arr1 = {1, 3, 5, 7, 30, 50, 800};
int[] arr2 = {2, 4, 6, 8, 20, 89, 90, 5207};

var merged = mergeArrays(arr1);

Console.WriteLine("Array after merging\n");
for (int i = 0; i < merged.Length; i++)
    Console.Write(merged[i] + " ");