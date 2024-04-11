// Question 39: City Names: Formatting city-country pairs.

// Explain & TIP: Returning formatted strings from functions can simplify data presentation. This exercise practices string formatting and returning values from functions.

function describeCity(city:string, country: string = "Pakistan") {
    console.log(`${city}, ${country}`);
}

describeCity("Karachi", "Pakistan");
describeCity("Lahore", "Pakistan");
describeCity("Islamabad", "Pakistan");
describeCity("Delhi", "India");