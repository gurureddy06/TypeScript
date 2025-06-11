// Reverse an Array

// using reverse method
let array: (number) [] = [1, 2, 3, 4, 5];
let result = array.reverse();
console.log(result);

// using for loop

let originalArray: (number) [] = [1, 2, 3, 4, 5];
let resultArray: (number) [] = [];
for(let i = originalArray.length - 1; i >= 0; i--){
    resultArray.push(originalArray[i]);
}
console.log(resultArray);

// for each

let original: (number) [] =  [1, 2, 3, 4, 5];
let resultedArray: (number) [] = [];
original.forEach((num) => {
    resultedArray.unshift(num);
});
console.log(resultedArray);