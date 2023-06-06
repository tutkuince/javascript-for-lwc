// JS provides many methods to play with Strings.
// Below are some of the most commonly used String methods in LWC

// includes(): The method determines whether a String contains the characters of a specified string.
let str = 'Hello guys I hope you are doing good';
console.log(str.includes('guy'));

// indexOf() method returns the position of the first occurrence of a specified value in a string.
let index = str.indexOf('I');
console.log(index);

// startsWith() determines whether a string begins with the characters of a specified string.
console.log(str.startsWith('Hello'));

// slice()
// method extracts parts of a String and returns the extracted parts in a new String
let newStr = str.slice(0, 5);
console.log(newStr);

// trim() removes whitespaces from both sides of a string
let searchText = '    salesforce        lwc        ';
console.log(searchText);
console.log(searchText.trim());