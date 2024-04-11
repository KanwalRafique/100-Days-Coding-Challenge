"use strict";
// Question 41: Magicians: Display magician names from an array.
Object.defineProperty(exports, "__esModule", { value: true });
// Explain & TIP: Passing arrays to functions allows for the manipulation or display of their contents in a centralized manner. This is useful for handling lists of data.
let magicians = ["Harry Houdini", "David Blaine", "Dough Henning", "Dai Vernon"];
function show_magicians(magicians) {
    magicians.forEach(magician => {
        console.log(magician);
    });
}
show_magicians(magicians);
