// Given an array, rotate the array to the right by k steps, 
// where k is non-negative.
// Test Cases
// Input: nums = [1,2,3,4,5,6,7], k = 3
// Output: [5,6,7,1,2,3,4]
// Input: nums = [-1,-100,3,99], k = 2
// Output: [3,99,-1,-100]
static int[] Rotate(int[] nums, int k){
    var index = nums.Length-1;
    // Build an array to reference the original array 
    // as we manipulate the original
    int[] nums2 = new int[nums.Length];
    for (int j = 0; j < nums.Length; j++)
        nums2[j] = nums[j];
    // Loop length number of times. Determine the new index with an out of range condition
    // Either add the entry to i+k or i+k-index.
    for(int i=0; i<nums.Length;i++){
        if (i+k > index){
            nums[i+k-index-1] = nums2[i];
        }else{
            nums[i+k] = nums2[i];
        }
    }
    return nums;
}
int[] nums = {1,2,3,4,5,6,7};
var res = Rotate(nums,3);
for (int i = 0; i < res.Length; i++)
    Console.Write(res[i] + " ");