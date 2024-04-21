"use strict";
// Question 52: Make a Smartphone Object: Create a simple way to keep track of a smartphone's details. Include its brand, model, and other key features like how much storage it has, the size of its screen, and how long its battery lasts.
Object.defineProperty(exports, "__esModule", { value: true });
// Explain & TIP: Just like a box can contain smaller boxes, objects can contain other objects. This helps organize related information neatly.
// // Sets up details about a smartphone
let mySmartphone = {
    make: "Infinix",
    model: "Infinix X652A",
    specs: {
        storage: "128GB",
        screenSize: "5.1 inches",
        batteryLife: "16 hours",
        version: "9",
    }
};
// Shows specification of my smartphone
console.log(mySmartphone);
