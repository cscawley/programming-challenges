// Merge two sorted arrays
// [1,3,5,8,9] [2,5,6,8]
// The arrays are pre-sorted
// [1,2,3,5,5,6,8, 9]
// We'll need a third array to deliver the final sorted array
// we can sort through both arrays by assigning individual iteration points...
static void MergeSortedArrays(int[] a1, int[] a2, int n1, int n2, int[] a3){
    int i = 0, j = 0, k = 0;
    while(i<n1&&j<n2)
        if (a1[i]<a2[j])
            a3[k++] = a1[i++];
        else
            a3[k++] = a2[j++];
    // add remaining a1
    while (i<n1)
        a3[k++] = a1[i++];
    // add remaining a2
    while (j<n2)
        a3[k++] = a2[j++];
}

int[] array1 = {1,3,5,8,9};
var n1 = array1.Length;
int[] array2 = {2,5,6,8};
var n2 = array2.Length;
int[] a3 = new int[n1+n2];
MergeSortedArrays(array1,array2,n1,n2,a3);
for (int i = 0; i < n1 + n2; i++)
    Console.Write(a3[i] + " ");
