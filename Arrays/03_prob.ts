// sum of all elements
// Given: let nums = [1, 2, 3, 4, 5];
// Output: 15

// with loops

let number: (number) [] = [1, 2, 3, 4, 5];

let sum = 0;
for(let i = 0;i < number.length; i++){
    sum += number[i];
}
console.log(sum);

// using for each

let numbers: (number) [] = [1, 2, 3, 4, 5];
let answer = 0;

numbers.forEach((num => {
    answer += num;
}));
console.log(answer);

// using reduce

let nums: (number) [] = [1, 2, 3, 4, 5];
let ans = nums.reduce((acc,curr)=> acc + curr);
console.log(ans);
