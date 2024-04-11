"use strict";
//Question 17: Shrinking Guest List: 
Object.defineProperty(exports, "__esModule", { value: true });
// Unfortunately, your new table won’t arrive in time, and you can only invite two guests.
let guests = ["Saman", "Aroosa", "Mehak", "Seema", "Aamna", "Ishmal"];
console.log("Bad luck!!!! Bigger dinner table not arrived I can ONLY INVITE 2 people for Dinner");
while (guests.length > 3) {
    let removedGuest = guests.pop();
    console.log(`Extremly Sorry , ${removedGuest}, "Unfortunately, I won't be able to invite you for dinner.`);
}
guests.forEach(guest => {
    console.log(`Dear ${guest}, I have invited some of my selected BEST FRIENDS, Kindly joins us... :)   `);
});
guests.splice(0, guests.length);
