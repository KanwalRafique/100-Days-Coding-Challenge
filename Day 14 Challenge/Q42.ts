// Question 42: Great Magicians: Add "the Great" to magician names.

// Explain & TIP: Modifying array contents within a function demonstrates how functions can change data. This shows the impact of passing arrays by reference.

let magicians: string [] = ["Harry Houdini", "David Blaine", "Dough Henning", "Dai Vernon"];

function show_magicians (magicians:string[]) {
    magicians.forEach(magician => {
        console.log(magician);
    });
}

function make_great(magicians: string[]) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + " the Great";
    }
}

make_great(magicians); // Modifies the original array
show_magicians(magicians); // Shows modified names
console.log(magicians);

