// Destructuring
// The two most used data structures in JavaScript are Object and Array

// Destructuring is a special syntax that allows us to "unpack" arrays or objects into a bunch of variables, as sometimes that's more convenient.


// Array Destructuring
let arr = ['amazon', 'google'];
// let company1 = arr[0];
// let company2 = arr[1];

let[company1, company2] = arr;
console.log(company1);
console.log(company2);

// Object Destructuring
let options = {
    "title": "zero to hero",
    "age": 23,
    "type": "CRM"
};

// var title = options.title;
// var age = options.age;

let {title, age, type} = options;
console.log(title);
console.log(age);
console.log(type);
