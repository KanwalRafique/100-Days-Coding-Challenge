//Question 29: Favorite Fruit: 
// Create an array for your favorite fruits and check if certain fruits are included.

// Array of favorite fruits
const favorite_fruits = ["Strawberry", "Water Melon", "Mango", "Orange", "Kiwi"];

// Check if certain fruits are included
if (favorite_fruits.includes("Strawberry")) {
    console.log("I really like Strawberry!");
}

if (favorite_fruits.includes("Water Melon")) {
    console.log("Water Melon is one of my favorite fruit too!");
}

if (favorite_fruits.includes("Mango")) {
    console.log("I also enjoy Mango");
} 

if (favorite_fruits.includes("Orange")) {
console.log("I also like Orange due to its taste");
}

if (favorite_fruits.includes("Kiwi")) {
    console.log("Same as orange I like Kiwi too...");   
}
else 
{
    console.log("the fruit is not in the list is logged.");
}