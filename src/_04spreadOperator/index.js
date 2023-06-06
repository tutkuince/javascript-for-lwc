// Spread Operator

let arrAlphabet = ['a', 'b', 'c'];
console.log(arrAlphabet);

let objSalesforce = {
    "name": "Salesforce",
    "age": 23,
    "full name": "Tutku Ince"
};

console.log(objSalesforce.name);
console.log(objSalesforce['full name']);    // array notation

// The operator's shape is three consecutive dots and is written as: ...
// Usages of spread operator

// 1. Expanding String - Convert String into list of array
let greeting = 'Hello Everyone';
let charList = [...greeting];
console.log(charList);

// 2. Combining Arrays - Combine array or add value to array
let arr1 = ['amazon', 'google'];
let arr2 = ['facebook', 'instagram'];
let resultArr = [...arr1, ...arr2];
console.log(resultArr);

// 3. Combining Object - Combine Object or add value to Object
let arr4 = ['a', 'b', 'c'];
let arr5 = [...arr4, 'tutku'];
let arr6 = ['tutku', ...arr4];
console.log(arr5);
console.log(arr6);

// 4. Creating New Shallow Copy of Arrays and objects
let obj1 = {
    "name": "salesforce",
    "age": 23,
    "data": "23/10/2003"
};

let obj2 = {
    "name": "facebook",
    "age": 55
};

let resultObj = {...obj1, ...obj2};
console.log(resultObj);

// 5. Shallow Copy
let arr10 = ['x', 'y', 'z'];
arr10.push(10);
console.log(arr10);

// 6. Nested Copy
let arrObject = [
    {"name": "salesforce"},
    {"name": "google"}
];
// console.log(arrObject);
// var arrObject1 = [...arrObject];
// console.log(arrObject);
// arrObject[0].name = 'java';
// console.log(arrObject1);

// hack for nested copy
let arrObject1 = JSON.parse(JSON.stringify(arrObject));
arrObject1[0].name = 'Java';
console.log(arrObject);
console.log(arrObject1);