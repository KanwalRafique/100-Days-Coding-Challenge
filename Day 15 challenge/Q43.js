"use strict";
// 
// Question 43: Unchanged Magicians: 
// Preserve the original magician names while creating a new "great" list.
Object.defineProperty(exports, "__esModule", { value: true });
function show_magicians(magicians) {
    magicians.forEach(name => console.log(name));
}
//Modifying the function:
function make_great(magicians) {
    return magicians.map(magicians => `The Great ${magicians}`);
}
//Array of Magicians
let magicians_names = ["Harry Houdini", "David Blaine", "Dough Henning", "Dai Vernon"];
// Making a copy of Magicians names:
let copy_magicians_names = magicians_names.slice();
// Modified the copied array:
let copy_great_magicians = make_great(copy_magicians_names);
// showing both arrays
console.log("\n ------Original Array:------\n");
show_magicians(magicians_names); // Original Array
console.log("\n -------Modified Array:-------\n");
show_magicians(copy_great_magicians); // Copied Array
