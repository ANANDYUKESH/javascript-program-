
// 1.Finding the index of first occurance

console.log("Finding the index of first occurance");
let array = [2,3,4,5,6]
console.log(array);
let element = 5;
console.log("Element:", element);
let index = arr.indexOf(element);
if (index !== -1) {
    console.log("Index of first occurrence:", index);
} else {
    console.log("Element not found in array");
}

//2. Finding the difference between two arrays

console.log("Finding the difference between two arrays");

let arr1 = [1,2,3,4,5];
let arr2 = [5,6,7,8,9];
console.log("Array 1:", arr1);
console.log("Array 2:", arr2);

let difference = arr1.filter(x => !arr2.includes(x));
console.log("Difference:", difference);

//3.Aray Intersection of two sets

console.log("Aray Intersection of two sets");

let set1 = new Set([1, 2, 3, 4, 5]);
let set2 = new Set([3, 4, 5, 6, 7]);
console.log("Set 1:", set1);
console.log("Set 2:", set2);

let intersection = new Set([...set1].filter(x => set2.has(x)));

console.log("Intersection:", [...intersection]);

//4.Array Manipulation with slice()

console.log("Array Manipulation with slice()");

console.log("Original Array:", arr);
let newArray = arr.slice(2,4);
console.log("New Array:", newArray);
