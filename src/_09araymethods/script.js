// Array Methods
let arr = [2, 3, 5, 7, 9, 10, 8, 6];

// map()    - loop over the array and return new array based on the value
//
// let resultMap = arr.map((value, index, array) => {
//     console.log(`Index is ${index}, Value is ${value}, Array is ${array}`);
//     return value * 2;
// });
// console.log(resultMap);

// filter() - return new array with all the elements that satisfy the condition
//
// let resultFilter = arr.filter((value, index, array) => {
//     return value > 5;
// });
// console.log(resultFilter);

// every()  - return true or false if every element in the array satisfy the condition
//
// let resultEvery = arr.every((value, index, array) => {
//     return value > 2;
// });
// console.log(`ResultEvery: ${resultEvery}`);

// some()   - return true if at least one element in the array satisfy 
//
// let resultSome = arr.some((value, index, array) => {
//     return value > 2;
// });
// console.log(resultSome);


// sort()   - sort the elements of an array
//
// let resultSort = arr.sort((a, b) => {
//     return a - b;       // order by asc
//     // return b - a;    // order by desc
// });
// console.log(resultSort);

// reduce() - this method reduces the array to a single value (left to right) // we can use reduce method for addition    // 0 => initialValue
//
// let resultReduce = arr.reduce((previousValue, currentValue, currentIndex, array) => {
//     return previousValue + currentValue;
// }, 0);
// console.log(`resultReduce ${resultReduce}`);


// forEach()- this method calls for each array element
//
arr.forEach((value, index, array) => {
    console.log(value);
});
