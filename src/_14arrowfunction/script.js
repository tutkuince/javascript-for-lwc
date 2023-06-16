// Arrow Function
//
// Arrow functions allow us to write shorter function syntax

// Normal function
// function getName() {return 'tutku';}

// Arrow function with return
// getName = () => {return 'tutku';}

// Arrow function without return 
// getName = () => 'tutku';


// Benefits of Arrow functions
// Arrow syntax automatically binds 'this' to the surrounding codde's context


// function abc() {
//     console.log('hello');
// }

// abc();


// const bcd = () => {
//     console.log('hello');
// }

// bcd();

// function sum(data) {
//     let sum = data + 10;
//     return sum;
// }

// const sum = (data) => {
//     let sum = data + 10;
//     return sum;
// }

// console.log(sum(15));

// const sum = (data1, data2) => {
//     let sum = data1 + data2;
//     return sum;
// }

// console.log(sum(15, 25));


// const sum = (data1, data2) => {
//     return data1 + data2;
// }

// console.log(sum(15, 25));


// const sum = (data1, data2) => data1 + data2;

// console.log(sum(25, 25));

// let arr = [1, 2, 3, 4];
// let newArr = arr.map((item) => item * 2);
// console.log(newArr);


// Problem solved by arrow function
// we cannot access to this.name in fullName function

// let obj = {
//     name: 'tutku',
//     getName: function() {
//         console.log(this.name);
//         function fullName() {
//             console.log(this.name);
//             console.log(`my full name is ${this.name} ince`);
//         }
//         fullName();
//     }
// };

let obj = {
    name: 'tutku',
    getName: function() {
        console.log(this.name);
        const fullName = () => {
            console.log(this.name);
            console.log(`my full name is ${this.name} ince`);
        }
        fullName();
    }
};

obj.getName();