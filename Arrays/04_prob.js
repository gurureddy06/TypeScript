// Reverse an Array
// using reverse method
var array = [1, 2, 3, 4, 5];
var result = array.reverse();
console.log(result);
// using for loop
var originalArray = [1, 2, 3, 4, 5];
var resultArray = [];
for (var i = originalArray.length - 1; i >= 0; i--) {
    resultArray.push(originalArray[i]);
}
console.log(resultArray);
// for each
var original = [1, 2, 3, 4, 5];
var resultedArray = [];
original.forEach(function (num) {
    resultedArray.unshift(num);
});
console.log(resultedArray);
