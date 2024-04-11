// Question 32: Checking Usernames: 
// Ensure uniqueness in usernames.

let current_users: string [] = ["Aroosa", "Seema", "Ali", "Saman", "Aamna", "admin"]

let new_users: string [] = ["admin", "Saman", "kiran", "Mehak"]

new_users.forEach(newuser =>{
    if(current_users.some(currentUser => currentUser.toLocaleLowerCase() === newuser.toLowerCase ())){
        console.log(`${newuser} will need to enter a new username`);
    } else {
        console.log(`${newuser} is available.` );
        
    }
} )