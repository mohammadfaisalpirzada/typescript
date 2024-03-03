// Stripping Names: 
//Store a person’s name, and include some whitespace characters at the beginning and end of the name. 
//Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, 
//so the whitespace around the name is displayed. Then print the name after striping the white spaces.
//assigning variables with some space using \t
//let myFirstName:string
var myFirstName = "Faisal";
var myLastName = "Peerzada";
// printing name in new line 
console.log("My name is ".concat(myFirstName, " ").concat(myLastName));
// printing name in new line 
console.log("\n Using \\n \n ".concat(myFirstName, " \n ").concat(myLastName));
// printing name with space
var name_with_space = ("\t ".concat(myFirstName, " \t  hello \t ").concat(myLastName));
console.log("\n Printing name with space \n ".concat(name_with_space));
// stripping
var stripping_name = name_with_space.trim();
console.log("\n Printing name without space \n ".concat(stripping_name));
