// Undefined
// If a variable is declared, but not initialized or assigned any value then JS automatically initialized it with "undefined"

// null
// It's a special data type which represent "nothing" or "empty" or "value unknown".
// It is assigned explicitly

// typeof udefined is undefined
// undefined == null is true

// typeof null is object
// undefined === null is false

// Equality Comparison
// == This operator does value comperasion.                     i.e 100 == "100"    True
// === This operator does value plus data type comparison       i.e 100 === "100"   False



// Equality comparison
// Normal comparison
// Strict comparison


// 1. Normal comparison (==)
console.log('3 == \"3\"', 3 == '3');  // true
console.log('3 == 3', 3 == 3);  // true
console.log('tutku == TUTKU','tutku' == 'TUTKU'); // false

// 2. Strict Comparison (compare value + data type)
console.log('3 === 3', 3 === 3);        // true
console.log('3 === "3"', 3 === '3');    // false

// Null vs Undefined
let text;
let value;
let nullValue = null;
console.log(value);
console.log(nullValue);
if(value === undefined)
    text = 'value is undefined';
else
    value = 'value is defined';
nullValue = text;
console.log(text);
console.log(nullValue);
