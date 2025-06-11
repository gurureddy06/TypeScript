
// Combines multiple types into one

type Address = {
  city: string;
  pincode: number;
};

type Person = {
  name: string;
};

type FullDetails = Person & Address;

let personDetails: FullDetails = {
  name: "Guru",
  city: "Chennai",
  pincode: 600001
};

console.log(personDetails);
