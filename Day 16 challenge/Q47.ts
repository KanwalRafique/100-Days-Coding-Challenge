// Question 47: Advanced Array Destructuring: Given an array of objects representing different laptops, each with properties make, model, and year, use array destructuring to assign the first and second laptops to variables. Then, log these variables.

//Explain & TIP: Destructuring can also be used to quickly extract elements from arrays of objects, simplifying access to complex data structures.

let laptops = [
    {make: "Apple", model: "Macbook pro", year: "2020"},
    {make: "Hp", model: "Spectre x360-2", year:"2022"},
    {make: "Dell", model: "Xps", year:"2023"}
];
let [first_laptop, second_laptop] = laptops

console.log("\n");
console.log("First Laptop:",first_laptop);
console.log("\n");
console.log("Second Laptop:", second_laptop);

