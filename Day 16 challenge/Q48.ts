// Question 48: Combining Arrays with Spread Operator: Suppose you're comparing prices of two different sets of laptops. Use the spread operator to combine these arrays into a single array sorted in ascending order, then log the result.

// Explain & TIP: The spread operator can be used in conjunction with array methods like sort() to combine and manipulate arrays efficiently.


let laptop_prices1 = [50000, 85000, 137000];
let laptop_prices2 = [45000, 78000, 108000];

//combine prices in ascending order:
let combinedPricesA = [...laptop_prices1, ...laptop_prices2].sort((a,b)=> a-b);

//combine prices in Descending order:
let combinedPricesD = [...laptop_prices1, ...laptop_prices2].sort((a,b)=> b-a);


console.log("Combined and Sorted prices in Ascending order are:", combinedPricesA);

console.log("Combined and Sorted prices in Descending order are:", combinedPricesD);
