// Arrays

//Find Maximum and Minimum Element
// Input: [12, 5, 23, 1, 17]
// Output: max = 23, min = 1

function findMax(arr: number[]): number {
  return Math.max(...arr);
}

console.log(findMax([12, 5, 23, 1, 17])); 

function findMin(arr: number[]): number {
  return Math.min(...arr);
}

console.log(findMin([12, 5, 23, 1, 17]));


