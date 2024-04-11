"use strict";
// Question 35: Animals: 
// Highlight animals with a common trait.
Object.defineProperty(exports, "__esModule", { value: true });
let animals = ["eagle", "falcon", "hawk", "owl", "vulture"];
let commonTrait = "birds of prey";
animals.forEach(animal => {
    console.log(`The ${animal} is a ${commonTrait}`);
});
console.log(`All these animals kills and eats other birds and animals `);
