// to find even numbers
function filterEven(arr) {
    return arr.filter(function (num) { return num % 2 === 0; });
}
console.log(filterEven([1, 2, 3, 4, 5, 6]));
