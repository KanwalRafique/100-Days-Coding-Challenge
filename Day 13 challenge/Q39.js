"use strict";
// Question 39: City Names: Formatting city-country pairs.
Object.defineProperty(exports, "__esModule", { value: true });
// Explain & TIP: Returning formatted strings from functions can simplify data presentation. This exercise practices string formatting and returning values from functions.
function describeCity(city, country = "Pakistan") {
    console.log(`${city}, ${country}`);
}
describeCity("Karachi", "Pakistan");
describeCity("Lahore", "Pakistan");
describeCity("Islamabad", "Pakistan");
describeCity("Delhi", "India");
