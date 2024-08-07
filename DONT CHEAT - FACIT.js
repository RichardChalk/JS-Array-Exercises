//   1. Declare an empty array - print to console;
const emptyArray = [];
console.log(emptyArray);

//   2a. Declare an array with more than 5 number of elements - print to console
const moreThanFive = [1, 2, 3, 4, 5, "Six", 7];

//   2b. Find the length of your array - print to console
console.log("Length of my array is: " + moreThanFive.length);

//   2c. Get the first item, the middle item and the last item of the array - print to console
console.log("First item: " + moreThanFive[0]);
console.log(
  "Middle item: " + moreThanFive[Math.floor(moreThanFive.length / 2)]
);
console.log("Last item: " + moreThanFive[moreThanFive.length - 1]);

//   3. Declare an array called mixedDataTypes, inkludera en funktion.
//   put different data types in the array and find the length of the array.
//   The array size should be greater than 5
//   Print length to console
//   Kör funktionen
const mixedDataTypes = [
  1,
  2,
  3,
  "Four",
  true,
  function () {
    console.log("Hi!");
  },
];
console.log(mixedDataTypes.length);
mixedDataTypes[5]();

//   4a. Declare an array variable name itCompanies and assign initial values (minst 7)
itCompanies = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
];

//   4b. Print the array using console.log()
console.log(itCompanies);

//   4c. Print the number of companies in the array
console.log(itCompanies.length);

//   4d. Print the first company, middle and last company
console.log(itCompanies[0]);
console.log(itCompanies[Math.floor(itCompanies.length / 2)]);
console.log(itCompanies[itCompanies.length - 1]);

//   4e. Print out each company (tips: foreach)
itCompanies.forEach((company) => {
  console.log(company);
});

//   4f. Change each company name to uppercase one by one and print them out (tips: foreach)
itCompanies.forEach((company) => {
  console.log(company.toUpperCase());
});

//   4g. Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
console.log(
  itCompanies[0] +
    ", " +
    itCompanies[1] +
    ", " +
    itCompanies[2] +
    ", " +
    itCompanies[3] +
    ", " +
    itCompanies[4] +
    ", " +
    itCompanies[5] +
    " and " +
    itCompanies[6] +
    " are big It Companies "
);

//   4h. Check if a certain company exists in the itCompanies array.
//   If it exist return the company else return the text 'company is not found'
let find = "apple";

if (itCompanies.includes(find)) {
  console.log("Found: " + find);
} else {
  console.log("Company does not exist!");
}

//   4i. Filter out companies which have more than one 'o' without the filter method (svårare)
//   Print to console
let newItCompanies = [];

itCompanies.forEach((company) => {
  if (!company.includes("oo")) {
    newItCompanies.push(company);
  }
});
console.log(newItCompanies);

//   4j. Sort the array using sort() method
console.log(itCompanies.sort());

//   4k. Reverse the array using reverse() method - print to console
console.log(itCompanies.reverse());

//   4l. Slice out the first 3 companies from the array - print to console
console.log(itCompanies.slice(0, 3));

//   4m. Slice out the last 3 companies from the array - print to console
console.log(itCompanies.slice(-3));

//   4n. Remove the first IT company from the array - print to console
console.log(itCompanies.shift());
console.log(itCompanies);

//   4o. Remove the last IT company from the array
console.log(itCompanies.pop());
console.log(itCompanies);

//   4p. Remove all IT companies
itCompanies.length = 0;
console.log(itCompanies);
