"use strict";
// Question 45: Cars: Create detailed car objects with flexible properties.
Object.defineProperty(exports, "__esModule", { value: true });
function createCar(manufacturer, model, optional) {
    return {
        manufacturer,
        model,
        ...optional
    };
}
const my_car = createCar("Toyota", "Corolla", { Color: "silver", year: "2024" });
console.log(my_car);
