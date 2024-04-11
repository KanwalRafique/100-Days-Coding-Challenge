"use strict";
// Question 28: Stages of Life: 
//Determine a person’s life stage with an if-else chain.
Object.defineProperty(exports, "__esModule", { value: true });
let age = 28;
if (age < 2) {
    console.log("The person is an INFANT");
}
else if (age >= 2 && age < 4) {
    console.log("The person is a TODDLER");
}
else if (age >= 4 && age < 13) {
    console.log("The person is a KID");
}
else if (age >= 13 && age < 20) {
    console.log("The person is an TEENAGER");
}
else if (age >= 20 && age < 65) {
    console.log("The person is an ADULT");
}
else
    console.log("The person is an ELDER");
