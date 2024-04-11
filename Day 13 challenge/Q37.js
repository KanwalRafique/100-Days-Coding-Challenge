"use strict";
// Question 37: Large Shirts: 
// Default values in make_shirt().
Object.defineProperty(exports, "__esModule", { value: true });
function make_shirt(size = "Large", message = "I Love Typscript") {
    console.log(`The size of the shirt is ${size} and the message printed on it is ${message}`);
}
make_shirt();
make_shirt("medium");
make_shirt("small", "Dive into coding");
