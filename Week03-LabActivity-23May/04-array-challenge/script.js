// By Aditi Trivedi 

// Challenge 1

const arr = [1, 2, 3, 4, 5];

// Reverse the array
arr.reverse();

// Add 0 to the end
arr.push(0);

console.log(arr); // [6, 5, 4, 3, 2, 1, 0]


// Chanllenge 2

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [5, 6, 7, 8, 9, 10];

// Using slice and concat
const arr3 = arr1.slice(0, 4).concat(arr2);

console.log(arr3); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// Alternatively, using the spread operator and splice
const arr4 = [...arr1, ...arr2];
arr4.splice(4, 1);

console.log(arr4); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


