// sum of all elements
// Given: let nums = [1, 2, 3, 4, 5];
// Output: 15
// with loops
var number = [1, 2, 3, 4, 5];
var sum = 0;
for (var i = 0; i < number.length; i++) {
    sum += number[i];
}
console.log(sum);
// using for each
var numbers = [1, 2, 3, 4, 5];
var answer = 0;
numbers.forEach((function (num) {
    answer += num;
}));
console.log(answer);
var nums = [1, 2, 3, 4, 5];
var ans = nums.reduce(function (acc, curr) { return acc + curr; });
console.log(ans);
