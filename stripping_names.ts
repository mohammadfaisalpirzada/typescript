// Stripping Names: 
//Store a person’s name, and include some whitespace characters at the beginning and end of the name. 
//Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, 
//so the whitespace around the name is displayed. Then print the name after striping the white spaces.

//assigning variables with some space using \t
//let myFirstName:string
let myFirstName = "Faisal";
let myLastName = "Peerzada";

// printing name in new line 
console.log(`My name is ${myFirstName} ${myLastName}`);

// printing name in new line 
console.log(`\n Using \\n \n ${myFirstName} \n ${myLastName}`);

// printing name with space
let name_with_space = (`\t ${myFirstName} \t  hello \t ${myLastName}`);
console.log(`\n Printing name with space \n ${name_with_space}`)


// stripping
let stripping_name = name_with_space.trim()
console.log(`\n Printing name without space \n ${stripping_name}`)