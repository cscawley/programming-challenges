// https://www.youtube.com/watch?v=XKu_SEDAykw
array1 = [1,2,3,9] //Sum = 8
array2 = [1,2,4,4] //Sum = 8

function hasPairWithSum(data1, sum){
    sumGoal = []
    for(i=0;i<data1.length;i++){
        if (!sumGoal[data1[i]]) {
            sumGoal.push(sum - data1[i]);
        }
    }
    console.log(data1.some(item => sumGoal.includes(item)))
  // console.log(sumGoal)
}
//
hasPairWithSum(array2, 8)