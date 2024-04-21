"use strict";
// Question 44: Sandwiches: Summarize sandwich orders with varying ingredients.
Object.defineProperty(exports, "__esModule", { value: true });
//Explain & TIP: Utilizing rest parameters allows functions to accept an indefinite number of arguments, useful for handling lists of data like sandwich ingredients.
function make_sandwich(...items) {
    console.log(`Making a sandwich with the following items: ${items.join(', ')}.`);
}
make_sandwich("ham", "cheese");
make_sandwich("turkey", "lettuce", "tomato");
make_sandwich("avocado", "sprouts", "mustard", "mayo");
