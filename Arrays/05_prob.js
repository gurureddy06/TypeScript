// check if an Element Exists
// using for loop
var array2 = [1, 2, 3, 4, 5];
var target = 5;
var found = false;
for (var i = 0; i <= array2.length; i++) {
    if (array2[i] === target) {
        found = true;
        break;
    }
}
console.log(found);
//using for each loop
var array3 = ["guru", "reddy", "partiv", "gaman"];
var required = "gagan";
var find = false;
array3.forEach(function (str) {
    if (str === required) {
        find = true;
    }
});
console.log(find);
