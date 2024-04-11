// Question 33: Ordinal Numbers: 
// Display numbers with their ordinal suffixes.

// let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// numbers.forEach(number => {
//     let suffix = "th";
//     if (number === 1) {
//         suffix = "st";
//     } else if (number === 2) {
//         suffix = "nd";
//     } else if (number === 3) {
//         suffix = "rd";
//     }
//     console.log(`${number}${suffix}`);
// });

let numbers: number [] = [1,2,3,4,5,6,7,8,9,10];
numbers.forEach(number => {
    let suffix = "st";
    if (number === 1){
        console.log(`${number + suffix}`);  
    } 
    else if (number === 2) {
            suffix = "nd";
            console.log(`${number + suffix}`);
    
    } else if (number === 3){
            suffix = "rd";
            console.log(`${number + suffix}`); 
    } else { suffix = "th";
    console.log(`${number + suffix}`);
    }}
)


