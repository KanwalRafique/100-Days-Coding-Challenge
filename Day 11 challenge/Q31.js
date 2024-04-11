"use strict";
// Question 31: No Users: 
// Ensure your user list isn’t empty.
Object.defineProperty(exports, "__esModule", { value: true });
// Array of usernames
let usernames = []; // An empty array
// Check if the user list isn't empty
if (usernames.length > 0) {
    // If there are users, greet them
    usernames.forEach(usernames => {
        console.log("Hello " + usernames + "! Nice to see you.");
    });
}
else {
    // If there are no users, provide a message
    console.log("We need to find some users!");
}
