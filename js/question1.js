// Given 2 arrays, create a function that lets a user know
// (true/false) whether those two arrays contain any common
// items.
// For example:
// const array1 = ['a','b','c','x'];
// const array2 = ['z','y','i'];
// should return false.
// -------------
// const array1 = ['a','b','c','x'];
// const array2 = ['z','y','x'];
// should return true.

// How big will the array get?
// is time or space complexity a factor?

// 2 parameters - arrays - no size limit
// return true/false

// Brute force nested for loops
// 0(n^2)
const array1 = ['a','b','c','x'];
const array2 = ['z','y','x'];
function containsCommonItem(array1, array2){
    for(let i=0; i < array1.length; i++){
        for(let j=0; j < array2.length; j++){
            if (array1[i] === array2[j]){
                return true;
            }
        }
    }
    return false;
}
//0(a*b) Time Complexity
//0(1) Space Complexity

// first array convert to object
// array1 ==> obj {
// a: true,
// b: true,
// c: true,
// x: true,    
//}
// array2[index] === obj.properties
function containsCommonItem2(arr1,arr2) {
    //loop through first array and create object
    //where properties === items in the array
    // can we assume always 2 parameters
    let map = {};
    for(let i=0; i < arr1.length; i++){
        if (!map[arr1[i]]) {
            const item = arr1[i];
            map[item]=true;
        }
    }
    console.log(map);
    //loop through second array and check if item in second
    //array exists on created object.
    for (let j = 0; j < arr2.length; j++){
        if (map[array2[j]]){
            return true;
        }
    }
    return false;
}
//0(a+b) time complexity
//0(a) Space Complexity

//readability
function containsCommonItem3(arr1,arr2) {
    return arr1.some(item => arr2.includes(item))
}