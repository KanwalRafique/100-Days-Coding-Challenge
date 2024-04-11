// Question 30: Hello Admin: 
// Greet users differently, especially 'admin'.

let usernames: string [] = ["Aroosa", "Seema", "Aamna","Admin","Ishmal"];

usernames.forEach(username => {
    if(username === "Admin"){
        console.log("Hello Admin, Would you like to see a status report?");
    }
    else{
        console.log(`Hello ${username}, thank you for logging in again.`);
    }
})