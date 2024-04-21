"use strict";
// Question 51: Refactoring to Arrow Functions: Take a simple function that calculates the area of a rectangle and refactor it into an arrow function.
Object.defineProperty(exports, "__esModule", { value: true });
// Explain & TIP: Arrow functions provide a concise syntax for writing functions in JavaScript and TypeScript, making your code cleaner and more readable.
//Formula for finding area of Rectangle:
console.log("Area of Rectangle = length x width");
console.log("Length = 7 and ", "Height = 9");
function calculateArea(width, length) { return width * length; }
//Refactored into an Arrow function:
let calculateAreaArrow = (length, width) => length * width;
console.log("So Area of Rectangle is:");
console.log(calculateAreaArrow(7, 9));
