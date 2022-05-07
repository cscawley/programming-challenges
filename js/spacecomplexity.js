//#5 Space complexity O(1)
function boooo(n) {
    for (let i = 0; i < n; i++) {
        console.log('booooo');
    }
}

boooo([1,2,3,4,5]) //0(1)

// #6 Space complexity O(n)
function arrayOfHiNTimes(n) {
    var hiArray = [];
    for (let i = 0; i < n; i++) {
        hiArray[i] = 'hi';
    }
    return hiArray;
}

arrayOfHiNTimes(6) //0(n)

// Find 1st, Find Nth...

const array = [{
    tweet: 'hi',
    date: 2012
    },
    {
    tweet: 'my',
    date: 2014
    },
    {
    tweet: 'tweets',
    date: 2018
    }];
array[0]; // 0(1)
array[array.length-1] // 0(1)

'helosshejheshgudkdsl'.length // 0(1) Find method is a property associated with strings in javascript