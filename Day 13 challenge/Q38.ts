// Question 38: Cities: Describing cities with a function.

function describeCity(city:string, country: string = "Pakistan") {
    console.log(`${city} is in ${country}`);
}

describeCity("Karachi");
describeCity("Lahore");
describeCity("Islamabad");
describeCity("Delhi", "India");