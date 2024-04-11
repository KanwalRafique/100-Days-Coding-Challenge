"use strict";
// Question 38: Cities: Describing cities with a function.
Object.defineProperty(exports, "__esModule", { value: true });
function describeCity(city, country = "Pakistan") {
    console.log(`${city} is in ${country}`);
}
describeCity("Karachi");
describeCity("Lahore");
describeCity("Islamabad");
describeCity("Delhi", "India");
