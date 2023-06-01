// Var keyword
// It can be updated and also can be re-declared
// var keyword two type of scope and function not block level scope

// var course = 'zero to hero';
// console.log(course);

// var course = 'zero to hero in lwc';
// console.log(course);
var x = 'global';
let y = 'not global';
console.log(this.x); // global
console.log(this.y); // undefined

// let keyword 
// It can be updated and also cannot be re-declared
// It supoort function and block level scope

// let course = 'zero to hero';
// course = 'zero to hero in lwc';
// console.log(course);
// // let course = 'cannot be re-declared';

// function acb() {
//     let x = 'Tutku';
//     console.log(x);
// };
// acb();

// const keyword
// It can't be updated and also cannot be re-declared

const course = 'zero to hero';
console.log(course);
// course = 'zero to hero in lwc';
// console.log(course); TypeError: invalid assignment to const 'course'