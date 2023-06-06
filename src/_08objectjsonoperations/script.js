// Object/JSON Operations

let obj = {
    "name": "Salesforce",
    "age": 23,
    "date of birth": "1999"
};

// 1. Object.keys()
console.log(Object.keys(obj));

// 2. Object.values()
console.log(Object.values(obj));

// 3. JSON.stringify()
let strObj = JSON.stringify(obj);
console.log(typeof strObj);
console.log(strObj);

// 4. JSON.parse()
let strToObj = JSON.parse(strObj);
console.log(typeof strToObj);
console.log(strToObj);
