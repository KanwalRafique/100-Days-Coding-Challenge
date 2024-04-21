// Question 45: Cars: Create detailed car objects with flexible properties.

// Explain & TIP: Functions accepting a mix of fixed and arbitrary parameters let you create detailed and flexible objects. This is ideal for data with a few required fields and many optional fields.


type car = {
    manufacturer: string,
    model: string
    [key: string]: any;
}

function createCar(manufacturer:string, model:string, optional:Record<string, any>):car { return {
    manufacturer,
    model,
    ...optional
    }
}
const my_car: car = createCar("Toyota", "Corolla", {Color: "silver", year: "2024"})

console.log(my_car);

