// to find even numbers

function filterEven(arr: number[]): number[] {
  return arr.filter(num => num % 2 === 0);
}

console.log(filterEven([1, 2, 3, 4, 5, 6])); 