// setTimeout
//
// The setTimeout() is a method of the window object. The setTimeout() sets a timer and executes a callback function after the timer expires.
// let timerId = window.setTimeout(() => console.log('hello'), 5000);
// console.log(timerId);
// clearTimeout(timerId);

// setInterval
//
// The setInterval() is a method of the window object. The setInterval() repeatedly calls a function with a fixed delay between each call.
let counter = 1;
let intervalId = window.setInterval(() => console.log(`hello from setInteval() ${counter++}`), 1000);