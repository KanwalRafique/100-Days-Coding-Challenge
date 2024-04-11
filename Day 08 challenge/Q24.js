"use strict";
// Question 24: More Conditional Tests: 
// Expand your conditional tests to cover a wider range of comparisons.
Object.defineProperty(exports, "__esModule", { value: true });
let str1 = "Kanwal";
let str2 = "Rafiqe";
let num1 = 5;
let num2 = 8;
let array = [1, 2, 3, 4, 5];
console.log("--------Tests for equality and inequality with strings------");
console.log(str1 === "Kanwal"); //True
console.log(str2 !== "Rafiqe"); //False
console.log("Tests using the lower case function:");
console.log(str1.toLowerCase() === "kanwal"); //True
console.log(str2.toLowerCase() === str2); //False
console.log("-------Numerical Tests-----------");
console.log(num1 === (num2 - 3)); // True
console.log(num2 !== 8); //False
console.log(num2 > num1); //True
console.log(num1 < 6); //True
console.log(num1 >= 5); //True
console.log(num2 <= 15); //True
console.log("----------Tests using '&&' and '||' operators--------");
console.log(str1 == "Kanwal" && str2 == "Rafiqe"); //True
console.log(str1 == "Kanwal" || str2 != "Rafiqe"); // True
console.log(num1 === 12 || num2 === 7); //False
console.log("------Test whether an item is in an array-----");
console.log(array[2] == 3); //True
console.log(array.indexOf(4) == 4); //False
console.log("Test whether an item is not in an array");
console.log(array[4] != 4); //True
console.log(array.indexOf(1) != 0); //False
