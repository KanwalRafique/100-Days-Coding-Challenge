
// Question 18: Seeing the World: 

//Think of at least five places you’d like to visit.
console.log("I would like to visit the following Places:");


let places: string[] = ["Paris", "Turkey", "Azerbaijan", "France", "Behrin"];

console.log("Original order:", places);

console.log("Alphabetical order:", [...places].sort());

console.log("Original order:", places);

console.log("Reverse alphabetical order:", [...places].sort().reverse());

console.log("Original order:", places);

places.reverse();
console.log("Reversed order:", places);

places.reverse();
console.log("Original order:", places);

places.sort();
console.log("Alphabetical order:", places);

places.reverse();
console.log("Reverse alphabetical order:", places);

