// Storing person's name in a variable
const personName: string = "Muhammad Faisal Peerzada";

// Printing person's name in lowercase
console.log(`Lowercase: ${personName.toLowerCase()}`);

// Printing person's name in uppercase
console.log(`Uppercase: ${personName.toUpperCase()}`);

// Printing person's name in titlecase
const titleCaseName: string = personName.replace(/\b\w/g, char => char.toUpperCase());
console.log(`Titlecase: ${titleCaseName}`);
