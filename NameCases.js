// Storing person's name in a variable
var personName = "Muhammad Faisal Peerzada";
// Printing person's name in lowercase
console.log("Lowercase: ".concat(personName.toLowerCase()));
// Printing person's name in uppercase
console.log("Uppercase: ".concat(personName.toUpperCase()));
// Printing person's name in titlecase
var titleCaseName = personName.replace(/\b\w/g, function (char) { return char.toUpperCase(); });
console.log("Titlecase: ".concat(titleCaseName));
