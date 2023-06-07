// Promise
//
// Promise is an object that may produce a single value sometime in the future
// Promises are used to handle asynchronous operations in Javascript.

// Promise has three states
// 1) pending()
// 2) fulfilled()
// 3) rejected()

// Use case from LWC point of view.
// 1. Fetching data from server
// 2. Loading file from system


// function checkIsSuccess(data) {
//     return new Promise(function(resolve, reject){
//         if(data === 'success') {
//             return resolve('successfully executed');
//         } else {
//             return resolve('unsuccessfully executed');
//         }
//     });
// }

// checkIsSuccess('success').then(function(result){
//     console.log(result);
// }).catch(function(error){
//     console.error(error);
// });


fetch('https://api.github.com/users/tutkuince').then(function(result){
    return result.json()
}).then(function(response){
    console.log(response);
});