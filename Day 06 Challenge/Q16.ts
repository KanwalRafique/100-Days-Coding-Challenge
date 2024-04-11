
// Question 16: More Guests:

//  You've found a bigger dinner table, so there's room for more guests.

let guests: string [] = ["Aroosa", "Seema", "Aamna"];
console.log("Hey Friends!!!!!! there is a good news I found a BIGGER DINNER TABLE ");


guests.unshift("Saman"); // It'll add "SAMAN" at the beginning.
guests.splice(2, 0, "Mehak"); // It'll add "MEHAK" at index 2.
guests.push("Ishmal"); // It'll add "ISHMAL" at the end.

// console.log(guests);
guests.forEach(guest => {
    console.log(`Dear ${guest}, would you like to join me for dinner?`);
});


 







