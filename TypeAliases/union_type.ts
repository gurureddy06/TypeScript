
// A type that can be one of several types

type id = number | string;

let userId: id = 101;
console.log("User ID:", userId);

userId = "RA507";
console.log("Updated id:", userId);
