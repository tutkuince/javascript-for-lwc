// Normal Export
// export const PI = 3.14;
const PI_DATA = 3.14;

// export function add(a, b) {
//     console.log(a + b);
// }
function add(a, b) {
    console.log(a + b);
}

// export together
// export {PI, add}

// export with alias
export {PI_DATA as PI, add}

// export with default
export function minus(a, b) {
    console.log(a - b);
}