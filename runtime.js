
// My summary for problem 4 
/* Report
With the tinyarray the speed difference is extremely small for the two arrays
but as the array grows larger the time is significantly different.the function 
that uses push scales far better than the function that uses unshift. this is because 
Unshift has to move everything inside of the array to a new position everytime something is added in
but with push everything is left the same and another value is added into the end of the array.
*/

const perf = require('execution-time')();


function doublerAppend(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.push(num);
    }

}


function doublerInsert(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.unshift(num);
    }

}


function getSizedArray(size){
    let array = [];
    for (let i=0; i<size; i++){
        array.push(i);
    }
    return array
}


const tinyArray = getSizedArray(10);
const smallArray = getSizedArray(100);
const mediumArray = getSizedArray(1000);
const largeArray = getSizedArray(10000);
const extraLargeArray = getSizedArray(100000);



// How long does it take to double every number in a given 
// array? 

// Try it with first function
perf.start();                     // Starts timer
doublerAppend(extraLargeArray);
let resultsAppend = perf.stop();  // Stops timer and save time results


// Try it with second function
perf.start();
doublerInsert(extraLargeArray);
let resultsInsert = perf.stop();


//large array
perf.start();                     // Starts timer
doublerAppend(largeArray);
let resultsAppendL = perf.stop();  // Stops timer and save time results


// Try it with second function
perf.start();
doublerInsert(largeArray);
let resultsInsertL = perf.stop();


//medium array

perf.start();                     // Starts timer
doublerAppend(mediumArray);
let resultsAppendM = perf.stop();  // Stops timer and save time results


// Try it with second function
perf.start();
doublerInsert(mediumArray);
let resultsInsertM= perf.stop();


//smallArray

perf.start();                     // Starts timer
doublerAppend(smallArray);
let resultsAppendS = perf.stop();  // Stops timer and save time results


// Try it with second function
perf.start();
doublerInsert(smallArray);
let resultsInsertS= perf.stop();

//tinyArray

perf.start();                     // Starts timer
doublerAppend(tinyArray);
let resultsAppendT = perf.stop();  // Stops timer and save time results


// Try it with second function
perf.start();
doublerInsert(tinyArray);
let resultsInsertT= perf.stop();


console.log('Results for the extraLargeArray');
console.log("insert", resultsInsert.preciseWords);
console.log("append", resultsAppend.preciseWords);

console.log('Results for the largeArray');
console.log("insert", resultsInsertL.preciseWords);
console.log("append", resultsAppendL.preciseWords);

console.log('Results for the mediumArray');
console.log("insert", resultsInsertM.preciseWords);
console.log("append", resultsAppendM.preciseWords);

console.log('Results for the smallArray');
console.log("insert", resultsInsertS.preciseWords);
console.log("append", resultsAppendS.preciseWords);

console.log('Results for the tinyArray');
console.log("insert", resultsInsertT.preciseWords);
console.log("append", resultsAppendT.preciseWords);







