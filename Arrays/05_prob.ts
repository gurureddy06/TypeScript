// check if an Element Exists

// using for loop
let array2: (number) [] = [1, 2, 3, 4, 5];
let target = 5;
let found = false;
for(let i = 0; i <= array2.length; i++) {
    if(array2[i] === target){
        found = true;
        break;
    }
}
console.log(found);

//using for each loop

let array3: (string) [] = ["guru", "reddy", "partiv", "gaman"];
let required = "gagan";
let find = false;
array3.forEach((str) => {
    if(str === required){
        find = true;
    }
});
console.log(find);