//Basic Types

/* primitives and reference

primitive types

| Type      | Description         | Example               

| number    | Numeric values      | let a = 10;         
| string    | Textual data        | let s = "hello";  
| boolean   | Logical values      | let isDone = true;  
| null      | Absence of value    | let x = null;   
| undefined | Uninitialized value | let y;        
| bigint    | Large integers      | let b = 123n;   
| symbol    | Unique identifiers  | let sym = Symbol(); 

=> Stored on the stack.
=> Copied by value.
=> Immutable (cannot be changed after creation).

*/

/* reference types

| Type     | Description             | Example                    

| object   | Key-value pairs         | let obj = {name: "Guru"}
| array    | Ordered collections     | let arr = [1, 2, 3]; 
| function | Callable blocks of code | function greet() {}      
| class    | Blueprint for objects   | class Car {}     

=> Stored in the heap.
=> Copied by reference.
=> Mutable (can be modified even after being assigned).

*/

// Arrays

//  Basic Array Syntax
let arr1: number[] = [1, 2, 3, 4]
console.log(arr1);

// Arrays with Multiple Types (Union Types)
let arr: (number | string) [] = [1, 2, 3, "guru"]
console.log(arr);

// Array of Objects
let students: {name: string; age: number} [] = [
    {name : "guru", age: 21},
    {name : "partiv", age: 22}
];
students.forEach(student => {
    console.log(`Name: ${student.name}, age: ${student.age}`);
});

//Array Methods

let fruits: string[] = ["apple", "banana", "orange", "kiwi"];
fruits.push("water melon");
let first = fruits[0];
let last = fruits.pop();
fruits.forEach(fruit => console.log(fruit.toUpperCase()));

// Tuples (Fixed-size arrays with specific types)

let student: (string | number) [] = ["guru", 21];
console.log(student[0]);
console.log(student[1]);

// Readonly Arrays
let readOnlyArrays: readonly number[] = [2, 3, 4];
// readOnlyArrays.push(5) => error. we can only read the array, we cannot modify it.